import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export type PostMeta = {
  slug: string
  title: string
  author?: string
  date?: string
  tags?: string[]
}

export const Blog: React.FC = () => {
  const [posts, setPosts] = useState<PostMeta[]>([])

  useEffect(() => {
    // For now, list posts by fetching an index.json generated at build time or fallback to static listing
    const fetchIndex = async () => {
      try {
        const res = await fetch('/content/posts/index.json')
        if (res.ok) {
          const data = await res.json()
          setPosts(data)
          return
        }
      } catch {}
      // fallback to a small hardcoded list if index missing
      setPosts([
        { slug: 'welcome', title: 'Welcome to Decayed Dojo', author: 'DecayedDojo' },
      ])
    }
    fetchIndex()
  }, [])

  return (
    <section className="container-max py-10 md:py-16">
      <h2 className="font-display text-2xl md:text-3xl mb-6">Blog</h2>
      <ul className="grid gap-4">
        {posts.map((p) => (
          <li key={p.slug} className="border border-dojo-neon/30 rounded p-4">
            <Link className="text-dojo-teal hover:underline" to={`/blog/${p.slug}`}>
              {p.title}
            </Link>
            {p.author && <div className="text-xs text-white/50 mt-1">By {p.author}</div>}
          </li>
        ))}
      </ul>
    </section>
  )
}