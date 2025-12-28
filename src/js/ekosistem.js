const carousel = document.getElementById("carousel");
const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicator1 = document.getElementById("indicator1");
const indicator2 = document.getElementById("indicator2");

let currentPage = 0;
const itemsPerView = 4;
const totalItems = 8;
const totalPages = Math.ceil(totalItems / itemsPerView); // 2 pages

function updateCarousel() {
  const offset = currentPage * 100;
  track.style.transform = `translateX(-${offset}%)`;

  // Update buttons
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === totalPages - 1;

  // Update indicators
  if (currentPage === 0) {
    indicator1.classList.add("bg-orange-500", "w-8");
    indicator1.classList.remove("bg-gray-300", "w-3");
    indicator2.classList.remove("bg-orange-500", "w-8");
    indicator2.classList.add("bg-gray-300", "w-3");
  } else {
    indicator2.classList.add("bg-orange-500", "w-8");
    indicator2.classList.remove("bg-gray-300", "w-3");
    indicator1.classList.remove("bg-orange-500", "w-8");
    indicator1.classList.add("bg-gray-300", "w-3");
  }
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    updateCarousel();
  }
});

// Touch/Swipe support
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

carousel.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX - 50 && currentPage < totalPages - 1) {
    currentPage++;
    updateCarousel();
  }
  if (touchEndX > touchStartX + 50 && currentPage > 0) {
    currentPage--;
    updateCarousel();
  }
}

// Initialize
updateCarousel();
