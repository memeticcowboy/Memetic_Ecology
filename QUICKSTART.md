# Quick Start Guide

## 5-Minute Local Setup

```bash
# 1. Install dependencies
bundle install

# 2. Run development server
bundle exec jekyll serve

# 3. Open browser
# Visit: http://localhost:4000
```

## 5-Minute GitHub Pages Deploy

```bash
# 1. Initialize git
git init
git add .
git commit -m "Initial commit: Memetic Ecology site"

# 2. Create repo on GitHub named: memeticcowboy.github.io

# 3. Push to GitHub
git branch -M main
git remote add origin https://github.com/memeticcowboy/memeticcowboy.github.io.git
git push -u origin main

# 4. Enable GitHub Pages
# Go to: Settings → Pages
# Set: Source = main branch, folder = root
# Save

# 5. Wait 2-5 minutes, then visit:
# https://memeticcowboy.github.io
```

## Essential Files to Know

| File | Purpose |
|------|---------|
| `_config.yml` | Site settings |
| `_data/elements.yml` | Element definitions |
| `_data/navigation.yml` | Site navigation |
| `index.md` | Homepage |
| `docs/` | Documentation pages |
| `_posts/` | Blog posts |
| `_sass/_variables.scss` | Colors & design |

## Common Commands

```bash
# Start dev server
bundle exec jekyll serve

# Start with live reload
bundle exec jekyll serve --livereload

# Build site
bundle exec jekyll build

# Clean build
bundle exec jekyll clean

# Update dependencies
bundle update
```

## Adding Content

### New Blog Post

Create `_posts/YYYY-MM-DD-title.md`:

```yaml
---
layout: post
title: "Post Title"
date: 2026-01-22
author: Daniel
categories: [category]
tags: [tag1, tag2]
---

Content here...
```

### New Doc Page

Create `docs/path/to/page.md`:

```yaml
---
layout: docs
title: "Page Title"
description: "Description"
---

Content here...
```

### New Element Page

Create `docs/elements/element-name.md`:

```yaml
---
layout: element
title: "Symbol Element — Daemon"
element_id: element-id
glyph: "Symbol"
category_badge: element
---

Extended content here...
```

## File Structure

```
NEMA/
├── _config.yml          ← Site settings
├── _data/               ← YAML data files
├── _includes/           ← Reusable HTML
├── _layouts/            ← Page templates
├── _sass/               ← Stylesheets
├── assets/              ← CSS, JS, images
├── docs/                ← Documentation
├── _posts/              ← Blog posts
├── blog/                ← Blog index
├── index.md             ← Homepage
└── 404.html             ← Error page
```

## Troubleshooting

**Build fails?**
- Check YAML syntax in frontmatter
- Run `bundle exec jekyll clean`

**Styles not loading?**
- Verify `assets/css/main.scss` has frontmatter `---`
- Check browser console for errors

**Glyphs showing as boxes?**
- Check Google Fonts is loading
- Try different browser
- Check font-family fallback

**Changes not appearing?**
- Hard refresh browser (Ctrl+Shift+R)
- Clear browser cache
- Restart Jekyll server

## Next Steps

1. ✅ Read `README.md` for full documentation
2. ✅ Follow `DEPLOYMENT.md` for detailed deploy guide
3. ✅ Review `PROJECT_SUMMARY.md` for architecture overview
4. ✅ Customize colors in `_sass/_variables.scss`
5. ✅ Add content to `docs/` and `_posts/`
6. ✅ Test everything locally before deploying
7. ✅ Deploy to GitHub Pages
8. ✅ Verify live site works
9. ✅ Start creating content!

---

**Ready to deploy?** Follow the 5-minute guide above.

**Need help?** Check `DEPLOYMENT.md` for detailed steps.

**Want to customize?** Start with `_sass/_variables.scss`.

✶
