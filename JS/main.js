// ================================
// DARK MODE
// ================================

const themeBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "🌙";
  }
});

// ================================
// SCROLL REVEAL ANIMATION
// ================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });
  },
  {
    threshold: 0.15
  }
);

const hiddenElements = document.querySelectorAll(
  ".section, .project-card, .skill-card, .timeline-item, .cert-card"
);

hiddenElements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// ================================
// ACTIVE NAVBAR LINK
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (
      pageYOffset >= sectionTop &&
      pageYOffset < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") === `#${current}`
    ) {
      link.classList.add("active");
    }

  });
});

// ================================
// NAVBAR BACKGROUND ON SCROLL
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.boxShadow =
      "0 8px 25px rgba(0,0,0,.15)";

  } else {

    navbar.style.boxShadow = "none";

  }

});

// ================================
// SMOOTH SCROLL
// ================================

document
  .querySelectorAll('a[href^="#"]')
  .forEach(anchor => {

    anchor.addEventListener("click", function (e) {

      e.preventDefault();

      const target = document.querySelector(
        this.getAttribute("href")
      );

      if (target) {

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });

// ================================
// PROJECT CARD HOVER EFFECT
// ================================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform =
      "translateY(-10px) scale(1.02)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "translateY(0) scale(1)";

  });

});

// ================================
// TYPEWRITER EFFECT HERO TITLE
// ================================

const heroTitle = document.querySelector(".hero h2");

const text = "Junior Data Analyst";

let index = 0;

function typeWriter() {

  if (index < text.length) {

    heroTitle.textContent += text.charAt(index);

    index++;

    setTimeout(typeWriter, 80);

  }

}

if (heroTitle) {

  heroTitle.textContent = "";

  typeWriter();

}

// ================================
// COUNTER ANIMATION (Future Use)
// ================================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

  counters.forEach(counter => {

    const target =
      +counter.getAttribute("data-target");

    let count = 0;

    const increment = target / 100;

    const update = () => {

      count += increment;

      if (count < target) {

        counter.innerText =
          Math.floor(count);

        requestAnimationFrame(update);

      } else {

        counter.innerText = target;

      }

    };

    update();

  });

};

const counterObserver =
new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      startCounter();

    }

  });

});

counters.forEach(counter => {

  counterObserver.observe(counter);

});

// ================================
// PAGE LOADER
// ================================

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});

// ================================
// CONSOLE MESSAGE
// ================================

console.log(
  "Ahmed Mohsen Portfolio Loaded Successfully 🚀"
);
