import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import yaml from 'js-yaml'

import { marked } from 'marked'
import dayjs from 'dayjs'

marked.setOptions({
  breaks: true,
  gfm: true,
})

export const Post: React.FC = () => {
  const { slug } = useParams()
  const [html, setHtml] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [date, setDate] = useState<string>('')

  useEffect(() => {
    const run = async () => {
      if (!slug) return
      try {
        const url = `/content/posts/${slug}.md?t=${Date.now()}`
        const res = await fetch(url, { cache: 'no-store' })
        if (!res.ok) throw new Error(`Status ${res.status}`)
        const txt = await res.text()
        // Minimal frontmatter parser to avoid Buffer polyfills
        // ---\nYAML\n---\ncontent
        let fmTitle = ''
        let fmAuthor = ''
        let fmDate = ''
        let fmTags: string[] | undefined
        let body = txt
        if (txt.startsWith('---')) {
          const end = txt.indexOf('\n---', 3)
          if (end !== -1) {
            const yamlBlock = txt.slice(3, end + 1) // includes trailing \n
            try {
              const meta = yaml.load(yamlBlock) as any
              fmTitle = meta?.title || ''
              fmAuthor = meta?.author || ''
              fmDate = meta?.date || ''
              fmTags = Array.isArray(meta?.tags) ? meta.tags : meta?.tags ? [meta.tags] : undefined
            } catch {}
            body = txt.slice(end + 4)
          }
        }
        setTitle(fmTitle || slug)
        setAuthor(fmAuthor || '')
        setDate(fmDate || '')
        const htmlStr = marked.parse(body)
        setHtml(htmlStr as string)
      } catch (e: any) {
        setTitle('Post not found')
        setHtml(`<p>Post not found. ${e?.message || ''}</p>`) 
      }
    }
    run()
  }, [slug])

  return (
    <section className="container-max py-10 md:py-16">
      <h1 className="font-display text-2xl md:text-3xl text-dojo-neon mb-2">{title}</h1>
      <div className="text-sm text-white/60 mb-6">
        {author ? <span>By {author}</span> : null}
        {author && date ? <span> • </span> : null}
        {date ? <span>{dayjs(date).format('MMM D, YYYY')}</span> : null}
      </div>
      <article className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  )
}