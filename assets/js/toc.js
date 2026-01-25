// Table of Contents Generator
(function() {
  const content = document.querySelector('.docs-content, .post-content');
  if (!content) return;

  const headings = content.querySelectorAll('h2, h3');
  if (headings.length < 3) return; // Only show TOC if there are enough headings

  // Create TOC container
  const toc = document.createElement('nav');
  toc.className = 'table-of-contents';
  toc.innerHTML = '<h4>On This Page</h4><ul class="toc-list"></ul>';

  const tocList = toc.querySelector('.toc-list');

  // Build TOC
  headings.forEach((heading, index) => {
    // Add ID if not present
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }

    const li = document.createElement('li');
    li.className = `toc-item toc-item--${heading.tagName.toLowerCase()}`;

    const a = document.createElement('a');
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;
    a.className = 'toc-link';

    li.appendChild(a);
    tocList.appendChild(li);
  });

  // Insert TOC before first heading
  const firstHeading = content.querySelector('h2');
  if (firstHeading) {
    content.insertBefore(toc, firstHeading);
  }

  // Smooth scroll
  toc.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
