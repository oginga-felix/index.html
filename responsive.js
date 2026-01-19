 document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isOpen);
    nav.classList.toggle('nav--open');
  });

  // Close menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('nav--open');
    }
  });
});







document.addEventListener("DOMContentLoaded", () => {

  function blink(element, color, times = 5, speed = 200) {
    if (!element) return;
    const original = element.style.backgroundColor;
    let count = 0;

    const interval = setInterval(() => {
      element.style.backgroundColor =
        element.style.backgroundColor === color ? original : color;
      count++;

      if (count >= times * 2) {
        clearInterval(interval);
        element.style.backgroundColor = original;
      }
    }, speed);
  }

  function scrollAndBlink(element, color) {
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => blink(element, color), 600);
  }

  document.querySelectorAll(".nav__links a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const text = link.textContent.trim().toLowerCase();


       
        // INTRO
      if (text === "intro") {
        const Intro = document.getElementById("header");
        scrollAndBlink(Intro, "black");
      }


      // HOME
      if (text === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => blink(document.body, "red"), 600);
      }

      // ABOUT →VIDEOS
      if (text === "about") {
        const video = document.querySelector(".img-conta");
        if (video) {
          video.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => blink(document.body, "orange"), 600);
        }
      }

      // FEATURES → IMAGES
      if (text === "features") {
        const featureSection = document.querySelector(".container");
        scrollAndBlink(featureSection, "blue");
      }

      // COURSES
      if (text === "courses") {
        const courses = document.querySelector("#courses");
        scrollAndBlink(courses, "yellow");
      }

      // CONTACT → FOOTER
      if (text === "contact") {
        const footer = document.getElementById("footer");
        scrollAndBlink(footer, "green");
      }
    });
  });

});



document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("#h1 h1");
  if (!h1) return;

  const text = h1.textContent;
  h1.textContent = ""; // remove text initially

  const colors = [
    "#ff3b3b", // red
    "#ffa500", // orange
    "#ffd700", // yellow
    "#00c853", // green
    "#2979ff", // blue
    "#8e24aa"  // purple
  ];

  // create spans for each letter (hidden at first)
  const spans = [...text].map(letter => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.opacity = "0";
    span.style.display = "inline-block";
    span.style.transition = "opacity 2,5s ease, transform 0.4s ease";
    span.style.transform = "translateY(10px)";
    h1.appendChild(span);
    return span;
  });

  // animate letters in
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.style.color = colors[index % colors.length];
      span.style.opacity = "1";
      span.style.transform = "translateY(0)";
    }, 500 + index * 350);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const h2 = document.querySelector("#h2 h2");
  if (!h2) return;

  const text = h2.textContent;
  h2.textContent = ""; // remove text initially

  const colors = [
    "#ff3b3b", // red
    "#ffa500", // orange
    "#ffd700", // yellow
    "#00c853", // green
    "#2979ff", // blue
    "#8e24aa"  // purple
  ];

  // create spans for each letter (hidden at first)
  const spans = [...text].map(letter => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.opacity = "0";
    span.style.display = "inline-block";
    span.style.transition = "opacity 2,5s ease, transform 0.4s ease";
    span.style.transform = "translateY(10px)";
    h1.appendChild(span);
    return span;
  });

  // animate letters in
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.style.color = colors[index % colors.length];
      span.style.opacity = "1";
      span.style.transform = "translateY(0)";
    }, 500 + index * 350);
  });
});



















































































