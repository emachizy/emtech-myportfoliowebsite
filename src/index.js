const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");

// JavaScript to hide the preload page once the content is loaded
window.addEventListener("load", function () {
  //   document.querySelector(".preload-container").style.display = "none";
  $(".preload-container").fadeOut("slow");
});

// window.addEventListener("load", function() {
//     window.location.replace("index.html");
// });

document.addEventListener("DOMContentLoaded", function () {
  const texts = document.querySelectorAll(".text");
  let index = 0;

  function showText() {
    const currentIndex = index;
    index = (index + 1) % texts.length;

    texts[currentIndex].classList.add("slideOut");
    texts[currentIndex].classList.remove("active");
    texts[index].classList.add("slideIn", "active");

    setTimeout(() => {
      texts[currentIndex].classList.remove("slideOut");
      texts[index].classList.remove("slideIn");
    }, 1000); // Animation duration
  }

  setInterval(showText, 3000); // Change 3000 to adjust the interval in milliseconds
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Get all project items
const projects = document.querySelectorAll(".project");

// Iterate over each project item
projects.forEach((project) => {
  // Get the overlay element
  const overlay = project.querySelector(".overlay");

  // Show the overlay on mouse enter
  project.addEventListener("mouseenter", () => {
    overlay.style.display = "block";
  });

  // Hide the overlay on mouse leave
  project.addEventListener("mouseleave", () => {
    overlay.style.display = "none";
  });
});

// Scroller animation

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

const nameEl = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.getElementById("form");
const errorEl = document.getElementById("error");
const backButton = document.getElementById("backButton");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (nameEl.value === "" || nameEl.value == null) {
    messages.push("Name is required!");
  }
  if (email.value === "" || email.value == null) {
    messages.push("please enter a valid email address!");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorEl.innerText = messages.join(", ");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorEl.innerText = messages.join(", ");
  } else {
    submitBtn.textContent = "Submitting...";
    submitBtn.disabled = true;
    setTimeout(() => {
      submitBtn.textContent = "Submit";
      submitBtn.disabled = false;
    }, 5000); // adjust the time as needed
  }
});

document.getElementById("backButton").addEventListener("click", function () {
  window.location.href = "index.html";
});

// mobile nav
function Menu(e) {
  let list = document.querySelector(".nav-link");
  let isVisible = list.classList.contains("opacity-100");

  if (!isVisible) {
    list.classList.add("top-[80px]", "opacity-100", "bg-yellow-500");
    e.name = "close-outline";
  } else {
    list.classList.remove("top-[80px]", "opacity-100");
    e.name = "menu-outline";
  }

  // Add an event listener to each link inside the menu
  document.querySelectorAll(".nav-link a").forEach((link) => {
    link.addEventListener("click", () => {
      let list = document.querySelector(".nav-link");
      list.classList.remove("top-[80px]", "opacity-100");
      document.querySelector('ion-icon[name="close-outline"]').name =
        "menu-outline";
    });
  });
}
