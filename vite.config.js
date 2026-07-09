import { writeFileSync } from 'node:fs'
import { cwd, env } from 'node:process'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from '@cloudflare/vite-plugin'

const seoFilesPlugin = () => ({
  name: 'seo-files',
  closeBundle() {
    const siteUrl = env.VITE_SITE_URL?.replace(/\/$/, '')
    const distDir = join(cwd(), 'dist')
    const robotsPath = join(distDir, 'robots.txt')

    if (siteUrl) {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
      writeFileSync(join(distDir, 'sitemap.xml'), sitemap)
      writeFileSync(
        robotsPath,
        `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      )
      return
    }

    writeFileSync(robotsPath, 'User-agent: *\nAllow: /\n')
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare(), seoFilesPlugin()],
})
