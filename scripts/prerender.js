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
import puppeteerCore from 'puppeteer-core'
import puppeteer from 'puppeteer'
import chromium from '@sparticuz/chromium'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(__dirname, '..', 'dist')
const PORT = 4173   // vite preview default

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
  // '/portfolio', // Hidden temporarily
  '/faq',
  '/pricing',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
]

// ─── How long to wait after network goes idle before snapshotting ────────────
// Three.js / WebGL scenes need a bit of extra time beyond networkidle0.
// Increase if you still see blank canvas elements in the captured HTML.
const EXTRA_WAIT_MS = 3000

// ─── Deduplicate <head> tags in captured HTML ───────────────────────────────
// React 19 head hoisting may duplicate tags (initial "/" SEO fires, then the
// real route SEO fires).  We keep the LAST occurrence of each tag type so
// the page-specific values win.
function dedupeHeadTags(html) {
  // Extract and work within <head>…</head>
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)
  if (!headMatch) return html

  let head = headMatch[1]

  // Tags to deduplicate — for each, keep only the last match
  const dedupePatterns = [
    // <title>…</title>
    /<title>[^<]*<\/title>/gi,
    // meta name="description"
    /<meta\s+name="description"[^>]*>/gi,
    // link rel="canonical"
    /<link\s+rel="canonical"[^>]*>/gi,
    // og: meta properties
    /<meta\s+property="og:title"[^>]*>/gi,
    /<meta\s+property="og:description"[^>]*>/gi,
    /<meta\s+property="og:url"[^>]*>/gi,
    /<meta\s+property="og:image"[^>]*>/gi,
    /<meta\s+property="og:image:width"[^>]*>/gi,
    /<meta\s+property="og:image:height"[^>]*>/gi,
    /<meta\s+property="og:locale"[^>]*>/gi,
    /<meta\s+property="og:type"[^>]*>/gi,
    /<meta\s+property="og:site_name"[^>]*>/gi,
    // twitter: meta
    /<meta\s+name="twitter:card"[^>]*>/gi,
    /<meta\s+name="twitter:title"[^>]*>/gi,
    /<meta\s+name="twitter:description"[^>]*>/gi,
    /<meta\s+name="twitter:image"[^>]*>/gi,
    /<meta\s+name="twitter:site"[^>]*>/gi,
    /<meta\s+name="twitter:creator"[^>]*>/gi,
  ]

  for (const pattern of dedupePatterns) {
    const matches = head.match(pattern)
    if (matches && matches.length > 1) {
      // Remove all but the last occurrence
      const last = matches[matches.length - 1]
      // Remove all matches first
      head = head.replace(pattern, '')
      // Re-insert only the last one (at the end, before </head>)
      head += '\n' + last
    }
  }

  return html.replace(/<head[^>]*>[\s\S]*?<\/head>/i, `<head>${head}</head>`)
}

async function run() {
  // 1. Start vite preview server (serves the already-built dist/)
  const server = await preview({
    preview: { port: PORT, strictPort: true, open: false },
  })
  console.log(`\n🚀  Preview server running at http://localhost:${PORT}\n`)

  // 2. Launch headless Chromium
  // Detect if we're in a serverless/CI environment (e.g. Netlify, Lambda, GitHub Actions)
  const isServerless = !!(process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.NETLIFY || process.env.CI)

  console.log(`\n🔍  Detected environment: ${isServerless ? 'Serverless/CI' : 'Local Machine'}`)

  const launchOptions = isServerless
    ? {
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    }
    : {
      // Local machine - use standard puppeteer (which handles its own binary)
      headless: 'shell',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    }

  const browser = await (isServerless ? puppeteerCore : puppeteer).launch(launchOptions)

  const errors = []

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`
    process.stdout.write(`  Rendering ${route} … `)

    try {
      const page = await browser.newPage()

      // Suppress noisy console output from Three.js / React during capture
      page.on('console', () => { })
      page.on('pageerror', () => { })

      // Wait for network to go quiet, then give Three.js extra time
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30_000 })
      await new Promise(r => setTimeout(r, EXTRA_WAIT_MS))

      const rawHtml = await page.content()

      // React 19 updates document.title correctly, but page.content()
      // may serialize a stale <title> element. Grab the real title.
      const documentTitle = await page.evaluate(() => document.title)
      await page.close()

      // ── Deduplicate head tags ──────────────────────────────────────
      // React 19 head-hoisting can leave duplicate title / meta / link
      // tags when the initial "/" SEO fires before the target route
      // resolves. Keep only the LAST occurrence of each tag type.
      let html = dedupeHeadTags(rawHtml)

      // Force the correct title from document.title
      html = html.replace(/<title>[^<]*<\/title>/i, `<title>${documentTitle}</title>`)

      // Write captured HTML to dist/<route>/index.html
      const outDir = route === '/' ? DIST : path.join(DIST, route)
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
