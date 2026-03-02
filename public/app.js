// ===== Tile Options (SVG-generated pattern tiles) =====
const TILE_OPTIONS = [
  {
    id: "white-marble",
    name: "White Marble",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="200" height="200" fill="#f0ede8"/>
      <g opacity="0.3">
        <path d="M20,10 Q60,50 40,90 T80,170" stroke="#c4bdb3" stroke-width="2" fill="none"/>
        <path d="M80,5 Q120,40 100,100 T140,190" stroke="#d1ccc4" stroke-width="1.5" fill="none"/>
        <path d="M150,20 Q170,80 130,120 T160,180" stroke="#bbb5aa" stroke-width="1" fill="none"/>
        <path d="M10,60 Q50,80 90,60 T180,80" stroke="#ccc7bf" stroke-width="1" fill="none"/>
      </g>
      <rect x="0" y="0" width="200" height="200" fill="none" stroke="#e0dbd4" stroke-width="2"/>
    </svg>`,
  },
  {
    id: "beige-travertine",
    name: "Beige Travertine",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="200" height="200" fill="#ddd0b8"/>
      <g opacity="0.25">
        <ellipse cx="40" cy="30" rx="20" ry="5" fill="#c4b89e"/>
        <ellipse cx="120" cy="80" rx="30" ry="4" fill="#c0b496"/>
        <ellipse cx="70" cy="140" rx="15" ry="3" fill="#b8ac92"/>
        <ellipse cx="160" cy="160" rx="25" ry="5" fill="#c4b89e"/>
        <ellipse cx="30" cy="100" rx="18" ry="3" fill="#bfb398"/>
      </g>
      <rect x="0" y="0" width="200" height="200" fill="none" stroke="#c8bc9e" stroke-width="2"/>
    </svg>`,
  },
  {
    id: "grey-porcelain",
    name: "Grey Porcelain",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="200" height="200" fill="#b0b3b8"/>
      <g opacity="0.15">
        <rect x="0" y="0" width="200" height="200" fill="url(#noise1)"/>
      </g>
      <defs>
        <pattern id="noise1" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="2" height="2" fill="#a0a3a8" opacity="0.3"/>
          <rect x="2" y="2" width="2" height="2" fill="#c0c3c8" opacity="0.2"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="200" height="200" fill="none" stroke="#999ca1" stroke-width="2"/>
    </svg>`,
  },
  {
    id: "terracotta",
    name: "Terracotta",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="200" height="200" fill="#c67a4a"/>
      <g opacity="0.2">
        <circle cx="30" cy="50" r="15" fill="#b06a3a"/>
        <circle cx="120" cy="30" r="20" fill="#a8623a"/>
        <circle cx="80" cy="130" r="12" fill="#b8724a"/>
        <circle cx="170" cy="100" r="18" fill="#a4603a"/>
        <circle cx="50" cy="170" r="14" fill="#b06a3a"/>
      </g>
      <rect x="0" y="0" width="200" height="200" fill="none" stroke="#a86040" stroke-width="2"/>
    </svg>`,
  },
  {
    id: "black-slate",
    name: "Black Slate",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="200" height="200" fill="#3a3d42"/>
      <g opacity="0.3">
        <line x1="0" y1="30" x2="200" y2="35" stroke="#4a4d52" stroke-width="1"/>
        <line x1="0" y1="70" x2="200" y2="68" stroke="#50535a" stroke-width="0.8"/>
        <line x1="0" y1="110" x2="200" y2="115" stroke="#454850" stroke-width="1.2"/>
        <line x1="0" y1="150" x2="200" y2="148" stroke="#4a4d55" stroke-width="0.7"/>
        <line x1="0" y1="180" x2="200" y2="183" stroke="#505560" stroke-width="1"/>
      </g>
      <rect x="0" y="0" width="200" height="200" fill="none" stroke="#2a2d32" stroke-width="2"/>
    </svg>`,
  },
  {
    id: "blue-mosaic",
    name: "Blue Mosaic",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="200" height="200" fill="#3b82f6"/>
      <g>
        <rect x="2" y="2" width="46" height="46" fill="#60a5fa" rx="2"/>
        <rect x="52" y="2" width="46" height="46" fill="#2563eb" rx="2"/>
        <rect x="102" y="2" width="46" height="46" fill="#93bbfd" rx="2"/>
        <rect x="152" y="2" width="46" height="46" fill="#3b82f6" rx="2"/>
        <rect x="2" y="52" width="46" height="46" fill="#2563eb" rx="2"/>
        <rect x="52" y="52" width="46" height="46" fill="#60a5fa" rx="2"/>
        <rect x="102" y="52" width="46" height="46" fill="#3b82f6" rx="2"/>
        <rect x="152" y="52" width="46" height="46" fill="#93bbfd" rx="2"/>
        <rect x="2" y="102" width="46" height="46" fill="#93bbfd" rx="2"/>
        <rect x="52" y="102" width="46" height="46" fill="#3b82f6" rx="2"/>
        <rect x="102" y="102" width="46" height="46" fill="#60a5fa" rx="2"/>
        <rect x="152" y="102" width="46" height="46" fill="#2563eb" rx="2"/>
        <rect x="2" y="152" width="46" height="46" fill="#3b82f6" rx="2"/>
        <rect x="52" y="152" width="46" height="46" fill="#93bbfd" rx="2"/>
        <rect x="102" y="152" width="46" height="46" fill="#2563eb" rx="2"/>
        <rect x="152" y="152" width="46" height="46" fill="#60a5fa" rx="2"/>
      </g>
    </svg>`,
  },
  {
    id: "wood-plank",
    name: "Wood Plank",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="200" height="200" fill="#a0734a"/>
      <g opacity="0.4">
        <line x1="0" y1="10" x2="200" y2="10" stroke="#8b6040" stroke-width="0.5"/>
        <line x1="0" y1="25" x2="200" y2="25" stroke="#8b6040" stroke-width="0.3"/>
        <line x1="0" y1="50" x2="200" y2="50" stroke="#8b6040" stroke-width="0.5"/>
        <line x1="0" y1="75" x2="200" y2="75" stroke="#8b6040" stroke-width="0.3"/>
        <line x1="0" y1="100" x2="200" y2="100" stroke="#8b6040" stroke-width="0.5"/>
        <line x1="0" y1="125" x2="200" y2="125" stroke="#8b6040" stroke-width="0.3"/>
        <line x1="0" y1="150" x2="200" y2="150" stroke="#8b6040" stroke-width="0.5"/>
        <line x1="0" y1="175" x2="200" y2="175" stroke="#8b6040" stroke-width="0.3"/>
        <ellipse cx="60" cy="80" rx="15" ry="10" fill="#906840" opacity="0.5"/>
        <ellipse cx="150" cy="140" rx="12" ry="8" fill="#906840" opacity="0.4"/>
      </g>
      <rect x="0" y="0" width="200" height="200" fill="none" stroke="#8b6040" stroke-width="2"/>
    </svg>`,
  },
  {
    id: "checkerboard",
    name: "Checkerboard",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="200" height="200" fill="#f5f5f0"/>
      <rect x="0" y="0" width="100" height="100" fill="#2d2d2d"/>
      <rect x="100" y="100" width="100" height="100" fill="#2d2d2d"/>
      <rect x="0" y="0" width="200" height="200" fill="none" stroke="#ccc" stroke-width="1"/>
    </svg>`,
  },
  {
    id: "hexagon-white",
    name: "Hex White",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="200" height="200" fill="#e8e8e0"/>
      <g stroke="#ccc8c0" stroke-width="1.5" fill="#f5f4f0">
        <polygon points="50,10 80,25 80,55 50,70 20,55 20,25"/>
        <polygon points="110,10 140,25 140,55 110,70 80,55 80,25"/>
        <polygon points="170,10 200,25 200,55 170,70 140,55 140,25"/>
        <polygon points="20,55 50,70 50,100 20,115 -10,100 -10,70"/>
        <polygon points="80,55 110,70 110,100 80,115 50,100 50,70"/>
        <polygon points="140,55 170,70 170,100 140,115 110,100 110,70"/>
        <polygon points="50,100 80,115 80,145 50,160 20,145 20,115"/>
        <polygon points="110,100 140,115 140,145 110,160 80,145 80,115"/>
        <polygon points="170,100 200,115 200,145 170,160 140,145 140,115"/>
        <polygon points="20,145 50,160 50,190 20,205 -10,190 -10,160"/>
        <polygon points="80,145 110,160 110,190 80,205 50,190 50,160"/>
        <polygon points="140,145 170,160 170,190 140,205 110,190 110,160"/>
      </g>
    </svg>`,
  },
];

// ===== State =====
let floorPhotoFile = null;
let selectedTile = null;
let currentStep = 1;

// ===== DOM Elements =====
const cameraInput = document.getElementById("cameraInput");
const captureArea = document.getElementById("captureArea");
const photoPreview = document.getElementById("photoPreview");
const previewImg = document.getElementById("previewImg");
const retakeBtn = document.getElementById("retakeBtn");
const nextToStep2 = document.getElementById("nextToStep2");
const backToStep1 = document.getElementById("backToStep1");
const generateBtn = document.getElementById("generateBtn");
const backToStep2 = document.getElementById("backToStep2");
const startOver = document.getElementById("startOver");
const tileGrid = document.getElementById("tileGrid");
const loadingState = document.getElementById("loadingState");
const resultArea = document.getElementById("resultArea");
const resultImage = document.getElementById("resultImage");
const resultDescription = document.getElementById("resultDescription");
const errorState = document.getElementById("errorState");
const errorMsg = document.getElementById("errorMsg");
const openCameraBtn = document.getElementById("openCameraBtn");
const cameraView = document.getElementById("cameraView");
const cameraVideo = document.getElementById("cameraVideo");
const snapBtn = document.getElementById("snapBtn");
const cameraCanvas = document.getElementById("cameraCanvas");

let cameraStream = null;

// ===== Initialize Tile Grid =====
function initTileGrid() {
  tileGrid.innerHTML = "";
  TILE_OPTIONS.forEach((tile) => {
    const card = document.createElement("div");
    card.className = "tile-card";
    card.dataset.tileId = tile.id;

    // Convert SVG to a data URL for the image
    const svgBlob = new Blob([tile.svg], { type: "image/svg+xml" });
    const svgUrl = URL.createObjectURL(svgBlob);

    card.innerHTML = `
      <img src="${svgUrl}" alt="${tile.name}" />
      <div class="tile-name">${tile.name}</div>
    `;

    card.addEventListener("click", () => selectTile(tile, card));
    tileGrid.appendChild(card);
  });
}

function selectTile(tile, card) {
  // Deselect all
  document.querySelectorAll(".tile-card").forEach((c) => c.classList.remove("selected"));
  // Select this one
  card.classList.add("selected");
  selectedTile = tile;
  generateBtn.disabled = false;
}

// ===== Step Navigation =====
function goToStep(step) {
  currentStep = step;
  document.querySelectorAll(".step-section").forEach((s) => s.classList.remove("active"));
  document.querySelectorAll(".steps-indicator .step").forEach((s) => {
    const stepNum = parseInt(s.dataset.step);
    s.classList.remove("active", "completed");
    if (stepNum === step) s.classList.add("active");
    else if (stepNum < step) s.classList.add("completed");
  });
  document.getElementById(`step${step}`).classList.add("active");
}

// ===== Camera Handling =====
openCameraBtn.addEventListener("click", async () => {
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment", width: { ideal: 1920 }, height: { ideal: 1080 } },
      audio: false,
    });
    cameraVideo.srcObject = cameraStream;
    captureArea.classList.add("hidden");
    cameraView.classList.remove("hidden");
  } catch (err) {
    // Camera access denied or not available — fall back to file input
    console.warn("Camera access failed, falling back to file input:", err);
    cameraInput.setAttribute("capture", "environment");
    cameraInput.click();
  }
});

snapBtn.addEventListener("click", () => {
  // Capture frame from video
  cameraCanvas.width = cameraVideo.videoWidth;
  cameraCanvas.height = cameraVideo.videoHeight;
  const ctx = cameraCanvas.getContext("2d");
  ctx.drawImage(cameraVideo, 0, 0);

  // Stop camera
  stopCamera();

  // Convert to blob/file
  cameraCanvas.toBlob((blob) => {
    floorPhotoFile = new File([blob], "floor-photo.jpg", { type: "image/jpeg" });
    previewImg.src = URL.createObjectURL(blob);
    cameraView.classList.add("hidden");
    photoPreview.classList.remove("hidden");
    nextToStep2.disabled = false;
  }, "image/jpeg", 0.92);
});

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach((track) => track.stop());
    cameraStream = null;
    cameraVideo.srcObject = null;
  }
}

// ===== File Input (gallery upload) =====
cameraInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  floorPhotoFile = file;
  const reader = new FileReader();
  reader.onload = (ev) => {
    previewImg.src = ev.target.result;
    captureArea.classList.add("hidden");
    photoPreview.classList.remove("hidden");
    nextToStep2.disabled = false;
  };
  reader.readAsDataURL(file);
});

retakeBtn.addEventListener("click", () => {
  floorPhotoFile = null;
  cameraInput.value = "";
  stopCamera();
  captureArea.classList.remove("hidden");
  cameraView.classList.add("hidden");
  photoPreview.classList.add("hidden");
  nextToStep2.disabled = true;
});

// ===== Navigation Buttons =====
nextToStep2.addEventListener("click", () => goToStep(2));
backToStep1.addEventListener("click", () => goToStep(1));
backToStep2.addEventListener("click", () => goToStep(2));

startOver.addEventListener("click", () => {
  floorPhotoFile = null;
  selectedTile = null;
  cameraInput.value = "";
  stopCamera();
  captureArea.classList.remove("hidden");
  cameraView.classList.add("hidden");
  photoPreview.classList.add("hidden");
  nextToStep2.disabled = true;
  generateBtn.disabled = true;
  document.querySelectorAll(".tile-card").forEach((c) => c.classList.remove("selected"));
  resultArea.classList.add("hidden");
  errorState.classList.add("hidden");
  loadingState.classList.add("hidden");
  goToStep(1);
});

// ===== Generate Visualization =====
generateBtn.addEventListener("click", async () => {
  if (!floorPhotoFile || !selectedTile) return;

  goToStep(3);
  loadingState.classList.remove("hidden");
  resultArea.classList.add("hidden");
  errorState.classList.add("hidden");

  try {
    // Convert SVG tile to PNG base64 using canvas
    const tileBase64 = await svgToPngBase64(selectedTile.svg);

    // Create form data
    const formData = new FormData();
    formData.append("floorPhoto", floorPhotoFile);
    formData.append("tileImageBase64", tileBase64);
    formData.append("tileLabel", selectedTile.name);

    const response = await fetch("/api/generate", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Generation failed");
    }

    // Show result
    resultImage.src = data.image;
    if (data.description) {
      resultDescription.textContent = data.description;
      resultDescription.classList.remove("hidden");
    }
    resultArea.classList.remove("hidden");
  } catch (err) {
    console.error("Error:", err);
    errorMsg.textContent = err.message;
    errorState.classList.remove("hidden");
  } finally {
    loadingState.classList.add("hidden");
  }
});

// ===== Utility: Convert SVG to PNG Base64 =====
function svgToPngBase64(svgString) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    const svgBlob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0, 400, 400);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to convert tile to image"));
    };
    img.src = url;
  });
}

// ===== Init =====
initTileGrid();
