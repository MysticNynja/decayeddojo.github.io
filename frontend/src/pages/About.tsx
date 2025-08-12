import React from 'react'

export const About: React.FC = () => {
  return (
    <section className="container-max py-10 md:py-16 space-y-8">
      <h2 className="font-display text-2xl md:text-3xl">About Decayed Dojo</h2>
      <p className="text-white/80">A retro Japanese feel, sleek and modern. Focused on video games, streams, and community.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: 'SxySamurai', bio: 'Arcade brawler specialist. High APM, higher style.' },
          { name: 'MysticNynja', bio: 'Stealth, speed, and strategy. Clips for days.' },
          { name: 'DecayedDojo', bio: 'The dojo spirit. Hosts, guides, and vibes.' },
        ].map((s) => (
          <div key={s.name} className="border border-dojo-neon/30 rounded p-4">
            <div className="font-display text-dojo-teal text-xl">{s.name}</div>
            <p className="text-white/70 text-sm mt-2">{s.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}