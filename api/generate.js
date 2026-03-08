const { GoogleGenerativeAI } = require("@google/generative-ai");
const multer = require("multer");

// Configure multer for in-memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
});

// Helper to run multer as a promise
function runMulter(req, res) {
  return new Promise((resolve, reject) => {
    upload.single("floorPhoto")(req, res, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Parse multipart form data
    await runMulter(req, res);

    const { tileImageBase64, tileLabel } = req.body;
    const floorPhoto = req.file;

    if (!floorPhoto) {
      return res.status(400).json({ error: "Floor photo is required" });
    }
    if (!tileImageBase64) {
      return res.status(400).json({ error: "Tile image is required" });
    }

    // Convert floor photo to base64
    const floorBase64 = floorPhoto.buffer.toString("base64");
    const floorMimeType = floorPhoto.mimetype;

    // Clean up the tile base64 (remove data URL prefix if present)
    const tileBase64Clean = tileImageBase64.replace(
      /^data:image\/\w+;base64,/,
      ""
    );

    // Initialize Gemini
    console.log(process.env.GEMINI_API_KEY)
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-3.1-flash-image-preview",
      generationConfig: {
        responseModalities: ["Text", "Image"],
      },
    });

    const prompt = `You are an expert interior designer and image editor. 
I'm showing you two images:
1. A photo of a room/floor space
2. A tile pattern/sample called "${tileLabel || "selected tile"}"

Please generate a NEW photorealistic image that shows how the room would look if the floor was replaced with this tile pattern. 
- Maintain the exact same room perspective, lighting, shadows, and furniture/objects
- Tile the pattern naturally across the entire floor area with proper perspective distortion
- Keep grout lines realistic and consistent
- Match the lighting and color temperature of the original room
- Make it look as realistic and natural as possible

Generate the modified room image.`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: floorMimeType,
          data: floorBase64,
        },
      },
      {
        inlineData: {
          mimeType: "image/png",
          data: tileBase64Clean,
        },
      },
    ]);

    const response = result.response;
    const candidates = response.candidates;

    if (!candidates || candidates.length === 0) {
      return res.status(500).json({ error: "No response from Gemini" });
    }

    // Extract image and text from response
    let generatedImage = null;
    let textResponse = "";

    for (const part of candidates[0].content.parts) {
      if (part.inlineData) {
        generatedImage = {
          mimeType: part.inlineData.mimeType,
          data: part.inlineData.data,
        };
      } else if (part.text) {
        textResponse = part.text;
      }
    }

    if (!generatedImage) {
      return res.status(500).json({
        error: "Gemini did not generate an image. Response: " + textResponse,
      });
    }

    res.json({
      image: `data:${generatedImage.mimeType};base64,${generatedImage.data}`,
      description: textResponse,
    });
  } catch (error) {
    console.error("Generation error:", error);
    res.status(500).json({
      error: error.message || "Failed to generate visualization",
    });
  }
};
