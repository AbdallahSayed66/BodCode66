document.addEventListener('DOMContentLoaded', function() {
    // شريط التنقل عند التمرير
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // القائمة المتنقلة
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // تأثيرات التمرير
    const fadeElements = document.querySelectorAll('.hero-content, .service-card, .portfolio-item, .about-content, .contact-form');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // عداد الأرقام
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    function animateCounter(counter) {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounter(counter), 1);
        } else {
            counter.innerText = target;
        }
    }
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // تأثير الجسيمات
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#2962FF" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#2962FF", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
});

// إضافة تأثيرات GSAP للحركات المتقدمة (اختياري)
document.addEventListener('DOMContentLoaded', function() {
    if (typeof gsap !== 'undefined') {
        gsap.from('.logo', { duration: 1, y: -50, opacity: 0, delay: 0.2 });
        gsap.from('.nav-links li', { duration: 1, y: -50, opacity: 0, stagger: 0.1, delay: 0.4 });
        gsap.from('.hero-title', { duration: 1, y: 50, opacity: 0, delay: 0.6 });
        gsap.from('.hero-subtitle', { duration: 1, y: 50, opacity: 0, delay: 0.8 });
        gsap.from('.cta-button', { duration: 1, y: 50, opacity: 0, delay: 1 });
    }
});

// تحسينات GSAP للحركات
document.addEventListener('DOMContentLoaded', function() {
    // تأثيرات GSAP
    if (typeof gsap !== 'undefined') {
        // تأثيرات التحميل الأولي
        gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
        gsap.from(".hero-title", { duration: 1.2, y: 50, opacity: 0, delay: 0.3, ease: "back.out" });
        gsap.from(".hero-subtitle", { duration: 1, y: 50, opacity: 0, delay: 0.6, ease: "power2.out" });
        gsap.from(".cta-button", { duration: 0.8, y: 50, opacity: 0, delay: 0.9, ease: "bounce.out" });
        
        // تأثيرات التمرير
        gsap.utils.toArray(".service-card").forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1
            });
        });
        
        // تأثير شريط التقنيات
        gsap.to(".tech-slider", {
            xPercent: -50,
            scrollTrigger: {
                trigger: ".technologies",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                ease: "none"
            }
        });
    }
    
    // تحسين تأثير الجسيمات
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 70, density: { enable: true, value_area: 1000 } },
                color: { value: "#2962FF" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 4, random: true },
                line_linked: { 
                    enable: true, 
                    distance: 180, 
                    color: "#2962FF", 
                    opacity: 0.3, 
                    width: 1.5 
                },
                move: { 
                    enable: true, 
                    speed: 2.5, 
                    direction: "none", 
                    random: true, 
                    straight: false, 
                    out_mode: "out" 
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { particles_nb: 4 }
                }
            }
        });
    }
    
    // تأثير تمرير سلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
// تأثيرات قسم المميزات
if (typeof gsap !== 'undefined') {
    gsap.utils.toArray(".feature-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: ".features",
                start: "top 70%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "back.out"
        });
    });
    
    // تأثير الأمواج
    gsap.to(".features-waves path:nth-child(1)", {
        scrollTrigger: {
            trigger: ".features",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        x: -100,
        ease: "none"
    });
    
    gsap.to(".features-waves path:nth-child(2)", {
        scrollTrigger: {
            trigger: ".features",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        x: 50,
        ease: "none"
    });
}
// Initialize Testimonials Slider
if (typeof tns !== 'undefined') {
    const slider = tns({
        container: '.testimonials-slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        controls: false,
        nav: true,
        navPosition: 'bottom',
        responsive: {
            768: {
                items: 2
            }
        }
    });
}

// Add scroll animations to all sections
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.utils.toArray("section").forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 70%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.8
        });
    });
}
// تهيئة مكتبة AOS للانيميشن
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
    
    // زر العودة للأعلى
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // تأثيرات عند التمرير فوق الروابط
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'translateX(-5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'translateX(0)';
        });
    });
});