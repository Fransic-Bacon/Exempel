 function scrollToMenu() {
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        }

        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            const headerHeight = 80; // Fixed header height
            const menunavHeight = 60; // Approximate menunav height with padding
            const viewportHeight = window.innerHeight;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - (viewportHeight / 2) + (headerHeight + menunavHeight);

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        // Logo animation on page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('logoOverlay').classList.add('hidden');
                document.getElementById('heroContent').classList.add('visible');
            }, 500); // Logo displays for 2 seconds
        });