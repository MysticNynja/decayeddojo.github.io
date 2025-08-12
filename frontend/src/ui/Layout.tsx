import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'Blog' },
  { to: '/streams', label: 'Streams' },
  { to: '/store', label: 'Store' },
  { to: '/about', label: 'About' },
]

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-dojo-neon/30 bg-dojo-ink/70 backdrop-blur sticky top-0 z-10">
        <div className="container-max flex items-center justify-between py-4">
          <Link to="/" className="brand-title">Decayed Dojo</Link>
          <nav className="flex gap-4">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) => `neon-btn text-xs md:text-sm ${isActive ? 'bg-dojo-neon/20' : ''}`}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-dojo-neon/30 bg-dojo-ink/70">
        <div className="container-max py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Decayed Dojo</div>
          <a className="neon-btn" href="https://discord.gg/raZgP24FUN" target="_blank" rel="noreferrer">Join our Discord</a>
        </div>
      </footer>
    </div>
  )
}