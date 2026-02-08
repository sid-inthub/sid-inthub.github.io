document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      navToggle.classList.toggle('nav-active');
      document.body.classList.toggle('nav-open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
          navLinks.classList.remove('nav-active');
          navToggle.classList.remove('nav-active');
          document.body.classList.remove('nav-open');
        }
      });
    });
  }

  // Dark Mode Toggle Functionality
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set initial theme based on saved preference or system preference
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Use system preference as default
    setTheme(systemDarkMode ? 'dark' : 'light');
  }

  // Theme toggle event listener
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Function to set theme
  function setTheme(theme) {
    body.setAttribute('data-theme', theme);

    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
        themeToggle.classList.add('dark');
      } else {
        themeIcon.className = 'fas fa-moon';
        themeToggle.classList.remove('dark');
      }
    }
  }

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // TABS / SEGMENTED CONTROL LOGIC
  const tabButtons = document.querySelectorAll('.segment-btn');
  const tabPanels = document.querySelectorAll('.tab-content');
  const tabsContainer = document.querySelector('.tabs-wrapper');

  if (tabButtons.length > 0 && tabPanels.length > 0) {
    // Mark as initialized for CSS to take over
    if (tabsContainer) {
      tabsContainer.classList.add('js-tabs-initialized');
    }

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons and panels
        tabButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });
        tabPanels.forEach(panel => panel.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');

        // Show corresponding panel
        const panelId = button.getAttribute('aria-controls');
        const activePanel = document.getElementById(panelId);
        if (activePanel) {
          activePanel.classList.add('active');
        }
      });
    });

    // Handle hash links (e.g. #experience) to switch tabs automatically
    function handleHashChange() {
      const hash = window.location.hash.substring(1); // remove #
      if (!hash) return;

      // Map hashes to tab IDs
      let targetTabId = null;
      if (hash === 'skills' || hash.includes('skill')) targetTabId = 'tab-skills';
      if (hash === 'certifications' || hash === 'education' || hash.includes('cert')) targetTabId = 'tab-certs';
      if (hash === 'experience' || hash.includes('exp')) targetTabId = 'tab-exp';

      if (targetTabId) {
        const targetBtn = document.getElementById(targetTabId);
        if (targetBtn) {
          targetBtn.click();
          // Scroll to tabs container
          if (tabsContainer) {
            tabsContainer.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }

    // Check hash on load
    handleHashChange();

    // Check hash on change
    window.addEventListener('hashchange', handleHashChange);
  }
});
