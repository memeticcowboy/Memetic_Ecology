# Deployment Checklist for GitHub Pages

## Pre-Deployment Checklist

### 1. Local Testing

- [ ] Run `bundle install` successfully
- [ ] Run `bundle exec jekyll serve` without errors
- [ ] Visit `http://localhost:4000` and verify:
  - [ ] Homepage loads correctly
  - [ ] Navigation links work
  - [ ] All glyphs render: ∴ ≈ ▲ 𐂷 ☷ ⛨ ✶ Ω χ Ψ Φ Q Z
  - [ ] LaTeX equations render correctly
  - [ ] Element cards display with correct colors
  - [ ] Sidebar navigation functions
  - [ ] Dark mode toggle works
  - [ ] Mobile responsive design works

### 2. Content Verification

- [ ] All element pages are accessible
- [ ] Documentation index loads
- [ ] Quick start guide is complete
- [ ] Blog index displays
- [ ] 404 page is styled correctly
- [ ] Footer links are correct

### 3. Configuration Check

- [ ] `_config.yml` has correct `url` and `baseurl`
- [ ] Site title and description are set
- [ ] Author information is correct
- [ ] All required plugins are listed

### 4. Asset Check

- [ ] CSS compiles without errors
- [ ] JavaScript files are present
- [ ] No broken image references
- [ ] Fonts load from CDN

## GitHub Repository Setup

### 1. Create Repository

```bash
# On GitHub, create a new repository named:
memeticcowboy.github.io
```

**Important**: Repository name MUST match `username.github.io` format.

### 2. Initialize Git

```bash
cd NEMA
git init
git add .
git commit -m "Initial commit: Memetic Ecology Jekyll site"
```

### 3. Add Remote and Push

```bash
git branch -M main
git remote add origin https://github.com/memeticcowboy/memeticcowboy.github.io.git
git push -u origin main
```

## GitHub Pages Configuration

### 1. Enable GitHub Pages

1. Go to repository: `https://github.com/memeticcowboy/memeticcowboy.github.io`
2. Click **Settings**
3. Click **Pages** in left sidebar
4. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

### 2. Wait for Build

- First build takes 2-5 minutes
- Watch the Actions tab for build status
- Green checkmark = success
- Red X = build failed (check logs)

### 3. Verify Deployment

Once build completes, visit:
```
https://memeticcowboy.github.io
```

## Post-Deployment Verification

### Homepage Tests

- [ ] Site loads at `https://memeticcowboy.github.io`
- [ ] All element cards display with correct colors
- [ ] Navigation menu works
- [ ] Footer links are correct
- [ ] No console errors

### Documentation Tests

- [ ] `/docs/` loads
- [ ] `/docs/quick-start/` loads
- [ ] `/docs/elements/` loads
- [ ] `/docs/elements/air/` loads with full content
- [ ] Sidebar navigation works
- [ ] Internal links work

### Glyph Rendering Tests

Visit any element page and verify these render correctly:

**Elements**: ∴ ≈ ▲ 𐂷 ☷ ⛨ ✶
**Operators**: Ω χ Ψ Φ Q Z
**Habitats**: ∿ ╬ ◎ ⤸·⤹ ◯ ◙ 🜛 ▩ ⿻

If glyphs show as boxes, check:
- Browser console for font loading errors
- Network tab for blocked CDN requests
- Font fallback in `_includes/head.html`

### LaTeX Rendering Tests

Check that equations render properly:

- Visit `/docs/elements/air/`
- Verify the ratio equation displays: $\frac{\text{Signal}}{\text{Noise}} \to 1$
- Check master equation on docs homepage

If KaTeX fails:
- Check browser console
- Verify KaTeX CDN is accessible
- Check delimiter syntax in markdown

### Component Tests

- [ ] Definition boxes display correctly
- [ ] Equation blocks render
- [ ] Diagnostic boxes appear
- [ ] Warning/success callouts show
- [ ] Element cards are clickable
- [ ] Glyph badges have correct colors

### Mobile Tests

Open site on mobile or resize browser:

- [ ] Navigation is accessible
- [ ] Sidebar hides on mobile
- [ ] Text is readable
- [ ] Cards stack properly
- [ ] No horizontal scroll

