import React from 'react'

export const Store: React.FC = () => {
  return (
    <section className="container-max py-10 md:py-16 space-y-6">
      <h2 className="font-display text-2xl md:text-3xl">Store</h2>
      <p>Store coming soon. Placeholder links will be added.</p>
      <div className="flex gap-4">
        <a className="neon-btn" href="#">Shopify (coming soon)</a>
        <a className="neon-btn" href="#">Teespring (coming soon)</a>
      </div>
    </section>
  )
}