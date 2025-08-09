document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('#carousel-track');
    const cards = document.querySelectorAll('.service-card');
    const cardCount = cards.length;
    let currentIndex = 0;

    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    function getCardWidth() {
        const style = window.getComputedStyle(cards[0]);
        const margin = parseInt(style.marginRight);
        return cards[0].offsetWidth + margin;
    }

    function scrollToIndex(index) {
        const cardWidth = getCardWidth();
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    function resetToStart() {
        const cardWidth = getCardWidth();
        track.style.transition = "none";
        track.style.transform = `translateX(0px)`;
        currentIndex = 0;
    }

    function autoScroll() {
        currentIndex++;
        scrollToIndex(currentIndex);

        if (currentIndex >= cardCount) {
            setTimeout(() => {
                resetToStart();
            }, 510);
        }
    }

    setInterval(autoScroll, 2000);

    window.addEventListener("resize", () => scrollToIndex(currentIndex));
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    alert("Obrigado pelo seu Feedback, Entraremos em Contato em Breve!");

    form.reset();
  });

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("mobile-active");

    // troca o ícone de menu para 'close' e vice-versa
    const icon = hamburger.querySelector(".material-symbols-outlined");
    if(navMenu.classList.contains("mobile-active")){
      icon.textContent = "close";
      hamburger.setAttribute("aria-label", "Fechar menu");
    } else {
      icon.textContent = "menu";
      hamburger.setAttribute("aria-label", "Abrir menu");
    }
  });

  // Opcional: fechar menu ao clicar em algum link do menu
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if(navMenu.classList.contains("mobile-active")){
        navMenu.classList.remove("mobile-active");
        hamburger.querySelector(".material-symbols-outlined").textContent = "menu";
        hamburger.setAttribute("aria-label", "Abrir menu");
      }
    });
  });
});

const openBtn = document.getElementById("abrirLogin");
  const closeBtn = document.getElementById("closeModal");
  const modal = document.getElementById("modal");

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  document.querySelectorAll(".abrirLogin").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
  });
});



