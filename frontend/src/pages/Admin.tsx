import React from 'react'

// Admin loader using Tina's dev server UI inside an iframe.
// Start both servers with: yarn dev:cms
// Tina GraphQL/Admin runs (by default) at http://localhost:4001/admin
export const Admin: React.FC = () => {
  const tinaUrl = 'http://localhost:4001/admin'
  return (
    <div className="min-h-screen bg-dojo-ink text-dojo-ice">
      <div className="container-max py-6 space-y-4">
        <h1 className="font-display text-2xl md:text-3xl text-dojo-neon">Tina Admin</h1>
        <p className="text-white/70 text-sm">If you do not see the editor below, open it directly in a new tab:</p>
        <p>
          <a className="neon-btn" href={tinaUrl} target="_blank" rel="noreferrer">Open Tina Admin</a>
        </p>
      </div>
      <div className="container-max pb-10">
        <div className="w-full h-[70vh] border border-dojo-neon/30 rounded overflow-hidden bg-black/40">
          <iframe title="Tina Admin" src={tinaUrl} className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}