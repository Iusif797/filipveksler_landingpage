document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const upBtn = document.querySelector('.up');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        if (upBtn) {
            if (window.scrollY > 500) {
                upBtn.style.opacity = '1';
                upBtn.style.pointerEvents = 'auto';
                upBtn.style.transform = 'translateY(0)';
            } else {
                upBtn.style.opacity = '0';
                upBtn.style.pointerEvents = 'none';
                upBtn.style.transform = 'translateY(20px)';
            }
        }

        // Parallax Effect
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            const speed = 0.2;
            const rect = title.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                const yPos = (window.scrollY - title.offsetTop) * speed;
                title.style.transform = `translate(-50%, calc(-50% + ${yPos}px))`;
            }
        });
    });

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navbar.classList.toggle('active');
            
            if (navbar.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            if (hamburger) {
                hamburger.classList.remove('active');
                navbar.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});

function horeChod() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
