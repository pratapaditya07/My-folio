// Get all H1 elements inside the div
const h1Elements = document.querySelectorAll('.main2 h1');

// Add event listeners for hover effect
h1Elements.forEach(h1 => {
    h1.addEventListener('mouseenter', () => {
        // Add class to trigger animation on the parent div
        document.querySelector('.main2').classList.add('animate');
    });

    h1.addEventListener('mouseleave', () => {
        // Remove the class to stop the animation
        document.querySelector('.main2').classList.remove('animate');
    });
});








