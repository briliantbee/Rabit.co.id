// Import styling Tailwind
import "./style.css";

// Import HTML components as raw strings
import navbarHTML from "./components/navbar.html?raw";
import productHTML from "./components/product.html?raw";
import productDetailHTML from "./components/productDetail.html?raw";
import footerHTML from "./components/footer.html?raw";

// Load components
const app = document.getElementById("app");

// Deteksi halaman berdasarkan URL
const currentPath = window.location.pathname;

if (currentPath.includes("productDetail")) {
  // Load halaman detail produk
  app.innerHTML = navbarHTML + productDetailHTML + footerHTML;

  // Import and initialize JavaScript modules
  (async () => {
    await import("./js/navbar.js");
    await import("./js/productDetail.js");
    await import("./js/product.js");
  })();
} else {
  // Load halaman list produk (default)
  app.innerHTML = navbarHTML + productHTML + footerHTML;

  // Import and initialize JavaScript modules
  (async () => {
    await import("./js/navbar.js");
    await import("./js/product.js");
  })();
}
