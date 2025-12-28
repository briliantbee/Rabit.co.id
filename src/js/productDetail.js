// Import products data (pastikan ini sama dengan product.js)
const products = [
  {
    id: 1,
    name: "Smart IP Camera CCTV Indoor PTZ X - AI Auto Tracking",
    category: "Keamanan Pintar",
    subcategory: "Smart CCTV Indoor",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400",
    price: "Rp 899.000",
    specs: [
      "Resolusi: 1080P Full HD",
      "Pan & Tilt: 355° horizontal, 90° vertikal",
      "AI Auto Tracking",
      "Night Vision hingga 10m",
      "Audio 2-way",
      "Support Cloud & SD Card",
    ],
    package:
      "1 x Smart IP Camera Indoor PTZ X, 1 x Power Adapter, 1 x Mounting Kit, 1 x Quick Guide",
    warranty: "Garansi Produk 18 Bulan",
    description: {
      title: "Smart IP Camera CCTV Indoor PTZ X - AI Auto Tracking",
      subtitle:
        "Officially Powered by Tuya, ekosistem Smart Home dan IoT global yang terdepan.",
      features: [
        {
          title: "AI Auto Tracking",
          desc: "Kamera secara otomatis melacak dan mengikuti pergerakan objek dengan teknologi AI.",
        },
        {
          title: "Pan & Tilt 355°",
          desc: "Kontrol penuh dengan rotasi horizontal 355° dan vertikal 90°.",
        },
        {
          title: "Night Vision",
          desc: "Penglihatan malam dengan jarak hingga 10 meter untuk keamanan 24/7.",
        },
        {
          title: "Audio 2-Way",
          desc: "Berkomunikasi langsung melalui kamera dengan audio 2 arah.",
        },
      ],
    },
  },
  {
    id: 2,
    name: "Smart IP Camera CCTV Indoor Mini - Wide Angle",
    category: "Keamanan Pintar",
    subcategory: "Smart CCTV Indoor",
    image: "/camera.jpg",
    price: "Rp 599.000",
    specs: [
      "Resolusi: 720P HD",
      "Wide Angle 120°",
      "Night Vision",
      "Motion Detection",
      "Support WiFi 2.4GHz",
      "Compact Design",
    ],
    package:
      "1 x Smart IP Camera Indoor Mini, 1 x Power Adapter, 1 x Quick Guide",
    warranty: "Garansi Produk 12 Bulan",
    description: {
      title: "Smart IP Camera CCTV Indoor Mini - Wide Angle",
      subtitle: "Solusi keamanan kompak dengan sudut pandang lebar.",
      features: [
        {
          title: "Wide Angle 120°",
          desc: "Cakupan area lebih luas dengan sudut pandang 120 derajat.",
        },
        {
          title: "Compact Design",
          desc: "Desain mini yang tidak mengganggu estetika ruangan.",
        },
        {
          title: "Motion Detection",
          desc: "Deteksi gerakan otomatis dengan notifikasi ke smartphone.",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Smart IP Camera CCTV Outdoor Weatherproof",
    category: "Keamanan Pintar",
    subcategory: "Smart CCTV Outdoor",
    image: "/camera.jpg",
    price: "Rp 1.299.000",
    specs: [
      "Resolusi: 2K Quad HD",
      "IP66 Weatherproof",
      "Night Vision 20m",
      "Motion Detection with Alert",
      "Two-way Audio",
      "Cloud & SD Card Support",
    ],
    package:
      "1 x Smart IP Camera Outdoor, 1 x Power Adapter, 1 x Mounting Kit, 1 x Weatherproof Cable, 1 x Quick Guide",
    warranty: "Garansi Produk 24 Bulan",
    description: {
      title: "Smart IP Camera CCTV Outdoor Weatherproof",
      subtitle: "Kamera outdoor tahan cuaca untuk keamanan eksterior maksimal.",
      features: [
        {
          title: "IP66 Weatherproof",
          desc: "Tahan hujan, debu, dan kondisi cuaca ekstrem.",
        },
        {
          title: "2K Quad HD",
          desc: "Resolusi 2K untuk gambar super jernih dan detail.",
        },
        {
          title: "Night Vision 20m",
          desc: "Jangkauan night vision hingga 20 meter untuk area luas.",
        },
      ],
    },
  },
  {
    id: 4,
    name: "NVR 8 Channel dengan HDD 1TB",
    category: "Keamanan Pintar",
    subcategory: "Penyimpanan Video",
    image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=400",
    price: "Rp 2.499.000",
    specs: [
      "8 Channel Recording",
      "HDD: 1TB Pre-installed",
      "Support up to 4TB",
      "H.265+ Compression",
      "Remote Viewing via App",
      "HDMI & VGA Output",
    ],
    package:
      "1 x NVR 8CH, 1 x HDD 1TB, 1 x Power Adapter, 1 x HDMI Cable, 1 x Manual",
    warranty: "Garansi Produk 24 Bulan, HDD 12 Bulan",
    description: {
      title: "NVR 8 Channel dengan HDD 1TB",
      subtitle: "Solusi penyimpanan video lengkap untuk sistem CCTV Anda.",
      features: [
        {
          title: "8 Channel Recording",
          desc: "Rekam hingga 8 kamera secara bersamaan.",
        },
        {
          title: "H.265+ Compression",
          desc: "Teknologi kompresi canggih untuk menghemat ruang penyimpanan.",
        },
        {
          title: "Remote Viewing",
          desc: "Akses rekaman dari mana saja via smartphone.",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Smart Door Lock Fingerprint Pro",
    category: "Keamanan Pintar",
    subcategory: "Smart Door Lock",
    image: "/Doorlock.jpg",
    price: "Rp 3.299.000",
    specs: [
      "Fingerprint Capacity: 100",
      "Password: 4-12 digits",
      "RFID Card Support",
      "Emergency Power: Micro USB",
      "Battery: 4 x AA (6-12 bulan)",
      "Material: Zinc Alloy",
    ],
    package:
      "1 x Smart Door Lock, 2 x RFID Card, 1 x Installation Kit, 4 x AA Battery",
    warranty: "Garansi Produk 24 Bulan",
    description: {
      title: "Smart Door Lock Fingerprint Pro",
      subtitle:
        "Kunci pintu pintar dengan 4 metode akses untuk keamanan maksimal.",
      features: [
        {
          title: "Multi Access",
          desc: "Buka dengan sidik jari, password, RFID card, atau kunci mekanis.",
        },
        {
          title: "High Security",
          desc: "Teknologi enkripsi tingkat bank untuk keamanan data.",
        },
        {
          title: "Long Battery Life",
          desc: "Baterai tahan 6-12 bulan dengan indikator baterai lemah.",
        },
      ],
    },
  },
  {
    id: 6,
    name: "Smart Light Bulb Color 10W Bluetooth",
    category: "Efisiensi Energi",
    subcategory: "Smart Light",
    image: "/lamp.jpg",
    price: "Rp 149.000",
    specs: [
      "Lumens: 1000 lm",
      "Color Temp: 2700K - 6500K",
      "Color Range: 16 Million Color",
      "Power: 10 Watt",
      "BLE (Bluetooth Low Energy): 2.400-2.4835GHz",
      "System Support: iOS & Android OS",
      "Voltage: 220-240V 50Hz",
      "Lifetime: Up to 20,000 Hours",
    ],
    package: "1 x Rabit Smart Bulb Color 10w Bluetooth",
    warranty: "Garansi Produk 18 Bulan",
    description: {
      title: "Smart Light Bulb Color 10W Bluetooth",
      subtitle:
        "Officially Powered by Tuya, ekosistem Smart Home dan IoT global yang terdepan.",
      features: [
        {
          title: "Fitur-Fitur:",
          desc: "Cukup unduh aplikasi, hubungkan lampu dengan Bluetooth Smartphone, tanpa WiFi, lampu siap digunakan.",
        },
        {
          title: "Stabil",
          desc: "Tidak seperti lampu Smart WiFi Only umumnya, saat WiFi mengalami gangguan, lampu ini selalu bisa di kontrol stabil dengan Bluetooth.",
        },
        {
          title: "Ekobright, Super Terang, Super Redup, Hemat Energi",
          desc: "Pelopor teknologi Rendah Watt, Tinggi Lumen. Setara dengan terang Smart Bulb lain, 2 watt lebih tinggi. 8W=10W, 10W=12W, 13W=15W. Redupkan cahaya s/d 1% untuk penghematan energi.",
        },
      ],
    },
  },
  {
    id: 7,
    name: "Smart Light Downlight Slim 18W Bluetooth",
    category: "Efisiensi Energi",
    subcategory: "Smart Light",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400",
    price: "Rp 299.000",
    specs: [
      "Lumens: 1800 lm",
      "Color Temp: 2700K - 6500K",
      "Power: 18 Watt",
      "Diameter: 225mm",
      "BLE: 2.400-2.4835GHz",
      "System Support: iOS & Android OS",
      "Voltage: 220-240V 50Hz",
    ],
    package: "1 x Rabit Smart Light Downlight Slim 18W, Installation Kit",
    warranty: "Garansi Produk 18 Bulan",
    description: {
      title: "Smart Light Downlight Slim 18W Bluetooth",
      subtitle: "Lampu downlight pintar dengan desain slim yang elegan.",
      features: [
        {
          title: "Desain Slim",
          desc: "Ketebalan ultra-tipis yang cocok untuk plafon modern.",
        },
        {
          title: "High Brightness",
          desc: "1800 lumens untuk penerangan maksimal.",
        },
        {
          title: "Smart Control",
          desc: "Kontrol via Bluetooth tanpa perlu WiFi.",
        },
      ],
    },
  },
  {
    id: 8,
    name: "Smart Plug 16A with Energy Monitor",
    category: "Efisiensi Energi",
    subcategory: "Sakelar & Colokan",
    image: "/sakelar.jpg",
    price: "Rp 199.000",
    specs: [
      "Max Load: 16A / 3680W",
      "Energy Monitoring",
      "WiFi 2.4GHz",
      "Timer & Schedule",
      "Voice Control Support",
      "Overload Protection",
    ],
    package: "1 x Smart Plug 16A, 1 x Quick Guide",
    warranty: "Garansi Produk 12 Bulan",
    description: {
      title: "Smart Plug 16A with Energy Monitor",
      subtitle: "Colokan pintar dengan monitoring konsumsi listrik real-time.",
      features: [
        {
          title: "Energy Monitoring",
          desc: "Pantau penggunaan listrik secara real-time dan riwayat konsumsi.",
        },
        {
          title: "High Power 16A",
          desc: "Mendukung perangkat hingga 3680W dengan aman.",
        },
        {
          title: "Smart Schedule",
          desc: "Atur jadwal on/off otomatis untuk hemat energi.",
        },
      ],
    },
  },
  {
    id: 9,
    name: "Smart Switch 3 Gang WiFi",
    category: "Efisiensi Energi",
    subcategory: "Sakelar & Colokan",
    image: "/sakelar.jpg",
    price: "Rp 349.000",
    specs: [
      "3 Gang Control",
      "WiFi 2.4GHz",
      "Touch Panel Glass",
      "Timer & Schedule",
      "Voice Control Support",
      "No Neutral Wire Required",
    ],
    package: "1 x Smart Switch 3 Gang, 1 x Installation Guide",
    warranty: "Garansi Produk 18 Bulan",
    description: {
      title: "Smart Switch 3 Gang WiFi",
      subtitle: "Saklar pintar 3 tombol dengan panel kaca premium.",
      features: [
        {
          title: "Touch Panel",
          desc: "Panel kaca premium dengan sentuhan responsif.",
        },
        {
          title: "3 Gang Control",
          desc: "Kontrol 3 lampu berbeda dalam satu panel.",
        },
        {
          title: "Easy Installation",
          desc: "Tidak memerlukan kabel neutral untuk instalasi mudah.",
        },
      ],
    },
  },
  {
    id: 10,
    name: "Smart IR Remote Universal",
    category: "Efisiensi Energi",
    subcategory: "Kendali",
    image: "/remote.jpg",
    price: "Rp 249.000",
    specs: [
      "Control up to 50 devices",
      "WiFi 2.4GHz",
      "IR Database 10,000+ brands",
      "Voice Control Support",
      "Timer & Scene",
      "Compact Design",
    ],
    package: "1 x Smart IR Remote, 1 x USB Cable, 1 x Quick Guide",
    warranty: "Garansi Produk 12 Bulan",
    description: {
      title: "Smart IR Remote Universal",
      subtitle: "Remote universal pintar untuk semua perangkat IR Anda.",
      features: [
        {
          title: "Universal Control",
          desc: "Kontrol TV, AC, kipas, dan perangkat IR lainnya dari satu remote.",
        },
        {
          title: "Large Database",
          desc: "Database lebih dari 10,000 merek untuk kompatibilitas maksimal.",
        },
        {
          title: "Smart Scene",
          desc: "Buat scene untuk mengontrol banyak perangkat sekaligus.",
        },
      ],
    },
  },
  {
    id: 11,
    name: "Smart WiFi Router AC1200 Dual Band",
    category: "Jaringan Internet",
    subcategory: "Router",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
    price: "Rp 799.000",
    specs: [
      "Speed: 1200Mbps (867+300)",
      "Band: Dual Band 2.4GHz & 5GHz",
      "Antenna: 4 x 5dBi",
      "Port: 4 LAN + 1 WAN",
      "Coverage: Up to 150m²",
      "Guest Network Support",
    ],
    package:
      "1 x Smart Router AC1200, 1 x Power Adapter, 1 x Ethernet Cable, 1 x Quick Guide",
    warranty: "Garansi Produk 12 Bulan",
    description: {
      title: "Smart WiFi Router AC1200 Dual Band",
      subtitle: "Router pintar untuk koneksi internet stabil dan cepat.",
      features: [
        {
          title: "Dual Band",
          desc: "2.4GHz untuk jangkauan dan 5GHz untuk kecepatan maksimal.",
        },
        {
          title: "Smart Management",
          desc: "Kelola jaringan via app dengan parental control dan guest network.",
        },
        {
          title: "Wide Coverage",
          desc: "Cakupan hingga 150m² dengan 4 antena powerful.",
        },
      ],
    },
  },
  {
    id: 12,
    name: "WiFi Range Extender AC750",
    category: "Jaringan Internet",
    subcategory: "Range Extender",
    image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=400",
    price: "Rp 349.000",
    specs: [
      "Speed: 750Mbps",
      "Dual Band 2.4GHz & 5GHz",
      "Antenna: 2 x 3dBi",
      "Coverage Extension: Up to 100m²",
      "Easy Setup via WPS",
      "Ethernet Port",
    ],
    package: "1 x WiFi Range Extender, 1 x Quick Guide",
    warranty: "Garansi Produk 12 Bulan",
    description: {
      title: "WiFi Range Extender AC750",
      subtitle: "Perluas jangkauan WiFi Anda hingga seluruh rumah.",
      features: [
        {
          title: "Easy Setup",
          desc: "Setup mudah dengan tombol WPS dalam hitungan detik.",
        },
        {
          title: "Dual Band",
          desc: "Mendukung dual band untuk performa optimal.",
        },
        {
          title: "Extended Coverage",
          desc: "Perpanjang jangkauan WiFi hingga 100m² tambahan.",
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

  // Thumbnails (if product has multiple images)
  const thumbnails = document.getElementById("thumbnails");
  if (thumbnails && product.images) {
    thumbnails.innerHTML = product.images
      .map(
        (img, index) => `
      <img 
        src="${img}" 
        alt="${product.name} ${index + 1}"
        class="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75 transition"
        onclick="changeMainImage('${img}')"
      />
    `
      )
      .join("");
  }

  // Product name
  const productName = document.getElementById("productName");
  if (productName) {
    productName.textContent = product.name;
  }

  // Specifications
  const productSpecs = document.getElementById("productSpecs");
  if (productSpecs) {
    productSpecs.innerHTML = product.specs
      .map((spec) => `<div class="text-gray-700">${spec}</div>`)
      .join("");
  }

  // Package contents
  const productPackage = document.getElementById("productPackage");
  if (productPackage) {
    // Split by newline and create list
    const packageItems = product.package.split("\n");
    productPackage.innerHTML = packageItems
      .map((item) => `<div class="mb-1">${item}</div>`)
      .join("");
  }

  // Description
  const productDescription = document.getElementById("productDescription");
  if (productDescription && product.description) {
    let descHtml = `<h2 class="text-2xl font-bold mb-4">${product.description.title}</h2>`;

    if (product.description.intro) {
      const introLines = product.description.intro.split("\n");
      descHtml += introLines
        .map((line) => `<p class="mb-3">${line}</p>`)
        .join("");
    }

    if (product.description.appInfo) {
      descHtml += `<p class="mb-3 font-semibold">${product.description.appInfo}</p>`;
    }

    if (product.description.sdCard) {
      descHtml += `<p class="mb-3">${product.description.sdCard}</p>`;
    }

    productDescription.innerHTML = descHtml;
  }

  // Features
  const productFeatures = document.getElementById("productFeatures");
  if (productFeatures && product.description && product.description.features) {
    productFeatures.innerHTML = product.description.features
      .map((feature) => {
        if (feature.title === "FITUR" && !feature.desc) {
          return ""; // Skip empty FITUR header
        }
        return `
        <div class="mb-6">
          <h4 class="font-bold text-lg mb-2">${feature.title}</h4>
          ${feature.desc ? `<p class="text-gray-700">${feature.desc}</p>` : ""}
        </div>
      `;
      })
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
