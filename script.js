function navigateTo(event, page) {
    event.preventDefault();
    showLoadingAnimation(page);
}

function showLoadingAnimation(page) {
    const loadingElement = document.getElementById('loading');
    const loadingVideo = document.createElement('video');

    // Set video attributes
    loadingVideo.id = 'loadingVideo';
    loadingVideo.autoplay = true;
    loadingVideo.loop = false; // Ensure it plays once
    loadingVideo.muted = true;
    loadingVideo.playsInline = true;

    // Create source element
    const source = document.createElement('source');
    source.src = 'animation.mp4';
    source.type = 'video/mp4';

    // Append source to video
    loadingVideo.appendChild(source);

    // Clear any previous content and append video
    loadingElement.innerHTML = '';
    loadingElement.appendChild(loadingVideo);

    // Show loading animation
    loadingElement.style.display = 'flex';

    // Event listener to navigate to the new page after video ends
    loadingVideo.onended = () => {
        window.location.href = page;
    };

    // In case the video fails to load or play, set a timeout fallback
    setTimeout(() => {
        window.location.href = page;
    }, 5000); // Adjust this timeout to match your loading animation duration if needed
}

window.onload = () => {
    // Hide loading animation after page load
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'none';

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
