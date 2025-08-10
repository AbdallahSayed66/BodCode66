document.addEventListener('DOMContentLoaded', function() {
    // تهيئة مكتبة AOS للانيميشن
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
    
    // تهيئة السلايدر
    if (typeof $ !== 'undefined' && $.fn.slick) {
        $('.tech-slider').slick({
            rtl: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }
    
    // الأسئلة الشائعة
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            
            if (this.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
            
            // إغلاق الإجابات الأخرى
            faqQuestions.forEach(q => {
                if (q !== this && q.classList.contains('active')) {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = 0;
                }
            });
        });
    });
    
    // تأثيرات عند التمرير فوق بطاقات الخدمات
    const typeCards = document.querySelectorAll('.type-card');
    
    typeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.type-icon').style.transform = 'rotate(15deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.type-icon').style.transform = 'rotate(0)';
        });
    });
    
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
    
    // تأثيرات الأيقونات الطافية
    const floatingIcons = document.querySelectorAll('.floating-icons i');
    
    floatingIcons.forEach((icon, index) => {
        // تأثير طفو متكرر
        gsap.to(icon, {
            y: 10,
            duration: 2 + index,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });
});