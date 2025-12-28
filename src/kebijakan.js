// Import styling Tailwind
import "./style.css";

// Import HTML components as raw strings
import navbarHTML from "./components/navbar.html?raw";
import kebijakanHTML from "./components/kebijakan.html?raw";
import footerHTML from "./components/footer.html?raw";

// Load components
const app = document.getElementById("app");
app.innerHTML = navbarHTML + kebijakanHTML + footerHTML;

// Import and initialize JavaScript modules
(async () => {
  await import("./js/navbar.js");
})();
