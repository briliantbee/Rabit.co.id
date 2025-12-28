document.querySelectorAll(".faq-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const icon = this.querySelector("svg");

    // Close all other FAQs
    document.querySelectorAll(".faq-content").forEach((item) => {
      if (item !== content) {
        item.classList.add("hidden");
        item.previousElementSibling.querySelector("svg").style.transform =
          "rotate(0deg)";
      }
    });

    // Toggle current FAQ
    content.classList.toggle("hidden");

    if (content.classList.contains("hidden")) {
      icon.style.transform = "rotate(0deg)";
    } else {
      icon.style.transform = "rotate(180deg)";
    }
  });
});

// Smooth scroll animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll("section > div").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});
