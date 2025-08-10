import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const root = path.resolve(process.cwd())
const outDir = path.join(root, 'brand', 'dist')
fs.mkdirSync(outDir, { recursive: true })

const sources = {
  hero: path.join(root, 'vetta.svg'),
  icon: path.join(root, 'vetta_icon.svg'),
  word: path.join(root, 'vetta_logotype.svg'),
  favicon: path.join(root, 'favicon.svg')
}

async function render(svgPath, w, h, basename) {
  const svg = fs.readFileSync(svgPath)
  const pngPath = path.join(outDir, `${basename}-${w}x${h}.png`)
  const webpPath = path.join(outDir, `${basename}-${w}x${h}.webp`)
  await sharp(svg, { density: 384 })
    .resize(w, h, { fit: 'cover' })
    .png({ compressionLevel: 9 })
    .toFile(pngPath)
  await sharp(svg, { density: 384 })
    .resize(w, h, { fit: 'cover' })
    .webp({ quality: 92 })
    .toFile(webpPath)
}

async function renderSquare(svgPath, size, basename) {
  const svg = fs.readFileSync(svgPath)
  const pngPath = path.join(outDir, `${basename}-${size}.png`)
  const webpPath = path.join(outDir, `${basename}-${size}.webp`)
  await sharp(svg, { density: 384 })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(pngPath)
  await sharp(svg, { density: 384 })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 92 })
    .toFile(webpPath)
}

async function favPng(size) {
  const svg = fs.readFileSync(sources.favicon)
  const pngPath = path.join(outDir, `favicon-${size}.png`)
  await sharp(svg, { density: 384 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(pngPath)
}

;(async () => {
  // Social
  await render(sources.hero, 1200, 630, 'og')
  await render(sources.hero, 1600, 900, 'twitter')

  // Squares
  await renderSquare(sources.hero, 1024, 'square')
  await renderSquare(sources.hero, 512, 'square')

  // Icons
  await renderSquare(sources.icon, 512, 'icon')

  // Favicons
  await favPng(32)
  await favPng(48)
  await favPng(64)

  console.log('Brand assets exported to brand/dist')
})().catch((e) => {
  console.error(e)
  process.exit(1)
})


