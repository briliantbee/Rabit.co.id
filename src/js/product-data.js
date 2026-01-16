// Shared product data untuk semua halaman
const productsData = [
  {
    id: 1,
    name: "Smart IP Indoor Camera PTZ + AI Auto Tracking",
    category: "Keamanan Pintar",
    subcategory: "Smart CCTV Indoor",
    image: "/assets/Rabit_indoor_camera.jpeg",
    price: "Rp 1.299.000",
    images: ["/assets/Rabit_indoor_camera.jpeg"],
    specs: [
      'Image Sensor: 1/2.9" Color CMOS',
      "Lens Type: FHD, 2MP",
      "Video Resolution: 1080p Full HD",
      "Viewing Angle: 105°",
      "Focal Length: 3.6mm f2.0",
      "Nightvision: IR-Cut Autoswitch",
      "IR Distance: 8-10 Meters",
      "Digital noise reduction: 3D",
      "Audio: Built-in Mic & Speaker",
      "Wi-Fi: IEEE 802.11 b/g/n 2.4GHz",
      "Storage: Micro SD Card & Cloud Storage",
      "Chipset: Chipset Terbaik",
      "Dimension: 90 x 90 x 160 mm",
    ],
    package:
      "1 x RABIT Indoor Camera PTZ + AI Auto Tracking\n1 x Adapter\n1 x Kemasan Sekrup\n1 x Bracket (Pemasangan di dinding / plafon)",
    warranty: "Garansi Seumur-Hidup",
    description: {
      title: "Smart IP Indoor Camera PTZ + AI Auto Tracking",
      intro:
        "Kamera indoor pintar dengan fitur lengkap. Keamanan Pintar. Otomatisasi. Powered by Tuya. #SemakinPintar",
      appInfo:
        'NAMA APLIKASI: "Rabit Smart" unduh secara gratis di Google Play dan App Store',
      sdCard:
        "Disarankan menggunakan SD Card - Legend Series RESMI dari Rabit. SD Card Rabit dengan spesifikasi V30, C10, UH33, SDXC, A1, di OPTIMASI KHUSUS untuk IP Camera (CCTV).",
      features: [
        {
          title: "GARANSI SEUMUR-HIDUP",
          desc: "SD Card bergaransi seumur hidup, pengguna bisa klaim garansi tanpa waktu terbatas, cukup mengembalikan fisik kartu. Produk kamera bergaransi 12 bulan.",
        },
        {
          title: "SD-CARD & CLOUD STORAGE",
          desc: "Gunakan SD Card Legend Series 64GB atau 128GB untuk penyimpanan lokal. Video Cloud Storage untuk keamanan perekaman maksimal, rekaman tetap aman walaupun kamera dirusak.",
        },
        {
          title: "Pan, Tilt, Zoom + AI Auto Tracking",
          desc: "Kamera dapat berputar motorik horizontal 350°, vertikal 55°. AI Auto Tracking mendeteksi gerakan manusia dan otomatis mengikuti arah gerakan objek yang terpantau.",
        },
        {
          title: "1080p Full HD + 2MP",
          desc: "Video berkualitas tinggi dengan resolusi Full HD 1080p, 2MP sensor untuk gambar yang jernih dan detail.",
        },
        {
          title: "Motion & Sound Detection",
          desc: "Memberikan notifikasi untuk deteksi Gerakan dan Suara yang dapat diatur pada hari dan jam tertentu, Activity Area untuk mengatur luas area spesifik yang dipantau.",
        },
        {
          title: "Chipset Terbaik",
          desc: "Menggunakan chipset terbaik untuk performa optimal dan stabil dalam segala kondisi.",
        },
        {
          title: "2-Way Talk Voice Cancellation",
          desc: "Berbicara melalui kamera dengan Noise Cancellation baik di indoor maupun outdoor, Mikropon dan Speaker Built-in.",
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
    name: "Smart IP Outdoor Camera PTZ + Dual Lens",
    category: "Keamanan Pintar",
    subcategory: "Smart CCTV Outdoor",
    image: "https://images.unsplash.com/photo-1567086672013-05ccebeb71ca?w=400",
    price: "Rp 1.599.000",
    images: [
      "https://images.unsplash.com/photo-1567086672013-05ccebeb71ca?w=400",
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400",
    ],
    specs: [
      "Dual Lens: 2x 2MP",
      "Video Resolution: 1080p Full HD",
      "Weatherproof: IP66",
      "Night Vision: Enhanced IR",
      "Pan/Tilt: 355°/90°",
      "Zoom: Digital 4x",
      "Audio: Built-in Mic & Speaker",
      "Wi-Fi: IEEE 802.11 b/g/n 2.4GHz",
      "Storage: Micro SD Card & Cloud Storage",
      "Chipset: Chipset Terbaik",
      "Operating Temperature: -20°C ~ +60°C",
    ],
    package:
      "1 x Smart IP Outdoor Camera PTZ + Dual Lens\n1 x Power Adapter\n1 x Mounting Kit\n1 x Weatherproof Cable\n1 x Quick Guide",
    warranty: "Garansi Seumur-Hidup",
    description: {
      title: "Smart IP Outdoor Camera PTZ + Dual Lens",
      intro:
        "Kamera outdoor dengan dual lens untuk jaga maksimal. Keamanan Pintar. Otomatisasi. Powered by Tuya.",
      features: [
        {
          title: "GARANSI SEUMUR-HIDUP",
          desc: "SD Card bergaransi seumur hidup, pengguna bisa klaim garansi tanpa waktu terbatas. Produk kamera bergaransi 12 bulan.",
        },
        {
          title: "DUAL LENS TECHNOLOGY",
          desc: "Dua lensa 2MP memberikan cakupan area yang lebih luas dan detail yang maksimal. Jaga maksimal dengan teknologi dual lens.",
        },
        {
          title: "SD-CARD & CLOUD STORAGE",
          desc: "Mendukung SD Card Legend Series dan Cloud Storage untuk penyimpanan rekaman yang aman dan fleksibel.",
        },
        {
          title: "Weatherproof IP66",
          desc: "Tahan terhadap cuaca ekstrem, hujan, debu, dan kondisi outdoor yang keras.",
        },
        {
          title: "Pan/Tilt/Zoom Control",
          desc: "Kontrol arah kamera secara remote dengan pan 355°, tilt 90°, dan digital zoom 4x.",
        },
        {
          title: "Enhanced Night Vision",
          desc: "Penglihatan malam yang diperkuat dengan dual lens dan IR technology.",
        },
        {
          title: "Chipset Terbaik",
          desc: "Menggunakan chipset terbaik untuk performa optimal dan stabil dalam segala kondisi.",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Smart Doorlock EZY + Ultra-Fast Fingerprint",
    category: "Keamanan Pintar",
    subcategory: "Smart Door Lock",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
    price: "Rp 2.299.000",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    ],
    specs: [
      "Model: EZY",
      "Ultra-Fast Fingerprint Sensor",
      "Auto-locks Electric",
      "Lock and Unlock History",
      "Protect+ Security",
      "5 Ways to Unlock",
      "Energy USB Type-C",
      "Working Temperature: -20°C ~ +70°C",
      "Power Supply: USB Type-C Rechargeable",
      "Emergency Power: External power bank",
      "Chipset: Chipset Terbaik",
    ],
    package:
      "1 x Smart Doorlock EZY\n1 x Installation Kit\n1 x USB Type-C Cable\n5 x RFID Cards\n1 x Manual",
    warranty: "Garansi 12 Bulan",
    description: {
      title: "Smart Doorlock EZY + Ultra-Fast Fingerprint",
      intro:
        "Kunci pintar EZY dengan teknologi sidik jari ultra cepat. CEPAT. AMAN. NYAMAN. Keamanan Pintar. Otomatisasi. Powered by Tuya.",
      features: [
        {
          title: "Ultra-Fast Fingerprint Sensor",
          desc: "Sensor sidik jari ultra cepat yang dapat membuka kunci dalam hitungan detik dengan akurasi tinggi.",
        },
        {
          title: "5 Ways to Unlock",
          desc: "Lima metode buka kunci: Ultra-Fast Fingerprint, PIN code, RFID card, smartphone app, dan mechanical key.",
        },
        {
          title: "Auto-locks Electric",
          desc: "Sistem auto-lock elektrik yang secara otomatis mengunci pintu setelah ditutup untuk keamanan maksimal.",
        },
        {
          title: "Lock and Unlock History",
          desc: "Riwayat lengkap aktivitas buka-tutup kunci dengan timestamp untuk monitoring keamanan.",
        },
        {
          title: "Protect+ Security",
          desc: "Sistem keamanan berlapis dengan enkripsi data dan perlindungan terhadap manipulasi.",
        },
        {
          title: "Energy USB Type-C",
          desc: "Daya dari baterai yang dapat dicharge melalui USB Type-C, praktis dan ramah lingkungan.",
        },
        {
          title: "Chipset Terbaik",
          desc: "Menggunakan chipset terbaik untuk performa optimal dan keandalan jangka panjang.",
        },
      ],
    },
  },
  {
    id: 4,
    name: "SD Card Legend Series 64GB",
    category: "Storage",
    subcategory: "Storage",
    image: "/assets/sd_card64.jpeg",
    price: "Rp 199.000",
    images: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    ],
    specs: [
      "Capacity: 64GB",
      "Type: SDXC",
      "Speed Class: V30, U3, Class 10",
      "Speed: Up to 100 MB/s",
      "Format: A1, XC",
      "Optimized: IP Camera Performance",
      "Compatible: Smart IP Camera",
      "Operating Temperature: -25°C ~ +85°C",
    ],
    package:
      "1 x SD Card Legend Series 64GB\n1 x SD Card Adapter\n1 x Storage Case",
    warranty: "Garansi Seumur-Hidup",
    description: {
      title: "SD Card Legend Series 64GB",
      intro:
        "Rabit LEGEND - Dioptimasi untuk performa IP Camera. Kecepatan hingga 100 Mb/s. Smart IP Camera Storage.",
      features: [
        {
          title: "Garansi Seumur-Hidup",
          desc: "SD Card bergaransi seumur hidup tanpa batas waktu, cukup kembalikan fisik kartu untuk klaim garansi.",
        },
        {
          title: "Dioptimasi untuk IP Camera",
          desc: "Khusus dioptimasi untuk performa IP Camera dengan spesifikasi V30, U3, Class 10, A1, XC yang sesuai standar surveillance.",
        },
        {
          title: "Kecepatan Tinggi 100 Mb/s",
          desc: "Kecepatan baca hingga 100 MB/s memastikan perekaman video HD tanpa lag atau drop frame.",
        },
        {
          title: "64GB Storage Capacity",
          desc: "Kapasitas 64GB cocok untuk penyimpanan rekaman 3-7 hari tergantung kualitas video dan pengaturan.",
        },
        {
          title: "Daya Tahan Ekstrem",
          desc: "Tahan terhadap suhu ekstrem -25°C hingga +85°C, waterproof, shockproof, dan X-ray proof.",
        },
        {
          title: "Auto Overwrite",
          desc: "Jika sudah penuh, otomatis menimpa rekaman lama dan memulai rekaman baru secara seamless.",
        },
      ],
    },
  },
  {
    id: 5,
    name: "SD Card Legend Series 128GB",
    category: "Aksesori",
    subcategory: "Storage",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400",
    price: "Rp 349.000",
    images: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    ],
    specs: [
      "Capacity: 128GB",
      "Type: SDXC",
      "Speed Class: V30, U3, Class 10",
      "Speed: Up to 100 MB/s",
      "Format: A1, XC",
      "Optimized: IP Camera Performance",
      "Compatible: Smart IP Camera",
      "Operating Temperature: -25°C ~ +85°C",
    ],
    package:
      "1 x SD Card Legend Series 128GB\n1 x SD Card Adapter\n1 x Storage Case",
    warranty: "Garansi Seumur-Hidup",
    description: {
      title: "SD Card Legend Series 128GB",
      intro:
        "Rabit LEGEND - Dioptimasi untuk performa IP Camera. Kecepatan hingga 100 Mb/s. Smart IP Camera Storage.",
      features: [
        {
          title: "Garansi Seumur-Hidup",
          desc: "SD Card bergaransi seumur hidup tanpa batas waktu, cukup kembalikan fisik kartu untuk klaim garansi.",
        },
        {
          title: "Dioptimasi untuk IP Camera",
          desc: "Khusus dioptimasi untuk performa IP Camera dengan spesifikasi V30, U3, Class 10, A1, XC yang sesuai standar surveillance.",
        },
        {
          title: "Kecepatan Tinggi 100 Mb/s",
          desc: "Kecepatan baca hingga 100 MB/s memastikan perekaman video HD tanpa lag atau drop frame.",
        },
        {
          title: "128GB Storage Capacity",
          desc: "Kapasitas 128GB cocok untuk penyimpanan rekaman 6-12 hari tergantung kualitas video dan pengaturan.",
        },
        {
          title: "Daya Tahan Ekstrem",
          desc: "Tahan terhadap suhu ekstrem -25°C hingga +85°C, waterproof, shockproof, dan X-ray proof.",
        },
        {
          title: "Auto Overwrite",
          desc: "Jika sudah penuh, otomatis menimpa rekaman lama dan memulai rekaman baru secara seamless.",
        },
      ],
    },
  },
];

// Export untuk digunakan di file lain
if (typeof module !== "undefined" && module.exports) {
  module.exports = productsData;
}
