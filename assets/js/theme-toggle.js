// Theme Toggle Functionality
(function() {
  const STORAGE_KEY = 'theme-preference';
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  // Get theme from localStorage or default to light
  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'light';
  }

  // Set theme
  function setTheme(theme) {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem(STORAGE_KEY, theme);

    // Update icon
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  // Toggle theme
  function toggleTheme() {
    const current = getTheme();
    const next = current === 'light' ? 'dark' : 'light';
    setTheme(next);
  }

  // Initialize on page load
  if (themeToggle) {
    setTheme(getTheme());
    themeToggle.addEventListener('click', toggleTheme);
  }
})();
