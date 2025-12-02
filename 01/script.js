document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple scroll animation for cards and timeline
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 1s ease-out`;
                entry.target.style.opacity = 1;
            }
        });
    }, {
        threshold: 0.1
    });

    // Add elements to be observed
    const elementsToAnimate = document.querySelectorAll('.timeline-item, .card, .tip-item');
    elementsToAnimate.forEach(el => {
        el.style.opacity = 0; // Hide elements initially
        observer.observe(el);
    });

    // Add a simple keyframe animation style to the head
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeInUp {
            from {
                transform: translateY(20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

});
