// Select the hamburger and nav-list elements
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

// Add click event listener to the hamburger
hamburger.addEventListener('click', () => {
    // Toggle the "active" class on the nav-list
    navList.classList.toggle('active');
});