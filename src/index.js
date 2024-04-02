// JavaScript to hide the preload page once the content is loaded
window.addEventListener("load", function () {
//   document.querySelector(".preload-container").style.display = "none";
  $(".preload-container").fadeOut("slow");
});

// window.addEventListener("load", function() {
//     window.location.replace("index.html");
// });

document.addEventListener('DOMContentLoaded', function () {
    const texts = document.querySelectorAll('.text');
    let index = 0;

    function showText() {
      const currentIndex = index;
      index = (index + 1) % texts.length;

      texts[currentIndex].classList.add('slideOut');
      texts[currentIndex].classList.remove('active');
      texts[index].classList.add('slideIn', 'active');

      setTimeout(() => {
        texts[currentIndex].classList.remove('slideOut');
        texts[index].classList.remove('slideIn');
      }, 2000); // Animation duration
    }

    setInterval(showText, 3000); // Change 3000 to adjust the interval in milliseconds
  });