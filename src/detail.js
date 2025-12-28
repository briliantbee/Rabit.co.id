// Import styling Tailwind
import "./style.css";

(async () => {
  async function loadHTML(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
    return res.text();
  }

  const app = document.getElementById("app");

  // Deteksi halaman berdasarkan URL
  const currentPath = window.location.pathname;

  if (currentPath.includes("productDetail")) {
    // Load halaman detail produk
    app.innerHTML =
      (await loadHTML("/src/components/navbar.html")) +
      (await loadHTML("/src/components/productDetail.html")) +
      (await loadHTML("/src/components/footer.html"));

    await import("./js/navbar.js");
    await import("./js/productDetail.js");
    await import("./js/product.js");
  } else {
    // Load halaman list produk (default)
    app.innerHTML =
      (await loadHTML("/src/components/navbar.html")) +
      (await loadHTML("/src/components/product.html")) +
      (await loadHTML("/src/components/footer.html"));

    await import("./js/navbar.js");
    await import("./js/product.js");
  }
})();
