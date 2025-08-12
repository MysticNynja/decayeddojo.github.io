import React from 'react'
import { Link } from 'react-router-dom'

export const Home: React.FC = () => {
  return (
    <section className="container-max py-10 md:py-16">
      <div className="text-center space-y-6">
        <h1 className="font-display text-3xl md:text-5xl text-dojo-neon">Not Old, Just Old School</h1>
        <p className="text-dojo-ice/80 max-w-2xl mx-auto">
          Retro Japanese vibes for modern gaming culture. Home to streamers SxySamurai and MysticNynja.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link className="neon-btn" to="/blog">Read the Blog</Link>
          <Link className="neon-btn" to="/streams">Watch Streams</Link>
        </div>
      </div>
    </section>
  )
}