#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import fg from 'fast-glob'
import matter from 'gray-matter'
import dayjs from 'dayjs'

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true })
}

async function run() {
  const cwd = process.cwd()
  const postsDir = path.resolve(cwd, 'public', 'content', 'posts')
  await ensureDir(postsDir)
  const files = await fg('**/*.md', { cwd: postsDir })
  const items = []
  for (const file of files) {
    try {
      const full = path.join(postsDir, file)
      const raw = await fs.readFile(full, 'utf-8')
      const parsed = matter(raw)
      const slug = file.replace(/\.md$/i, '')
      const data = parsed.data || {}
      const title = data.title || slug
      const author = data.author || ''
      const date = data.date ? new Date(data.date).toISOString() : ''
      const tags = Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : [])
      items.push({ slug, title, author, date, tags })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Failed to parse post file:', file, e.message)
    }
  }
  items.sort((a, b) => {
    const da = a.date ? dayjs(a.date).valueOf() : 0
    const db = b.date ? dayjs(b.date).valueOf() : 0
    return db - da
  })
  const outPath = path.join(postsDir, 'index.json')
  await fs.writeFile(outPath, JSON.stringify(items, null, 2))
  // eslint-disable-next-line no-console
  console.log(`Generated ${items.length} posts → ${outPath}`)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})