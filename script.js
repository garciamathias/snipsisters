// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation AOS
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });

    // Smooth scroll pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Animation du header au scroll
    const nav = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        if (currentScroll > 50) {
            nav.style.background = 'rgba(255,255,255,0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            nav.style.background = 'rgba(255,255,255,0.95)';
            nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
        }
        
        lastScroll = currentScroll;
    });

    // Gestion des boutons de réservation
    const btns = document.querySelectorAll('.btn-primary, .btn-secondary');
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelector('#booking').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Gestion du bouton d'appel
    const callButton = document.querySelector('.call-button');
    callButton.addEventListener('click', function() {
        window.location.href = 'tel:+61XXXXXXXXX';
    });

    // Menu burger pour mobile
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });
});

// Ajouter dans le script.js, à l'intérieur du DOMContentLoaded
function highlightCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[new Date().getDay()];
    
    const hourElements = document.querySelectorAll('.hour');
    hourElements.forEach(hourElement => {
        const dayText = hourElement.textContent;
        if (dayText.includes(currentDay)) {
            hourElement.classList.add('current-day');
            
            // Animation subtile de pulsation
            setInterval(() => {
                hourElement.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    hourElement.style.transform = 'scale(1)';
                }, 1000);
            }, 2000);
        }
    });
}

// Appeler la fonction
highlightCurrentDay();