/**
 * scripts/prerender.js
 *
 * Runs after `vite build`.  Spins up the built dist/ on a local preview
 * server, visits every route with a headless Chromium (via Puppeteer),
 * waits for the page to fully render (including Three.js scenes), then
 * writes the captured HTML to dist/<route>/index.html.
 *
 * Netlify — and any other static host — will serve those HTML files
 * directly to crawlers, giving bots real content instead of a blank
 * <div id="root"></div>.
 *
 * Usage (called automatically via `npm run build`):
 *   node scripts/prerender.js
 */

import { preview } from 'vite'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST      = path.join(__dirname, '..', 'dist')
const PORT      = 4173   // vite preview default

// ─── Routes to prerender ────────────────────────────────────────────────────
// Keep this list in sync with seoConfig.js and App.jsx.
// Add a route here whenever you add a new public page.
const ROUTES = [
  '/',
  '/about',
  '/ai-systems',
  '/mobile-apps',
  '/web-apps',
  '/vault',
  '/how-we-work',
  '/industries',
  '/portfolio',
  '/faq',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
]

// ─── How long to wait after network goes idle before snapshotting ────────────
// Three.js / WebGL scenes need a bit of extra time beyond networkidle0.
// Increase if you still see blank canvas elements in the captured HTML.
const EXTRA_WAIT_MS = 3000

async function run() {
  // 1. Start vite preview server (serves the already-built dist/)
  const server = await preview({
    preview: { port: PORT, strictPort: true, open: false },
  })
  console.log(`\n🚀  Preview server running at http://localhost:${PORT}\n`)

  // 2. Launch headless Chromium
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  })

  const errors = []

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`
    process.stdout.write(`  Rendering ${route} … `)

    try {
      const page = await browser.newPage()

      // Suppress noisy console output from Three.js / React during capture
      page.on('console', () => {})
      page.on('pageerror', () => {})

      // Wait for network to go quiet, then give Three.js extra time
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30_000 })
      await new Promise(r => setTimeout(r, EXTRA_WAIT_MS))

      const html = await page.content()
      await page.close()

      // Write captured HTML to dist/<route>/index.html
      const outDir  = route === '/' ? DIST : path.join(DIST, route)
      const outFile = path.join(outDir, 'index.html')
      fs.mkdirSync(outDir, { recursive: true })
      fs.writeFileSync(outFile, html, 'utf-8')

      console.log('✓')
    } catch (err) {
      console.log('✗ (error — see below)')
      errors.push({ route, err })
    }
  }

  // 3. Clean up
  await browser.close()
  server.httpServer.close()

  if (errors.length) {
    console.error('\n⚠️  Some routes failed to prerender:')
    errors.forEach(({ route, err }) =>
      console.error(`  ${route}: ${err.message}`)
    )
    process.exit(1)
  }

  console.log('\n✅  Prerendering complete!\n')
}

run().catch(err => {
  console.error('\n❌  Prerender script crashed:', err)
  process.exit(1)
})
