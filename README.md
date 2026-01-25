# Memetic Ecology Jekyll Site

A complete Jekyll site for the Memetic Ecology framework, designed for deployment to GitHub Pages at `memeticcowboy.github.io`.

## Overview

This site provides comprehensive documentation for the Memetic Ecology framework — a system for understanding consciousness as recursive pattern-recognition.

### Framework Components

- **7 Elements** (Process Layer): Air, Water, Fire, Wood, Earth, Metal, Aether
- **IF-Prime Operators** (Mathematical Layer): Ω, χ, Q, Ψ, Z
- **Habitats** (Structural Layer): I-Tube, My-Stream, We-Sphere, Thread, Knot, Threadplex
- **SIML Language**: Notation system for memetic patterns
- **World States**: Co-SPHERE, MemeGrid, ThreadWeave

## Local Development

### Prerequisites

- Ruby 2.7 or higher
- Bundler gem

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/memeticcowboy/memeticcowboy.github.io.git
   cd memeticcowboy.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser to `http://localhost:4000`

### Development Commands

- **Build site**: `bundle exec jekyll build`
- **Serve with live reload**: `bundle exec jekyll serve --livereload`
- **Serve with drafts**: `bundle exec jekyll serve --drafts`
- **Clean build artifacts**: `bundle exec jekyll clean`

## Deployment to GitHub Pages

### Option 1: Deploy from Main Branch (Recommended)

1. Create a repository named `memeticcowboy.github.io` on GitHub

2. Initialize git and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Memetic Ecology site"
   git branch -M main
   git remote add origin https://github.com/memeticcowboy/memeticcowboy.github.io.git
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Save

4. Site will be live at `https://memeticcowboy.github.io` in a few minutes

### Option 2: GitHub Actions Deployment

Create `.github/workflows/jekyll.yml`:

```yaml
name: Deploy Jekyll site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.1'
          bundler-cache: true
      - run: bundle exec jekyll build
      - uses: actions/upload-pages-artifact@v2

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v3
        id: deployment
```

## Site Structure

```
.
├── _config.yml              # Site configuration
├── _data/                   # Data files (YAML)
│   ├── elements.yml        # 7 elements with metadata
│   ├── operators.yml       # IF-Prime operators
│   ├── habitats.yml        # Habitat definitions
│   ├── siml_objects.yml    # SIML objects
│   ├── siml_relations.yml  # SIML relations
│   └── navigation.yml      # Site navigation
├── _includes/               # Reusable components
│   ├── components/         # UI components
│   └── scripts/            # JavaScript snippets
├── _layouts/                # Page templates
├── _sass/                   # Stylesheets (SCSS)
├── assets/                  # Static assets
│   ├── css/
│   ├── js/
│   └── images/
├── docs/                    # Documentation pages
│   ├── elements/
│   ├── operators/
│   ├── habitats/
│   ├── siml/
│   └── reference/
├── _posts/                  # Blog posts
├── blog/                    # Blog index
└── index.md                 # Homepage
```

## Key Features

### Design System

- **Color-coded elements**: Each element has a unique color for visual distinction
- **Glyph system**: Unicode glyphs (∴ ≈ ▲ 𐂷 ☷ ⛨ ✶) for element identification
- **LaTeX rendering**: KaTeX integration for mathematical equations
- **Responsive design**: Mobile-first with clean typography
- **Dark mode**: Theme toggle with localStorage persistence

### Components

All components are in `_includes/components/`:

- `definition-box.html` — Styled definition display
- `equation-block.html` — LaTeX equation with label
- `glyph-badge.html` — Colored glyph badges
- `diagnostic.html` — Diagnostic question boxes
- `element-card.html` — Element summary cards
- `warning-box.html` — MemeGrid warnings
- `success-box.html` — Co-SPHERE indicators

### Data-Driven Content

Element pages are generated from `_data/elements.yml`, ensuring consistency across the site.

## Customization

### Adding New Elements

Edit `_data/elements.yml` and add a new element object with all required fields.

### Adding Documentation Pages

Create markdown files in `docs/` directory with proper frontmatter:

```yaml
---
layout: docs
title: "Page Title"
description: "Page description"
---
```

### Styling

All styles are in `_sass/` directory:

- `_variables.scss` — Color palette, spacing, fonts
- `_components.scss` — Component styles
- `_typography.scss` — Text styles
- Modify and rebuild to see changes

## Typography & Fonts

- **Body text**: Noto Sans (excellent Unicode coverage for glyphs)
- **Code**: JetBrains Mono
- **Math**: Noto Sans Math, STIX Two Math
- **Symbols**: Noto Sans Symbols 2

All fonts are loaded from Google Fonts CDN.

## Glyph Testing

To verify all glyphs render correctly, check these key symbols:

**Elements**: ∴ ≈ ▲ 𐂷 ☷ ⛨ ✶

**Operators**: Ω χ Ψ Φ Q Z

**Habitats**: ∿ ╬ ◎ ⤸·⤹ ◯ ◙ 🜛 ▩ ⿻

**Relations**: ⊃ → ≈ ⟿ ∘ ⇒ ⟳ ⊢ ⟰

## Adding Images

### Header Images

1. Add image to `assets/images/headers/`
2. Reference in frontmatter:
   ```yaml
   header_image: /assets/images/headers/your-image.jpg
   ```
3. Recommended specs:
   - Dimensions: 1920x600px (3:1 ratio)
   - Format: JPG for photos, PNG for graphics
   - Size: Under 500KB

### Diagrams

Place diagrams in `assets/images/diagrams/` and reference in markdown:

```markdown
![Diagram description](/assets/images/diagrams/your-diagram.png)
```

## Blog Posts

Create new posts in `_posts/` with filename format:

```
YYYY-MM-DD-title-slug.md
```

Frontmatter:

```yaml
---
layout: post
title: "Post Title"
date: 2026-01-22
author: Daniel
categories: [category1, category2]
tags: [tag1, tag2]
---
```

## Troubleshooting

### Glyphs not rendering

- Verify Google Fonts is loading (check Network tab)
- Check browser font fallback
- Some rare glyphs may not be in Noto Sans — add font-family override

### KaTeX not rendering

- Check browser console for errors
- Verify KaTeX CDN is accessible
- Ensure delimiters are correct: `$$equation$$` or `$inline$`

### Styles not updating

- Run `bundle exec jekyll clean`
- Clear browser cache
- Check `_sass/` import order in `assets/css/main.scss`

### Build errors

- Check Jekyll version compatibility
- Verify all required gems are installed
- Look for YAML syntax errors in frontmatter

## GitHub Pages Constraints

GitHub Pages has specific limitations:

- **Jekyll 3.9.x** (not 4.x)
- **No custom plugins** (only whitelisted)
- **No server-side processing** (use client-side JS)
- Build from **main branch root**

This site is built with these constraints in mind.

## Contributing

This is a personal documentation site, but suggestions are welcome via GitHub issues.

## License

The Memetic Ecology framework and this documentation are © 2026 Daniel.

## Contact

- GitHub: [@memeticcowboy](https://github.com/memeticcowboy)
- Site: [memeticcowboy.github.io](https://memeticcowboy.github.io)

---

*Memetic Ecology: Understanding consciousness as recursive pattern-recognition*

✶
