const guides = [
  {
    id: 1,
    title: "Bluetooth Mesh Gateway",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 2,
    title: "Doorbell Pro",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 3,
    title: "Indoor Cam Mini + Ultra Wide Angle",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 4,
    title: "Indoor Cam PTZ Pro + AI Auto Tracking",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 5,
    title: "Indoor Cam PTZ X + AI Auto Tracking",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 6,
    title: "Indoor Cam PTZ Screen + 2-Way Video Call",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 7,
    title: "LED Strip ColorZone 2/3m",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 8,
    title: "Outdoor Cam PTZ Dual Lens + Spotlight",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 9,
    title: "Outdoor Cam PTZ Ring Light + AI Auto Tracking",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 10,
    title: "Smart Bulb Color 10W (Bluetooth)",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 11,
    title: "Smart Downlight Slim 18W (Bluetooth)",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 12,
    title: "Smart Door Lock EZY",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 13,
    title: "Smart Door Lock Slim",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 14,
    title: "Smart Door Lock X",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 15,
    title: "Smart Plug 2 in 1 + Energy Meter",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 16,
    title: "Smart Plug 2 in 1 + Bluetooth Gateway",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 17,
    title: "Universal IR Remote Control",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 18,
    title: "Wall Switch Click v2 - 2 Gang",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
  {
    id: 19,
    title: "Wall Switch Click v2 - 3 Gang",
    youtubeId: "7eK-gwYWUsI",
    pdfUrl: "/Buku-Panduan-Bluetooth-Gateway.pdf",
  },
];

// Toggle accordion function - harus global agar bisa diakses dari onclick
let currentOpen = null;

window.toggleAccordion = function (id) {
  const content = document.getElementById(`content-${id}`);
  const icon = document.getElementById(`icon-${id}`);

  if (currentOpen === id) {
    // Close current
    content.style.maxHeight = "0";
    icon.style.transform = "rotate(0deg)";
    currentOpen = null;
  } else {
    // Close previous if exists
    if (currentOpen !== null) {
      document.getElementById(`content-${currentOpen}`).style.maxHeight = "0";
      document.getElementById(`icon-${currentOpen}`).style.transform =
        "rotate(0deg)";
    }

    // Open new
    content.style.maxHeight = "800px";
    icon.style.transform = "rotate(180deg)";
    currentOpen = id;
  }
};

// Initialize accordion when DOM is ready
function initAccordion() {
  console.log("Initializing accordion...");

  // Generate accordion items
  const container = document.getElementById("accordion-container");

  if (!container) {
    console.error("Accordion container not found!");
    return;
  }

  console.log("Container found, generating accordion items...");

  guides.forEach((guide) => {
    const accordionItem = `
                  <div class="transition-all duration-200">
                      <button onclick="toggleAccordion(${guide.id})" 
                              class="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                          <div class="flex items-center gap-3">
                              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold">
                                  ${guide.id}
                              </div>
                              <span class="text-left font-semibold text-gray-800 text-lg">
                                  ${guide.title}
                              </span>
                          </div>
                          <svg id="icon-${guide.id}" class="w-6 h-6 text-gray-500 transition-transform duration-300" 
                               fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                          </svg>
                      </button>
                      
                      <div id="content-${guide.id}" 
                           class="max-h-0 overflow-hidden transition-all duration-300">
                          <div class="px-6 py-6 bg-gray-50 border-t border-gray-200">
                              <div class="grid md:grid-cols-2 gap-6">
                                  <!-- Video Section -->
                                  <div>
                                      <div class="flex items-center gap-2 mb-3">
                                          <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <circle cx="12" cy="12" r="10"/>
                                              <polygon points="10 8 16 12 10 16 10 8"/>
                                          </svg>
                                          <h3 class="font-semibold text-gray-800">Video Tutorial</h3>
                                      </div>
                                      <div class="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                                          <iframe class="w-full h-full"
                                                  src="https://www.youtube.com/embed/${guide.youtubeId}"
                                                  title="${guide.title}"
                                                  frameborder="0"
                                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                  allowfullscreen>
                                          </iframe>
                                      </div>
                                  </div>

                                  <!-- Download Section -->
                                  <div class="flex flex-col justify-center">
                                      <div class="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                                          <div class="flex items-center gap-2 mb-4">
                                              <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                              </svg>
                                              <h3 class="font-semibold text-gray-800">Panduan PDF</h3>
                                          </div>
                                          <p class="text-gray-600 mb-6">
                                              Download panduan lengkap dalam format PDF untuk dipelajari secara offline
                                          </p>
                                          <a href="${guide.pdfUrl}"
                                             class="block w-full bg-linear-to-r from-orange-600 to-orange-500 text-white text-center py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-600 transition-all shadow-md hover:shadow-lg"
                                             download>
                                              <div class="flex items-center justify-center gap-2">
                                                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                                  </svg>
                                                  <span>Unduh Panduan</span>
                                              </div>
                                          </a>
                                      </div>

                                      <!-- Additional Info -->
                                      <div class="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                          <p class="text-sm text-blue-800">
                                              💡 <span class="font-semibold">Tips:</span> Simpan panduan ini untuk referensi cepat saat instalasi atau troubleshooting
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              `;

    container.innerHTML += accordionItem;
  });

  console.log(`Generated ${guides.length} accordion items`);
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAccordion);
} else {
  // DOM already loaded
  initAccordion();
}
