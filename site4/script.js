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

        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(74, 23, 40, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(212, 175, 55, 0.3)';
            } else {
                header.style.background = 'rgba(74, 23, 40, 0.95)';
                header.style.boxShadow = 'none';
            }
        });

        // Add flame animation on scroll
        window.addEventListener('scroll', () => {
            const flames = document.querySelectorAll('.decorative-flame');
            flames.forEach(flame => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                flame.style.transform = `translateY(${rate}px)`;
            });
        });