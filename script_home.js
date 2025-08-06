
// Carousel de cards
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('#carousel-track');
    const cards = document.querySelectorAll('.service-card');
    const cardCount = cards.length;
    let currentIndex = 0;

    // Clona os cards
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

    setInterval(autoScroll, 2000); // scroll a cada 2s

    window.addEventListener("resize", () => scrollToIndex(currentIndex));
});

// Smooth scrolling for navigation links
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

// Form handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple form validation and submission
    const formData = new FormData(this);

    // Show success message
    alert('Obrigado pelo seu feedback! Entraremos em contato em breve.');

    // Reset form
    this.reset();
});

// Active navigation highlighting
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

// Add interactive hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Efeito no hero title "Leitura Kids"
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



