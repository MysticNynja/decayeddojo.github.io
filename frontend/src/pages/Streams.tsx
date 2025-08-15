import React from 'react'

export const Streams: React.FC = () => {
  return (
    <section className="container-max py-10 md:py-16 space-y-6">
      <h2 className="font-display text-2xl md:text-3xl">Streams</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="aspect-video w-full border border-dojo-neon/30 rounded overflow-hidden">
          <iframe className="w-full h-full" src="https://player.twitch.tv/?channel=placeholder&parent=localhost" allowFullScreen></iframe>
        </div>
        <div className="aspect-video w-full border border-dojo-neon/30 rounded overflow-hidden">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/live_stream?channel=PLACEHOLDER" allowFullScreen></iframe>
        </div>
      </div>
      <p className="text-sm text-white/60">Replace placeholders with your channel IDs later.</p>
    </section>
  )
}