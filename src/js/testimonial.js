(function () {
  const slider = document.getElementById("testimonialSlider");
  const prevBtn = document.getElementById("testimonialPrevBtn");
  const nextBtn = document.getElementById("testimonialNextBtn");
  const dots = document.querySelectorAll(".testimonial-dot");

  let currentSlide = 0;
  const totalSlides = 3; // 9 cards / 3 cards per view = 3 slides
  let autoplayInterval;

  function updateCarousel() {
    const translateX = -currentSlide * (100 / totalSlides);
    slider.style.transform = `translateX(${translateX}%)`;

    // Update dots
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.remove("bg-gray-300");
        dot.classList.add("bg-orange-500");
      } else {
        dot.classList.remove("bg-orange-500");
        dot.classList.add("bg-gray-300");
      }
    });

    // Update navigation buttons
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
  }

  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    updateCarousel();
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = totalSlides - 1;
    }
    updateCarousel();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 4000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Event listeners
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoplay();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoplay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetAutoplay();
    });
  });

  // Pause autoplay on hover
  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);

  // Touch support
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoplay();
  });

  slider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
    resetAutoplay();
  });

  // Initialize
  updateCarousel();
  startAutoplay();
})();
