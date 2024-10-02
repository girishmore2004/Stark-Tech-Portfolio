// Select elements
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');
const rightNav = document.querySelector('.rightNav');

// Check if burger exists to avoid errors
if (burger) {
    burger.addEventListener('click', () => {
        rightNav.classList.toggle('visibility');
        navList.classList.toggle('visibility');
        navbar.classList.toggle('h-nav');

        // Toggle ARIA attributes for accessibility
        const isExpanded = rightNav.classList.contains('visibility');
        burger.setAttribute('aria-expanded', !isExpanded);
    });
}

// Display current year
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;
