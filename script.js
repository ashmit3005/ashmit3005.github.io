function navigateTo(event, page) {
    event.preventDefault();
    const loadingElement = document.getElementById('loading');

    // Create and append the video element
    const video = document.createElement('video');
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    const source = document.createElement('source');
    source.src = 'animation.mp4';
    source.type = 'video/mp4';
    video.appendChild(source);
    loadingElement.appendChild(video);

    // Show loading animation
    loadingElement.style.display = 'flex';

    // Simulate loading time with setTimeout
    setTimeout(() => {
        // Navigate to the new page
        window.location.href = page;
    }, 1000); // Adjust this timeout to match your loading animation duration
}

window.onload = () => {
    // Hide loading animation after page load
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'none';
    loadingElement.innerHTML = ''; // Clear the video element

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};
