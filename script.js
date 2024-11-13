// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation du header au scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255,255,255,0.95)';
        } else {
            nav.style.background = 'white';
        }
    });

    // Animation des boutons de réservation
    const btns = document.querySelectorAll('.btn-primary, .btn-secondary');
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Ici vous pouvez ajouter le lien vers votre système de réservation
            alert('Système de réservation à venir !');
        });
    });
});