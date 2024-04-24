function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Add this to your existing JavaScript file

const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

function toggleTheme() {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Check for user's theme preference in local storage
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  body.classList.toggle(savedTheme);
} else if (userPrefersDark) {
  body.classList.add('dark-mode');
}

