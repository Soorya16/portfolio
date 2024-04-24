function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

function toggleTheme() {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  updateThemeToggleIcon(isDarkMode);
}

function updateThemeToggleIcon(isDarkMode) {
  const moonIcon = document.querySelector('.fa-regular.fa-moon');
  const sunIcon = document.querySelector('.fa-solid.fa-sun');
  if (isDarkMode) {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'inline';
  } else {
    moonIcon.style.display = 'inline';
    sunIcon.style.display = 'none';
  }
}

const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  body.classList.toggle(savedTheme);
  updateThemeToggleIcon(savedTheme === 'dark');
} else if (userPrefersDark) {
  body.classList.add('dark-mode');
  updateThemeToggleIcon(true);
}
