// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'court-section'
    const sections = document.querySelectorAll('.court-section');
    
    // Array of background images to use for each section
    const backgrounds = [
        'url("trial.webp")',
        'url("trial.webp")',
        'url("trial.webp")',
        'url("trial.webp")'
    ];
    
    // Options for the IntersectionObserver
    const options = {
        threshold: 0.5 // Trigger when 50% of the section is visible
    };
    
    // Callback function for the IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the index of the intersecting section
                const index = Array.from(sections).indexOf(entry.target);
                // Change the background image of the body
                document.body.style.backgroundImage = backgrounds[index];
                // Scale up the intersecting section
                entry.target.style.transform = 'scale(1.1)';
            } else {
                // Scale down the section when it's not intersecting
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, options);
    
    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});
