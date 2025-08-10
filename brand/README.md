VETTA Brand Kit
================

Contents
- tokens.json: color, typography, and layout tokens
- export-assets.mjs: node script to export PNG/WebP from SVGs
- Assets source: vetta.svg, vetta_icon.svg, vetta_logotype.svg, favicon.svg

Guidelines
- Typeface: Space Grotesk preferred, fallbacks Montserrat/Poppins/Inter
- Wordmark: ALL CAPS, weight 800, tracking -2
- Tagline: Title case, weight 400, size ≈ 33% of wordmark, gap ≈ 0.5× tagline height
- Prism: Left face #2C42F0→#7D2BEB, Right face #5B33F6→#4B93FF, 2px edge glow #4265F5
- Panel: Rounded rectangle radius 24, 80% width × 60% height of canvas
- Background: radial #05050A→#000 spotlight top-left

Exports
Run:

```bash
npm install
npm run export:assets
```

Outputs to brand/dist:
- Social: og-1200x630.(png|webp), twitter-1600x900.(png|webp)
- Squares: square-1024.(png|webp), square-512.(png|webp)
- Icons: icon-512.(png|webp)
- Favicons: favicon-32.png, favicon-48.png, favicon-64.png


