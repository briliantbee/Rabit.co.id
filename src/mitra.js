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
  app.innerHTML =
    (await loadHTML("/src/components/navbar.html")) +
    (await loadHTML("/src/components/mitra.html")) +
    (await loadHTML("/src/components/footer.html"));

  await import("./js/navbar.js");
})();
