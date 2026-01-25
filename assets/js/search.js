// Simple client-side search functionality
(function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  if (!searchInput || !searchResults) return;

  let searchIndex = [];

  // Build search index (in production, this would be pre-generated)
  function buildSearchIndex() {
    // This is a placeholder - in a real implementation,
    // you'd fetch a pre-generated JSON index of all pages
    searchIndex = [
      { title: 'Air Element', url: '/docs/elements/air/', excerpt: 'Signal/Noise discrimination...' },
      { title: 'Water Element', url: '/docs/elements/water/', excerpt: 'Relational resonance...' },
      // etc.
    ];
  }

  // Perform search
  function search(query) {
    if (!query || query.length < 2) {
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = searchIndex.filter(item =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.excerpt.toLowerCase().includes(lowerQuery)
    );

    displayResults(results);
  }

  // Display results
  function displayResults(results) {
    if (results.length === 0) {
      searchResults.innerHTML = '<p class="search-box__no-results">No results found</p>';
      searchResults.style.display = 'block';
      return;
    }

    const html = results.map(result => `
      <a href="${result.url}" class="search-box__result">
        <strong>${result.title}</strong>
        <p>${result.excerpt}</p>
      </a>
    `).join('');

    searchResults.innerHTML = html;
    searchResults.style.display = 'block';
  }

  // Debounce function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Initialize
  buildSearchIndex();
  searchInput.addEventListener('input', debounce((e) => search(e.target.value), 300));

  // Hide results when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });
})();
