// Countdown Timer
document.addEventListener('DOMContentLoaded', function () {
function updateCountdown() {
    const conferenceDate = new Date('July 12, 2025 17:00:00').getTime();
    const now = new Date().getTime();
    const distance = conferenceDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();
});



// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Schedule Day Toggle
function toggleDay(dayNum) {
    const dayContent = document.getElementById(`day${dayNum}`);
    const dayHeader = dayContent.previousElementSibling;
    const icon = dayHeader.querySelector('i');
    
    dayContent.classList.toggle('active');
    icon.style.transform = dayContent.classList.contains('active') ? 
        'rotate(180deg)' : 'rotate(0deg)';
}

// FAQ Toggle
function toggleFAQ(faqNum) {
    const faqAnswer = document.getElementById(`faq${faqNum}`);
    const faqQuestion = faqAnswer.previousElementSibling;
    const icon = faqQuestion.querySelector('i');
    
    faqAnswer.classList.toggle('active');
    icon.style.transform = faqAnswer.classList.contains('active') ? 
        'rotate(180deg)' : 'rotate(0deg)';
}


// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        document.querySelector('header').style.background = 'rgba(108, 74, 182, 0.95)';
        document.querySelector('header').style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        document.querySelector('header').style.background = 'linear-gradient(135deg, var(--primary), var(--secondary))';
        document.querySelector('header').style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    }
});

// Animation on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.section-title, .feature-card, .speaker-card, .pricing-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animated elements
document.querySelectorAll('.section-title, .feature-card, .speaker-card, .pricing-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
