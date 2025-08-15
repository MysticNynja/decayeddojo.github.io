import React from 'react'

// Redirect to Tina's own Admin page (no iframe)
export const Admin: React.FC = () => {
  React.useEffect(() => {
    const url = 'http://localhost:4001/admin'
    // Attempt redirect immediately
    window.location.replace(url)
  }, [])

  return (
    <section className="container-max py-10 md:py-16">
      <h1 className="font-display text-2xl md:text-3xl text-dojo-neon">Opening Tina Admin…</h1>
      <p className="text-white/70 mt-4">If you are not redirected automatically, click the button below:</p>
      <a className="neon-btn mt-4 inline-block" href="http://localhost:4001/admin">Go to Tina Admin</a>
      <p className="text-white/50 text-sm mt-6">Note: Run Tina server with <code>yarn tinadev</code> or <code>yarn dev:cms</code>.</p>
    </section>
  )
}