### Dark Mode Test

- [ ] Toggle button appears in header
- [ ] Clicking toggles theme
- [ ] Colors change appropriately
- [ ] Preference persists on reload

## Troubleshooting

### Build Fails on GitHub

1. Check Actions tab for error logs
2. Common issues:
   - YAML syntax errors in frontmatter
   - Unsupported plugins (only use whitelisted)
   - Missing dependencies in Gemfile
   - Invalid Liquid syntax

Fix locally, commit, and push again:
```bash
git add .
git commit -m "Fix build error"
git push
```

### Site Loads but Styles Missing

1. Check `_config.yml` baseurl setting
2. Verify `assets/css/main.scss` has frontmatter `---`
3. Check Sass compilation in build logs
4. Clear browser cache

### Glyphs Show as Boxes

1. Open browser DevTools → Network
2. Check if Google Fonts loads
3. If blocked, try different CDN or self-host fonts
4. Add font-family fallback in `_sass/_variables.scss`

### Images Don't Load

1. Verify images exist in `assets/images/`
2. Check file paths are correct (case-sensitive)
3. Use `{{ '/assets/images/...' | relative_url }}`
4. Confirm images are committed to git

### Links Return 404

1. Check file paths match `permalink` settings
2. Verify `_config.yml` permalink format
3. Use `{{ '/path/' | relative_url }}` for internal links
4. Rebuild site: `bundle exec jekyll clean && bundle exec jekyll serve`

## Updating the Site

### Making Changes

1. Edit files locally
2. Test with `bundle exec jekyll serve`
3. Commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. GitHub Pages will rebuild automatically (2-5 minutes)

### Adding New Posts

1. Create file in `_posts/`: `YYYY-MM-DD-title.md`
2. Add frontmatter and content
3. Commit and push
4. Post appears automatically in blog

### Adding New Documentation

1. Create markdown file in `docs/`
2. Add to `_data/navigation.yml` for sidebar
3. Commit and push

## Performance Optimization

### After Initial Deploy

- [ ] Optimize images (use TinyPNG)
- [ ] Check PageSpeed Insights
- [ ] Verify mobile performance
- [ ] Test on multiple browsers
- [ ] Check accessibility (WCAG)

### Recommended Images

For best performance:

**Header images**:
- Format: Progressive JPEG
- Dimensions: 1920x600px
- Size: < 500KB
- Optimize with: [TinyJPG](https://tinyjpg.com)

**Diagrams**:
- Format: PNG (if needed) or inline SVG
- Size: < 200KB
- Use vector when possible

## Analytics (Optional)

Add Google Analytics to `_includes/head.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Custom Domain (Optional)

To use custom domain like `memeticecology.com`:

1. Create `CNAME` file in root:
   ```
   memeticecology.com
   ```
2. Configure DNS with your provider:
   - Add A records pointing to GitHub IPs
   - Or add CNAME record pointing to `memeticcowboy.github.io`
3. In GitHub Settings → Pages, enter custom domain
4. Enable HTTPS (enforced automatically)

## Backup Strategy

- [ ] Repository is on GitHub (primary backup)
- [ ] Keep local copy synced
- [ ] Export critical data files periodically
- [ ] Document any custom configurations

## Support & Resources

- **Jekyll Docs**: https://jekyllrb.com/docs/
- **GitHub Pages Docs**: https://docs.github.com/pages
- **Liquid Syntax**: https://shopify.github.io/liquid/
- **KaTeX Docs**: https://katex.org/

---

## Quick Deploy Commands

```bash
# Initial setup
bundle install
bundle exec jekyll serve  # Test locally

# Git setup
git init
git add .
git commit -m "Initial commit: Memetic Ecology site"
git branch -M main
git remote add origin https://github.com/memeticcowboy/memeticcowboy.github.io.git
git push -u origin main

# Future updates
git add .
git commit -m "Update [description]"
git push
```

---

**Deployment Status**: ⬜ Not deployed | 🟨 In progress | ✅ Live

Site URL: `https://memeticcowboy.github.io`

---

*Once deployed, the Memetic Ecology framework will be accessible to anyone seeking to understand consciousness as recursive pattern-recognition.*

✶
