// Import styling Tailwind
import "./style.css";

// Import HTML components as raw strings
import navbarHTML from "./components/navbar.html?raw";
import heroHTML from "./components/hero.html?raw";
import bestHTML from "./components/best.html?raw";
import categoriesHTML from "./components/categories.html?raw";
import ekosistemHTML from "./components/ekosistem.html?raw";
// import logosHTML from "./components/logos.html?raw";
// import testimonialHTML from "./components/testimonial.html?raw";
import footerHTML from "./components/footer.html?raw";

// Load components
const app = document.getElementById("app");
app.innerHTML =
  navbarHTML +
  heroHTML +
  bestHTML +
  categoriesHTML +
  ekosistemHTML +
  footerHTML;

// Import and initialize JavaScript modules
(async () => {
  await import("./js/navbar.js");
  await import("./js/carousel.js");
  await import("./js/best.js");
  await import("./js/ekosistem.js");
})();
