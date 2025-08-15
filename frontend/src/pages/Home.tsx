import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import type { PostMeta } from './Blog'

export const Home: React.FC = () => {
  const [latest, setLatest] = useState<PostMeta[]>([])

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch('/content/posts/index.json?ts=' + Date.now())
        if (res.ok) {
          const data = (await res.json()) as PostMeta[]
          setLatest(data.slice(0, 3))
        }
      } catch {
        setLatest([])
      }
    }
    run()
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-max py-14 md:py-20 text-center">
          <div className="inline-block px-4 py-1 border border-dojo-neon/30 rounded mb-4 text-xs tracking-widest uppercase">道場 • Decayed Dojo</div>
          <h1 className="font-display text-3xl md:text-6xl text-dojo-neon drop-shadow-lg">Not Old, Just Old School</h1>
          <p className="max-w-2xl mx-auto mt-4 text-white/80">
            Retro Japanese vibes for modern gaming culture. Home to streamers <span className="text-dojo-teal">SxySamurai</span> and <span className="text-dojo-teal">MysticNynja</span>.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link className="neon-btn" to="/blog">Read the Blog</Link>
            <Link className="neon-btn" to="/streams">Watch Streams</Link>
            <a className="neon-btn" href="https://discord.gg/raZgP24FUN" target="_blank" rel="noreferrer">Join Discord</a>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="container-max py-10 md:py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl md:text-3xl">Latest Posts</h2>
          <Link to="/blog" className="neon-btn">View all</Link>
        </div>
        {latest.length === 0 ? (
          <div className="text-white/70">No posts yet. Add markdown files to public/content/posts.</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-4">
            {latest.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="border border-dojo-neon/30 rounded p-4 hover:bg-dojo-neon/10 transition">
                <div className="text-dojo-teal text-lg mb-1 line-clamp-2">{p.title}</div>
                <div className="text-xs text-white/50">{p.author} {p.date ? '• ' + dayjs(p.date).format('MMM D, YYYY') : ''}</div>
                {p.tags && p.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wide px-2 py-0.5 border border-dojo-neon/30 rounded">{t}</span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Streamers */}
      <section className="container-max py-10 md:py-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">Meet the Streamers</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'SxySamurai', desc: 'Arcade brawler specialist with high APM and style.' },
            { name: 'MysticNynja', desc: 'Stealthy strategist—clips for days.' },
            { name: 'DecayedDojo', desc: 'Dojo spirit—hosts, guides, and vibes.' },
          ].map((s) => (
            <div key={s.name} className="border border-dojo-neon/30 rounded p-4">
              <div className="font-display text-dojo-teal text-xl">{s.name}</div>
              <p className="text-white/70 text-sm mt-1">{s.desc}</p>
              <div className="mt-4 flex gap-2">
                <Link className="neon-btn" to="/streams">Watch</Link>
                <Link className="neon-btn" to="/about">About</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Streams Teaser */}
      <section className="container-max py-10 md:py-16">
        <div className="border border-dojo-neon/30 rounded p-6 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <h3 className="font-display text-xl md:text-2xl mb-2">Catch the Streams</h3>
            <p className="text-white/70">Live gameplay, retro challenges, and community hangs.</p>
          </div>
          <Link className="neon-btn" to="/streams">Go to Streams</Link>
        </div>
      </section>

      {/* Store Teaser */}
      <section className="container-max py-10 md:py-16">
        <div className="border border-dojo-neon/30 rounded p-6 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <h3 className="font-display text-xl md:text-2xl mb-2">Gear Up</h3>
            <p className="text-white/70">Merch dropping soon. Rep the Dojo with 80s neon vibes.</p>
          </div>
          <Link className="neon-btn" to="/store">Visit Store</Link>
        </div>
      </section>
    </>
  )
}