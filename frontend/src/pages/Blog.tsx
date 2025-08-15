import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

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
    const fetchIndex = async () => {
      try {
        const res = await fetch('/content/posts/index.json')
        if (res.ok) {
          const data = (await res.json()) as PostMeta[]
          setPosts(
            data.sort((a, b) => (new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()))
          )
          return
        }
      } catch {}
      setPosts([])
    }
    fetchIndex()
  }, [])

  return (
    <section className="container-max py-10 md:py-16">
      <h2 className="font-display text-2xl md:text-3xl mb-6">Blog</h2>
      {posts.length === 0 ? (
        <div className="text-white/70">No posts yet. Add markdown files in public/content/posts.</div>
      ) : (
        <ul className="grid gap-4">
          {posts.map((p) => (
            <li key={p.slug} className="border border-dojo-neon/30 rounded p-4">
              <Link className="text-dojo-teal hover:underline text-lg" to={`/blog/${p.slug}`}>
                {p.title}
              </Link>
              <div className="text-xs text-white/50 mt-1">
                {p.author ? <span>By {p.author}</span> : null}
                {p.author && p.date ? <span> • </span> : null}
                {p.date ? <span>{dayjs(p.date).format('MMM D, YYYY')}</span> : null}
              </div>
              {p.tags && p.tags.length > 0 ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wide px-2 py-0.5 border border-dojo-neon/30 rounded">{t}</span>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}