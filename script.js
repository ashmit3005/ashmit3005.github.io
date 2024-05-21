document.addEventListener('DOMContentLoaded', () => {
    // Add the fade-in class to the body element to trigger the animation
    document.body.classList.add('fade-in');

    // Function to animate the transition effect when navigating to a new page
    function animateTransition(url) {
        // Show the animation overlay
        const overlay = document.querySelector('.animation-overlay');
        const video = document.querySelector('.animation-video');
        overlay.classList.add('show');
        video.play();

        // Wait for the video to end before navigating
        video.onended = () => {
            window.location.href = url;
        };
    }

    // Attach event listeners to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = e.target.href;
            animateTransition(url);
        });
    });

    // Intersection Observer for zoom in/out effect on sections
    const sections = document.querySelectorAll('.court-section');
    const options = {
        threshold: 0.5
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'scale(1.1)';
            } else {
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});



