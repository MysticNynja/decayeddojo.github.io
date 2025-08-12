import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import matter from 'gray-matter'
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
        const parsed = matter(txt)
        const content = parsed.content || ''
        const data = parsed.data as { title?: string; author?: string; date?: string }
        setTitle(data?.title || slug)
        setAuthor(data?.author || '')
        setDate(data?.date || '')
        const htmlStr = marked.parse(content)
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