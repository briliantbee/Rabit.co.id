// Import styling Tailwind
import "./style.css";

// Import HTML components as raw strings
import navbarHTML from "./components/navbar.html?raw";
import productHTML from "./components/product.html?raw";
import footerHTML from "./components/footer.html?raw";

// Load components
const app = document.getElementById("app");
app.innerHTML = navbarHTML + productHTML + footerHTML;

// Import and initialize JavaScript modules
(async () => {
  await import("./js/navbar.js");
  await import("./js/product.js");
})();
