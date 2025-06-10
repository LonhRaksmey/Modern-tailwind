// src/js/script.js

// --- Mobile Menu Toggle ---
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// --- Dark/Light Mode Toggle ---
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Function to apply theme
const applyTheme = (theme) => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
};

// Check for saved theme in localStorage or user's system preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    applyTheme(savedTheme);
} else if (prefersDark) {
    applyTheme('dark');
} else {
    applyTheme('light');
}

// Event listener for the toggle button
themeToggle.addEventListener('click', () => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    if (isDarkMode) {
        applyTheme('light');
        localStorage.setItem('theme', 'light');
    } else {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
    }
});