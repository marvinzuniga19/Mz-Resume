const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('img');

const lightIcon = 'media/light.png';
const darkIcon = 'media/night.png';

// Function to set theme
const setTheme = (isDarkMode) => {
  if (isDarkMode) {
    body.classList.add('dark-mode');
    themeIcon.src = lightIcon;
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    themeIcon.src = darkIcon;
    localStorage.setItem('theme', 'light');
  }
};

// Event listener for the toggle button
themeToggle.addEventListener('click', () => {
  const isDarkMode = body.classList.contains('dark-mode');
  setTheme(!isDarkMode);
});

// Check for saved theme in localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setTheme(true);
  } else {
    // Default to light mode if no theme is saved
    setTheme(false);
  }
});
