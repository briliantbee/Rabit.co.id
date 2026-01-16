// Import products data - Hanya produk yang sesuai dengan gambar promosi
const products = [
  {
    id: 1,
    name: "Smart IP Indoor Camera PTZ + AI Auto Tracking",
    category: "Keamanan Pintar",
    subcategory: "Smart CCTV Indoor",
    image: "/assets/Rabit_indoor_camera.jpeg",
    price: "Rp 349.000",
    specs: [
      "Resolusi: 1080P Full HD (2MP)",
      "Pan & Tilt: 355° horizontal, 90° vertikal",
      "AI Auto Tracking",
      "Night Vision hingga 10m",
      "Audio 2-way",
      "SD Card & Cloud Storage Support",
      "Chipset Terbaik Jaminan",
      "BLE Bluetooth + WiFi",
    ],
    package:
      "1 x Smart IP Camera Indoor PTZ X, 1 x Power Adapter, 1 x Mounting Kit, 1 x Quick Guide",
    warranty: "Garansi 18 Bulan - Garansi Seumur Hidup",
    description: {
      title: "Smart IP Indoor Camera PTZ + AI Auto Tracking",
      subtitle:
        "Keamanan Pintar. Otomatisasi. Powered by Tuya - Ekosistem Smart Home dan IoT global yang terdepan.",
      intro:
        "FITUR LENGKAP. HARGA BESTIE.\n\nKamera indoor pintar dengan AI Auto Tracking yang secara otomatis melacak pergerakan. Dilengkapi dengan SD Card & Cloud Storage untuk penyimpanan video maksimal.",
      features: [
        {
          title: "AI Auto Tracking",
          desc: "Kamera secara otomatis melacak dan mengikuti pergerakan objek dengan teknologi AI canggih.",
        },
        {
          title: "Pan & Tilt 355°",
          desc: "Kontrol penuh dengan rotasi horizontal 355° dan vertikal 90° untuk cakupan maksimal.",
        },
        {
          title: "1080P Full HD",
          desc: "Resolusi 2MP memberikan gambar jernih dan detail untuk keamanan 24/7.",
        },
        {
          title: "Night Vision",
          desc: "Penglihatan malam dengan jarak hingga 10 meter untuk keamanan sepanjang waktu.",
        },
        {
          title: "Audio 2-Way",
          desc: "Berkomunikasi langsung melalui kamera dengan audio 2 arah yang jernih.",
        },
        {
          title: "SD Card & Cloud Storage",
          desc: "Dukungan penyimpanan ganda dengan SD Card hingga 128GB dan Cloud Storage.",
        },
      ],
    },
  },
  {
    id: 2,
    name: "Smart IP Outdoor Camera PTZ + Dual Lens",
    category: "Keamanan Pintar",
    subcategory: "Smart CCTV Outdoor",
    image: "/assets/rabit_outdorr.jpeg",
    price: "Rp 849.000",
    specs: [
      "Resolusi: 1080P Full HD (2x 2MP)",
      "Dual Lens untuk jangkauan maksimal",
      "Pan & Tilt PTZ",
      "Night Vision dengan Spotlight",
      "Waterproof IP66",
      "Motion Detection",
      "SD Card & Cloud Storage Support",
      "Chipset Terbaik Jaminan",
    ],
    package:
      "1 x Smart IP Outdoor Camera PTZ Dual Lens, 1 x Power Adapter, 1 x Mounting Kit, 1 x Quick Guide",
    warranty: "Garansi 12 Bulan - Garansi Seumur Hidup",
    description: {
      title: "Smart IP Outdoor Camera PTZ + Dual Lens",
      subtitle:
        "DUA LENSA. JAGA MAKSIMAL. Keamanan Pintar. Otomatisasi. Powered by Tuya",
      intro:
        "FITUR LENGKAP. HARGA BESTIE.\n\nKamera outdoor dengan dual lens 2x 2MP untuk cakupan area yang lebih luas. Dilengkapi spotlight untuk night vision optimal dan tahan cuaca ekstrem.",
      features: [
        {
          title: "Dual Lens 2x 2MP",
          desc: "Dua lensa dengan resolusi 2MP masing-masing memberikan cakupan area maksimal tanpa blind spot.",
        },
        {
          title: "PTZ Pan & Tilt",
          desc: "Kontrol penuh rotasi kamera untuk memantau seluruh area outdoor.",
        },
        {
          title: "Night Vision + Spotlight",
          desc: "Penglihatan malam dengan spotlight terintegrasi untuk gambar berwarna di malam hari.",
        },
        {
          title: "Weatherproof IP66",
          desc: "Tahan air dan debu, cocok untuk kondisi cuaca ekstrem outdoor Indonesia.",
        },
        {
          title: "SD Card & Cloud Storage",
          desc: "Penyimpanan ganda dengan SD Card hingga 128GB dan backup cloud otomatis.",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Smart Door Lock EZY + Ultra-Fast Fingerprint",
    category: "Keamanan Pintar",
    subcategory: "Smart Door Lock",
    image: "/assets/doorlock.jpeg",
    price: "Rp 2.999.000",
    specs: [
      "Ultra-Fast Fingerprint Sensor",
      "Fingerprint Capacity: 100",
      "Password: 4-12 digits",
      "RFID Card Support",
      "Auto-locks Electric",
      "Lock and Unlock History",
      "5 Ways to Unlock",
      "Energy USB Type-C",
      "Emergency Power: Micro USB",
      "Battery: 4 x AA (6-12 bulan)",
      "Material: Zinc Alloy",
    ],
    package:
      "1 x Smart Door Lock EZY, 2 x RFID Card, 1 x Installation Kit, 4 x AA Battery, 1 x Quick Guide",
    warranty: "Garansi 12 Bulan + Chipset Terbaik Jaminan",
    description: {
      title: "Smart Door Lock EZY + Ultra-Fast Fingerprint",
      subtitle:
        "CEPAT. AMAN. NYAMAN. Keamanan Pintar. Otomatisasi. Powered by Tuya",
      intro:
        "Kunci pintu pintar dengan sensor sidik jari ultra-cepat dan 5 metode akses untuk keamanan maksimal keluarga Anda.",
      features: [
        {
          title: "Ultra-Fast Fingerprint Sensor",
          desc: "Sensor sidik jari generasi terbaru yang sangat cepat dan akurat dalam 0.3 detik.",
        },
        {
          title: "Auto-locks Electric",
          desc: "Kunci otomatis mengunci pintu secara elektrik setelah pintu ditutup untuk keamanan maksimal.",
        },
        {
          title: "5 Ways to Unlock",
          desc: "Buka dengan sidik jari, password, RFID card, kunci mekanis, atau smartphone app.",
        },
        {
          title: "Lock and Unlock History",
          desc: "Pantau riwayat keluar masuk lengkap dengan waktu dan metode akses via aplikasi.",
        },
        {
          title: "Protect+ Security",
          desc: "Teknologi enkripsi tingkat bank dengan perlindungan anti-peeping password.",
        },
        {
          title: "Energy USB Type-C",
          desc: "Charging emergency via USB Type-C ketika baterai habis.",
        },
      ],
    },
  },
  {
    id: 4,
    name: "Storage SD Card Rabit Legend Series 64GB",
    category: "Penyimpanan Video",
    subcategory: "SD Card Storage",
    image: "/assets/sd_card64.jpeg",
    price: "Rp 149.000",
    specs: [
      "Kapasitas: 64GB",
      "Kecepatan: hingga 100 Mb/s",
      "Class: V30 U3 A1",
      "Type: XC (SDXC)",
      "Optimasi untuk IP Camera",
      "Garansi Seumur Hidup",
      "Compatible dengan semua device",
    ],
    package: "1 x Rabit SD Card Legend Series 64GB",
    warranty: "Garansi Seumur Hidup",
    description: {
      title: "SD Card Legend Series 64GB - Smart IP Camera Storage",
      subtitle:
        "Rabit LEGEND - Di optimasi untuk performa IP Camera. Kecepatan hingga 100 Mb/s",
      intro:
        "SD Card berkualitas premium yang dioptimalkan khusus untuk IP Camera dengan kecepatan tinggi dan garansi seumur hidup.",
      features: [
        {
          title: "Optimasi IP Camera",
          desc: "Dirancang khusus untuk recording IP Camera 24/7 dengan performa stabil.",
        },
        {
          title: "Kecepatan Tinggi 100 Mb/s",
          desc: "Transfer data cepat hingga 100 Mb/s untuk recording Full HD tanpa lag.",
        },
        {
          title: "V30 U3 A1 Class",
          desc: "Class premium untuk performa maksimal dan durability tinggi.",
        },
        {
          title: "Garansi Seumur Hidup",
          desc: "Jaminan kualitas dengan garansi seumur hidup untuk ketenangan Anda.",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Storage SD Card Rabit Legend Series 128GB",
    category: "Penyimpanan Video",
    subcategory: "SD Card Storage",
    image: "/assets/sd_card128.jpeg",
    price: "Rp 249.000",
    specs: [
      "Kapasitas: 128GB",
      "Kecepatan: hingga 100 Mb/s",
      "Class: V30 U3 A1",
      "Type: XC (SDXC)",
      "Optimasi untuk IP Camera",
      "Garansi Seumur Hidup",
      "Compatible dengan semua device",
    ],
    package: "1 x Rabit SD Card Legend Series 128GB",
    warranty: "Garansi Seumur Hidup",
    description: {
      title: "SD Card Legend Series 128GB - Smart IP Camera Storage",
      subtitle:
        "Rabit LEGEND - Di optimasi untuk performa IP Camera. Kecepatan hingga 100 Mb/s",
      intro:
        "SD Card kapasitas besar 128GB untuk recording lebih lama dengan kualitas premium dan garansi seumur hidup.",
      features: [
        {
          title: "Kapasitas Besar 128GB",
          desc: "Penyimpanan lebih besar untuk recording lebih lama hingga berminggu-minggu.",
        },
        {
          title: "Optimasi IP Camera",
          desc: "Dirancang khusus untuk recording IP Camera 24/7 dengan performa stabil.",
        },
        {
          title: "Kecepatan Tinggi 100 Mb/s",
          desc: "Transfer data cepat hingga 100 Mb/s untuk recording Full HD tanpa lag.",
        },
        {
          title: "Garansi Seumur Hidup",
          desc: "Jaminan kualitas dengan garansi seumur hidup untuk ketenangan Anda.",
        },
      ],
    },
  },
];

// Get product ID from URL
function getProductIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get("id"));
}

// Get product by ID
function getProductById(id) {
  return products.find((p) => p.id === id);
}

// Toggle category in sidebar
function toggleCategory(categoryId) {
  const element = document.getElementById(`cat-${categoryId}`);
  const icon = document.getElementById(`icon-${categoryId}`);

  if (element && icon) {
    element.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
  }
}

// Render product detail
function renderProductDetail(product) {
  if (!product) {
    console.error("Product not found!");
    document.querySelector("main").innerHTML = `
      <div class="text-center py-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Produk Tidak Ditemukan</h2>
        <a href="/" class="text-orange-600 hover:text-orange-700">Kembali ke Beranda</a>
      </div>
    `;
    return;
  }

  console.log("Rendering product:", product.name);

  // Set document title
  document.title = `${product.name} - Rabit Smart Home`;

  // Main image
  const mainImage = document.getElementById("mainImage");
  if (mainImage) {
    mainImage.src = product.image;
    mainImage.alt = product.name;
  }

  // Product name
  const productName = document.getElementById("productName");
  if (productName) {
    productName.textContent = product.name;
  }

  // Price
  const productPrice = document.getElementById("productPrice");
  if (productPrice) {
    productPrice.textContent = product.price;
  }

  // Specifications
  const productSpecs = document.getElementById("productSpecs");
  if (productSpecs) {
    productSpecs.innerHTML = product.specs
      .map((spec) => `<div class="text-gray-700 mb-1">• ${spec}</div>`)
      .join("");
  }

  // Package contents
  const productPackage = document.getElementById("productPackage");
  if (productPackage) {
    productPackage.innerHTML = `<div class="text-gray-700">${product.package}</div>`;
  }

  // Warranty
  const productWarranty = document.getElementById("productWarranty");
  if (productWarranty) {
    productWarranty.innerHTML = `<div class="text-gray-700">${product.warranty}</div>`;
  }

  // Description
  const productDescription = document.getElementById("productDescription");
  if (productDescription && product.description) {
    let descHtml = `<h2 class="text-2xl font-bold mb-4">${product.description.title}</h2>`;
    descHtml += `<p class="text-gray-600 mb-4">${product.description.subtitle}</p>`;

    if (product.description.intro) {
      const introLines = product.description.intro.split("\n");
      descHtml += introLines
        .map((line) => `<p class="mb-3 text-gray-700">${line}</p>`)
        .join("");
    }

    productDescription.innerHTML = descHtml;
  }

  // Features
  const productFeatures = document.getElementById("productFeatures");
  if (productFeatures && product.description && product.description.features) {
    productFeatures.innerHTML = product.description.features
      .map(
        (feature) => `
        <div class="mb-6">
          <h4 class="font-bold text-lg mb-2">${feature.title}</h4>
          <p class="text-gray-700">${feature.desc}</p>
        </div>
      `
      )
      .join("");
  }

  // Save to recently viewed
  saveToRecentlyViewed(product);
}

// Change main image when thumbnail is clicked
function changeMainImage(imageUrl) {
  const mainImage = document.getElementById("mainImage");
  if (mainImage) {
    mainImage.src = imageUrl;
  }
}

// Save to recently viewed (localStorage)
function saveToRecentlyViewed(product) {
  try {
    let recentlyViewed =
      JSON.parse(localStorage.getItem("recentlyViewed")) || [];

    // Remove if already exists
    recentlyViewed = recentlyViewed.filter((p) => p.id !== product.id);

    // Add to beginning
    recentlyViewed.unshift({
      id: product.id,
      name: product.name,
      image: product.image,
      subcategory: product.subcategory,
      price: product.price,
    });

    // Keep only last 3 items
    recentlyViewed = recentlyViewed.slice(0, 3);

    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));

    // Render recently viewed
    renderRecentlyViewed(recentlyViewed);
  } catch (e) {
    console.error("Error saving to recently viewed:", e);
  }
}

// Render recently viewed in sidebar
function renderRecentlyViewed(items) {
  const container = document.getElementById("recentlyViewed");
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML =
      '<p class="text-sm text-gray-500">Belum ada produk yang dilihat</p>';
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
    <a 
      href="?id=${item.id}" 
      class="flex items-center gap-3 hover:bg-gray-50 p-2 rounded transition"
    >
      <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
      <div class="flex-1 min-w-0">
        <p class="text-xs text-gray-500">${item.subcategory}</p>
        <p class="text-sm font-medium text-gray-900 truncate">${item.name}</p>
        <p class="text-xs text-orange-600 font-semibold">${item.price}</p>
      </div>
    </a>
  `
    )
    .join("");
}

// Setup event listeners
function setupEventListeners() {
  // Category toggles
  const categoryButtons = document.querySelectorAll("[data-category]");
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const categoryId = this.getAttribute("data-category");
      toggleCategory(categoryId);
    });
  });

  // Subcategory links - navigate to main product page
  const subcategoryLinks = document.querySelectorAll(".subcategory-link");
  subcategoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // Navigate to main product page
      window.location.href = "/";
    });
  });
}

// Initialize page
function init() {
  console.log("Initializing product detail page...");

  const productId = getProductIdFromURL();
  console.log("Product ID from URL:", productId);

  const product = getProductById(productId);
  renderProductDetail(product);
  setupEventListeners();

  // Load recently viewed from localStorage
  try {
    const recentlyViewed =
      JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    renderRecentlyViewed(recentlyViewed);
  } catch (e) {
    console.error("Error loading recently viewed:", e);
  }
}

// Make functions globally available
window.changeMainImage = changeMainImage;
window.toggleCategory = toggleCategory;

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

console.log("ProductDetail.js loaded successfully");
