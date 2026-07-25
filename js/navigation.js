(function () {
    'use strict';

    const currentPage = localStorage.getItem('portfolio-page') || 'home';

    const navLinks = document.querySelectorAll('.nav-wrapper__link');
    const sections = {
        home: document.getElementById('page-home'),
        proyectos: document.getElementById('page-proyectos'),
        'sobre-mi': document.getElementById('page-sobre-mi'),
        blog: document.getElementById('page-blog'),
        contacto: document.getElementById('page-contacto'),
    };

    function activatePage(pageId) {
        Object.keys(sections).forEach(function (key) {
            const section = sections[key];
            if (section) {
                section.classList.toggle('page-section--active', key === pageId);
            }
        });

        navLinks.forEach(function (link) {
            link.classList.toggle('nav-wrapper__link--active', link.getAttribute('data-page') === pageId);
        });

        localStorage.setItem('portfolio-page', pageId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            activatePage(this.getAttribute('data-page'));
        });
    });

    window.navigateTo = function (pageId) {
        activatePage(pageId);
    };

    activatePage(currentPage);
})();