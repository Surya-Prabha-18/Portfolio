// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Select all the sections with animate__animated class
    const sections = document.querySelectorAll('section.animate__animated');

    // Options for the IntersectionObserver (show animation once the section comes into view)
    const options = {
        threshold: 0.2 // Trigger the animation once 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeIn'); // Apply Animate.css fadeIn
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    }, options);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});
