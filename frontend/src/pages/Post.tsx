import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Post: React.FC = () => {
  const { slug } = useParams()
  const [html, setHtml] = useState<string>('')

  useEffect(() => {
    const run = async () => {
      if (!slug) return
      try {
        const res = await fetch(`/content/posts/${slug}.md`)
        const txt = await res.text()
        // minimal markdown -> html (very naive). Later, we can add a markdown parser.
        const escaped = txt
          .replace(/^# (.*$)/gim, '<h1>$1</h1>')
          .replace(/^## (.*$)/gim, '<h2>$1</h2>')
          .replace(/^### (.*$)/gim, '<h3>$1</h3>')
          .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
          .replace(/\*(.*)\*/gim, '<i>$1</i>')
          .replace(/\n$/gim, '<br />')
        setHtml(escaped)
      } catch (e) {
        setHtml('<p>Post not found.</p>')
      }
    }
    run()
  }, [slug])

  return (
    <section className="container-max py-10 md:py-16 prose prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  )
}