document.addEventListener('DOMContentLoaded', () => {
    // 1. Vinheta de Abertura (Intro Animation)
    // Removemos a div após 2.5s para criar a imersão.
    setTimeout(() => {
        document.body.classList.add('loaded');
        setTimeout(() => {
            const loader = document.getElementById('intro-loader');
            if (loader) {
                loader.style.display = 'none';
            }
        }, 800); // tempo da transição css
    }, 2500);

    // 2. Alternar Tema (Claro / Escuro)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    const body = document.body;

    // Verificar preferência salva
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.className = currentTheme;
        if (currentTheme === 'dark-theme') {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    } else {
        // Padrão Escuro se preferir, mas como é diurno e família, claro é bom padrão. Deixei claro na body class.
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.replace('light-theme', 'dark-theme');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.classList.replace('dark-theme', 'light-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light-theme');
        }
    });

    // 3. Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
