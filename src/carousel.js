// carousel.js
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("testimonial-carousel");
  const cards = carousel.querySelectorAll("div.flex-shrink-0");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentIndex = 0;

  function updateCarousel() {
    const cardWidth =
      cards[0].offsetWidth +
      parseFloat(getComputedStyle(cards[0]).marginLeft) +
      parseFloat(getComputedStyle(cards[0]).marginRight);
    const newTranslateX = -(currentIndex * cardWidth);
    carousel.style.transform = `translateX(${newTranslateX}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Recalculate on window resize
  window.addEventListener("resize", updateCarousel);
});
