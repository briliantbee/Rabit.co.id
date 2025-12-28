// Import styling Tailwind
import "./style.css";

// Import file JavaScript lainnya

(async () => {
  async function loadHTML(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
    return res.text();
  }

  const app = document.getElementById("app");
  app.innerHTML = (await loadHTML("/src/components/navbar.html")) +
    (await loadHTML("/src/components/hero.html")) +
    (await loadHTML("/src/components/best.html")) +
    (await loadHTML("/src/components/categories.html")) +
    (await loadHTML("/src/components/ekosistem.html")) +
    (await loadHTML("/src/components/logos.html")) +
    (await loadHTML("/src/components/testimonial.html")) +
    (await loadHTML("/src/components/footer.html"));

  await import("./js/navbar.js");
  await import("./js/carousel.js");
  await import("./js/best.js");
  await import("./js/ekosistem.js");
  await import("./js/testimonial.js");
})();