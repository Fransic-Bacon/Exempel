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

   

        // Add flame animation on scroll
        window.addEventListener('scroll', () => {
            const flames = document.querySelectorAll('.decorative-flame');
            flames.forEach(flame => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                flame.style.transform = `translateY(${rate}px)`;
            });
        });