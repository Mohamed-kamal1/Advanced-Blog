// Select the "Back to Top" button
const backToTopButton = document.querySelector('.back-to-top');

// Add an event listener to the window object to detect scrolling
window.addEventListener('scroll', () => {
    // Check if the vertical scroll position is greater than 300 pixels
    if (window.scrollY > 300) {
        // If true, add the 'show' class to the button to make it visible
        backToTopButton.classList.add('show');
    } else {
        // If false, remove the 'show' class to hide the button
        backToTopButton.classList.remove('show');
    }
});
