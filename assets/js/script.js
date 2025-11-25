// Header scroll effect
const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        if (navbar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// "To the top" button action - scroll up
function horeChod() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/Hide scroll up button
const upBtn = document.querySelector('.up');
if (upBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            upBtn.style.opacity = '1';
            upBtn.style.pointerEvents = 'auto';
            upBtn.style.transform = 'translateY(0)';
        } else {
            upBtn.style.opacity = '0';
            upBtn.style.pointerEvents = 'none';
            upBtn.style.transform = 'translateY(20px)';
        }
    });
}