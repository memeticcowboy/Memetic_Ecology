# Icons Directory

## Favicon

Place a `favicon.ico` file here for the site icon.

### Creating a Favicon

**Option 1: Online Generator**
1. Visit [Favicon.io](https://favicon.io/)
2. Create icon using:
   - Text (use ✶ glyph)
   - Image (upload Aether symbol)
   - Emoji (star or geometric shape)
3. Download and place `favicon.ico` here

**Option 2: Manual Creation**
1. Create 32x32px PNG with Aether symbol (✶)
2. Use purple (#9B5DE5) on transparent background
3. Convert to ICO format
4. Save as `favicon.ico`

**Option 3: SVG Favicon (Modern)**

Create `favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="#9B5DE5"/>
  <text x="50" y="70" font-size="60" text-anchor="middle" fill="white">✶</text>
</svg>
```

Then reference in `_includes/head.html`:
```html
<link rel="icon" href="{{ '/assets/images/icons/favicon.svg' | relative_url }}" type="image/svg+xml">
```

### Recommended Files

- `favicon.ico` - 32x32px for browsers
- `apple-touch-icon.png` - 180x180px for iOS
- `favicon-32x32.png` - For modern browsers
- `favicon-16x16.png` - For older browsers

### Quick Placeholder

Until you create custom icons, browsers will use default. Not critical for launch.
