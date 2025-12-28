function initNavbar() {
  const navbar = document.getElementById("navbar");
  const promoBar = document.getElementById("promoBar");
  const navLinks = document.querySelectorAll(".nav-link");
  const logoImage = document.getElementById("logoImage");

  if (!navbar) return;

  const updateNavbar = () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(3, 7, 18, 0.8)";
      navbar.style.backdropFilter = "blur(12px)";
      navbar.classList.add("shadow-lg");

      logoImage.style.filter = "none";

      // Links stay white
      navLinks.forEach((link) => {
        link.classList.remove("text-gray-800");
        link.classList.add("text-white");
      });
    } else {
      // Top state: transparent background
      navbar.style.backgroundColor = "transparent";
      navbar.style.backdropFilter = "none";
      navbar.classList.remove("shadow-lg");

      // Logo becomes dark for visibility on light background
      logoImage.style.filter = "brightness(0)";

      // Links become dark
      navLinks.forEach((link) => {
        link.classList.remove("text-white");
        link.classList.add("text-white");
      });
    }
  };

  window.addEventListener("scroll", updateNavbar);
  updateNavbar();

  // Search functionality
  initSearch();

  // Mobile menu
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

function initSearch() {
  const searchBtn = document.getElementById("searchBtn");
  const mobileSearchBtn = document.getElementById("mobileSearchBtn");
  const searchOverlay = document.getElementById("searchOverlay");
  const searchInput = document.getElementById("searchInput");
  const closeSearch = document.getElementById("closeSearch");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!searchBtn || !searchOverlay) return;

  function openSearch() {
    searchOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    setTimeout(() => searchInput?.focus(), 300);
  }

  function closeSearchOverlay() {
    searchOverlay.classList.remove("active");
    document.body.style.overflow = "";
    if (searchInput) searchInput.value = "";
  }

  searchBtn.addEventListener("click", openSearch);

  if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener("click", () => {
      if (mobileMenu) mobileMenu.classList.add("hidden");
      openSearch();
    });
  }

  if (closeSearch) {
    closeSearch.addEventListener("click", closeSearchOverlay);
  }

  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) {
      closeSearchOverlay();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchOverlay.classList.contains("active")) {
      closeSearchOverlay();
    }
  });

  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (query) {
          console.log("Searching for:", query);
          handleSearch(query);
          closeSearchOverlay();
        }
      }
    });
  }
}

function handleSearch(query) {
  alert(`Mencari: "${query}"`);
  // Implementasi pencarian Anda di sini
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNavbar);
} else {
  initNavbar();
}
