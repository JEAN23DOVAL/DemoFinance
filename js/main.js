// ======= MENU HAMBURGER =======
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.querySelector("i").classList.toggle("fa-bars");
    toggle.querySelector("i").classList.toggle("fa-xmark");
  });
});


// Parallax simple au scroll
document.addEventListener("scroll", () => {
  const parallaxEls = document.querySelectorAll("[data-parallax]");
  parallaxEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
});


// Animation d’apparition + effet parallaxe
document.addEventListener("scroll", () => {
  const cards = document.querySelectorAll("[data-anim]");
  const parallaxEls = document.querySelectorAll("[data-parallax]");

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });

  parallaxEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".quote__number");
  const stats = document.querySelectorAll(".quote__stat");
  const section = document.querySelector(".quote");

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.dataset.target;
      let count = 0;
      const step = target / 100;

      const updateCount = () => {
        count += step;
        if (count < target) {
          counter.textContent = Math.ceil(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target;
        }
      };
      updateCount();
    });
  };

  window.addEventListener("scroll", () => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("active");
      stats.forEach(s => s.classList.add("visible"));
      animateCounters();
    }
  });
});

// ================================
// Animation d'apparition du footer
// ================================
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.footer');

  // Si le footer existe dans la page
  if (footer) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          footer.classList.add('footer--visible');
          observer.unobserve(entry.target); // désactive l'observation une fois visible
        }
      });
    }, { threshold: 0.2 });

    observer.observe(footer);
  }
});