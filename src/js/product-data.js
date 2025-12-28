// Shared product data untuk semua halaman
const productsData = [
  {
    id: 1,
    name: "Smart IP Camera CCTV Indoor PTZ X - AI Auto Tracking",
    category: "Keamanan Pintar",
    subcategory: "Smart CCTV Indoor",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400",
    price: "Rp 899.000",
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=400",
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400",
      "https://images.unsplash.com/photo-1567086672013-05ccebeb71ca?w=400",
    ],
    specs: [
      'Image Sensor: 1/2.9" Color CMOS',
      "Lens Type: FHD, 2MP",
      "Viewing Angle: 105°",
      "Focal Length: 3.6mm f2.0",
      "Nightvision: IR-Cut Autoswitch",
      "IR Distance: 8-10 Meters",
      "Video Resolution: 1920*1080",
      "Digital noise reduction: 3D",
      "Audio: Built-in Mic & Speaker",
      "Wi-Fi: IEEE 802.11 b/g/n 2.4GHz",
      "Storage: Micro SD Card Max 256GB",
      "Cloud Storage: Support",
      "Dimension: 90 x 90 x 160 mm",
    ],
    package:
      "1 x RABIT Indoor Cam PTZ X + AI Auto Tracking\n1 x Adapter\n1 x Kemasan Sekrup\n1 x Bracket (Pemasangan di dinding / plafon)",
    warranty: "Garansi Produk 18 Bulan",
    description: {
      title: "Smart IP Camera CCTV Indoor PTZ X - AI Auto Tracking",
      intro:
        "Pilih RABIT Smart IP Indoor Camera PTZ - X, jika butuh:\nFitur keamanan lengkap, harga terbaik di kelasnya, kamera bisa berputar motorik.",
      appInfo:
        'NAMA APLIKASI: "Rabit Smart" unduh secara gratis di Google Play dan App Store',
      sdCard:
        "Disarankan menggunakan SD Card - Legend Series RESMI dari Rabit. Penggunaan SD Card dengan kualitas tidak sesuai standar dapat mempengaruhi performa IP Camera. SD Card Rabit dengan spesifikasi V30, C10, UH33, SDXC, A1, di OPTIMASI KHUSUS untuk IP Camera (CCTV).",
      features: [
        {
          title: "GARANSI SD CARD SEUMUR HIDUP",
          desc: "SD Card bergaransi seumur hidup, pengguna bisa klaim garansi tanpa waktu terbatas, cukup mengembalikan fisik kartu. Produk selain SD Card bergaransi 12 bulan. Estimasi penyimpanan SD Card 64GB 3-7 hari, 128GB 6-12 hari. Jika sudah penuh akan otomatis menimpa rekaman lama dan memulai rekaman baru.",
        },
        {
          title: "VIDEO CLOUD STORAGE RABIT",
          desc: 'Gunakan Video Cloud Storage untuk keamanan perekaman maksimal, rekaman tetap aman, walaupun kamera dirusak, curi, dimusnahkan. Paket berlangganan Cloud Storage bisa diakses melalui aplikasi "RABIT SMART"',
        },
        {
          title: "Pan, Tilt, Zoom + Wide Angle Lens",
          desc: 'Kiri, kanan, atas, dan bawah, semuanya terlihat jelas. Putar kamera secara horizontal 350°, vertikal 55°, Lihat dengan lensa Wide Angle, Resolusi FHD 1920x1080P, 2MP, FOV 105°, 1/2.9" Color CMOS Sensor, Focal Length 3.6 mm, Image Frame Rate 15fps, Compression H.265. Taruh di meja atau gantung di dinding plafon.',
        },
        {
          title: "AI Auto Tracking & Patrol",
          desc: "Mendeteksi gerakan manusia dan otomatis mengikuti arah gerakan objek yang terpantau, mendukung mode patroli.",
        },
        {
          title: "Motion & Sound Detection",
          desc: "Memberikan notifikasi untuk deteksi Gerakan, dan Suara yang dapat diatur pada hari dan jam tertentu, Activity Area untuk mengatur luas area spesifik yang dipantau.",
        },
        {
          title: "Siren Alarm (Built in)",
          desc: "Alarm yang dapat diatur sesuai jadwal, jika terdeteksi objek, alarm berbunyi memberi peringatan kepada tamu tidak diundang saat tidak berada di rumah.",
        },
        {
          title: "2-Way Talk Voice Cancellation",
          desc: "Berbicara melalui kamera dengan Noise Cancellation baik di indoor maupun outdoor, Mikropon dan Speaker Built-in.",
        },
        {
          title: "Privacy Mode",
          desc: "Putar kamera ke arah bawah apabila sedang di rumah, untuk menjaga privasi ruangan.",
        },
        {
          title: "Share Camera",
          desc: "Berbagi dengan pengguna lain untuk melihat kamera bersama sama.",
        },
        {
          title: "Easy Setup",
          desc: "Pengaturan mudah dengan memindai kode QR, dalam hitungan detik, kamera siap terpasang.",
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
    images: ["/camera.jpg"],
    specs: [
      "Resolusi: 720P HD",
      "Wide Angle 120°",
      "Night Vision",
      "Motion Detection",
      "Support WiFi 2.4GHz",
      "Compact Design",
    ],
    package:
      "1 x Smart IP Camera Indoor Mini\n1 x Power Adapter\n1 x Quick Guide",
    warranty: "Garansi Produk 12 Bulan",
    description: {
      title: "Smart IP Camera CCTV Indoor Mini - Wide Angle",
      intro: "Solusi keamanan kompak dengan sudut pandang lebar.",
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
    image: "https://images.unsplash.com/photo-1567086672013-05ccebeb71ca?w=400",
    price: "Rp 1.299.000",
    images: [
      "https://images.unsplash.com/photo-1567086672013-05ccebeb71ca?w=400",
    ],
    specs: [
      "Resolusi: 2K Quad HD",
      "IP66 Weatherproof",
      "Night Vision 20m",
      "Motion Detection with Alert",
      "Two-way Audio",
      "Cloud & SD Card Support",
    ],
    package:
      "1 x Smart IP Camera Outdoor\n1 x Power Adapter\n1 x Mounting Kit\n1 x Weatherproof Cable\n1 x Quick Guide",
    warranty: "Garansi Produk 24 Bulan",
    description: {
      title: "Smart IP Camera CCTV Outdoor Weatherproof",
      intro: "Kamera outdoor tahan cuaca untuk keamanan eksterior maksimal.",
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
    images: [
      "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=400",
    ],
    specs: [
      "8 Channel Recording",
      "HDD: 1TB Pre-installed",
      "Support up to 4TB",
      "H.265+ Compression",
      "Remote Viewing via App",
      "HDMI & VGA Output",
    ],
    package:
      "1 x NVR 8CH\n1 x HDD 1TB\n1 x Power Adapter\n1 x HDMI Cable\n1 x Manual",
    warranty: "Garansi Produk 24 Bulan, HDD 12 Bulan",
    description: {
      title: "NVR 8 Channel dengan HDD 1TB",
      intro: "Solusi penyimpanan video lengkap untuk sistem CCTV Anda.",
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
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    price: "Rp 3.299.000",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"],
    specs: [
      "Fingerprint Capacity: 100",
      "Password: 4-12 digits",
      "RFID Card Support",
      "Emergency Power: Micro USB",
      "Battery: 4 x AA (6-12 bulan)",
      "Material: Zinc Alloy",
    ],
    package:
      "1 x Smart Door Lock\n2 x RFID Card\n1 x Installation Kit\n4 x AA Battery",
    warranty: "Garansi Produk 24 Bulan",
    description: {
      title: "Smart Door Lock Fingerprint Pro",
      intro:
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
    image: "https://images.unsplash.com/photo-1550985616-10810253b84d?w=400",
    price: "Rp 149.000",
    images: ["https://images.unsplash.com/photo-1550985616-10810253b84d?w=400"],
    specs: [
      "Lumens: 1000 lm",
      "Color Temp: 2700K - 6500K",
      "Color Range: 16 Million Color",
      "Power: 10 Watt",
      "BLE: 2.400-2.4835GHz",
      "System Support: iOS & Android",
      "Voltage: 220-240V 50Hz",
      "Lifetime: Up to 20,000 Hours",
    ],
    package: "1 x Rabit Smart Bulb Color 10w Bluetooth",
    warranty: "Garansi Produk 18 Bulan",
    description: {
      title: "Smart Light Bulb Color 10W Bluetooth",
      intro:
        "Officially Powered by Tuya, ekosistem Smart Home dan IoT global yang terdepan.",
      features: [
        {
          title: "Stabil",
          desc: "Tidak seperti lampu Smart WiFi Only umumnya, saat WiFi mengalami gangguan, lampu ini selalu bisa di kontrol stabil dengan Bluetooth.",
        },
        {
          title: "Ekobright, Super Terang, Super Redup, Hemat Energi",
          desc: "Pelopor teknologi Rendah Watt, Tinggi Lumen. Redupkan cahaya s/d 1% untuk penghematan energi.",
        },
      ],
    },
  },
  // Produk lainnya...
  {
    id: 7,
    name: "Smart Light Downlight Slim 18W Bluetooth",
    category: "Efisiensi Energi",
    subcategory: "Smart Light",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400",
    price: "Rp 299.000",
    images: [
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400",
    ],
    specs: [
      "Lumens: 1800 lm",
      "Color Temp: 2700K - 6500K",
      "Power: 18 Watt",
      "Diameter: 225mm",
    ],
    package: "1 x Rabit Smart Light Downlight Slim 18W\nInstallation Kit",
    warranty: "Garansi Produk 18 Bulan",
    description: {
      title: "Smart Light Downlight Slim 18W Bluetooth",
      intro: "Lampu downlight pintar dengan desain slim yang elegan.",
      features: [],
    },
  },
  {
    id: 8,
    name: "Smart Plug 16A with Energy Monitor",
    category: "Efisiensi Energi",
    subcategory: "Sakelar & Colokan",
    image: "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=400",
    price: "Rp 199.000",
    images: [
      "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=400",
    ],
    specs: ["Max Load: 16A / 3680W", "Energy Monitoring", "WiFi 2.4GHz"],
    package: "1 x Smart Plug 16A\n1 x Quick Guide",
    warranty: "Garansi Produk 12 Bulan",
    description: {
      title: "Smart Plug 16A with Energy Monitor",
      intro: "Colokan pintar dengan monitoring konsumsi listrik real-time.",
      features: [],
    },
  },
  {
    id: 9,
    name: "Smart Switch 3 Gang WiFi",
    category: "Efisiensi Energi",
    subcategory: "Sakelar & Colokan",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400",
    price: "Rp 349.000",
    images: [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400",
    ],
    specs: ["3 Gang Control", "WiFi 2.4GHz", "Touch Panel Glass"],
    package: "1 x Smart Switch 3 Gang\n1 x Installation Guide",
    warranty: "Garansi Produk 18 Bulan",
    description: {
      title: "Smart Switch 3 Gang WiFi",
      intro: "Saklar pintar 3 tombol dengan panel kaca premium.",
      features: [],
    },
  },
  {
    id: 10,
    name: "Smart IR Remote Universal",
    category: "Efisiensi Energi",
    subcategory: "Kendali",
    image: "https://images.unsplash.com/photo-1606478954625-e5c7b08db4ca?w=400",
    price: "Rp 249.000",
    images: [
      "https://images.unsplash.com/photo-1606478954625-e5c7b08db4ca?w=400",
    ],
    specs: [
      "Control up to 50 devices",
      "WiFi 2.4GHz",
      "IR Database 10,000+ brands",
    ],
    package: "1 x Smart IR Remote\n1 x USB Cable\n1 x Quick Guide",
    warranty: "Garansi Produk 12 Bulan",
    description: {
      title: "Smart IR Remote Universal",
      intro: "Remote universal pintar untuk semua perangkat IR Anda.",
      features: [],
    },
  },
  {
    id: 11,
    name: "Smart WiFi Router AC1200 Dual Band",
    category: "Jaringan Internet",
    subcategory: "Router",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
    price: "Rp 799.000",
    images: [
      "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
    ],
    specs: ["Speed: 1200Mbps", "Dual Band 2.4GHz & 5GHz", "Antenna: 4 x 5dBi"],
    package: "1 x Smart Router AC1200\n1 x Power Adapter\n1 x Ethernet Cable",
    warranty: "Garansi Produk 12 Bulan",
    description: {
      title: "Smart WiFi Router AC1200 Dual Band",
      intro: "Router pintar untuk koneksi internet stabil dan cepat.",
      features: [],
    },
  },
  {
    id: 12,
    name: "WiFi Range Extender AC750",
    category: "Jaringan Internet",
    subcategory: "Range Extender",
    image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=400",
    price: "Rp 349.000",
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=400",
    ],
    specs: ["Speed: 750Mbps", "Dual Band", "Antenna: 2 x 3dBi"],
    package: "1 x WiFi Range Extender\n1 x Quick Guide",
    warranty: "Garansi Produk 12 Bulan",
    description: {
      title: "WiFi Range Extender AC750",
      intro: "Perluas jangkauan WiFi Anda hingga seluruh rumah.",
      features: [],
    },
  },
];

// Export untuk digunakan di file lain
if (typeof module !== "undefined" && module.exports) {
  module.exports = productsData;
}
