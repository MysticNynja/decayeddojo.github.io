// src/pages/Home.tsx
export default function Home() {
  return (
    <main className="bg-brand-bg text-brand-text font-press-start min-h-screen px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl text-brand-accent drop-shadow-md">Decayed Dojo</h1>
        <p className="mt-4 text-sm text-brand-accent-alt">Where retro warriors stream, blog, and battle bugs</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-brand-border p-4 rounded bg-[#1a1a1a]">
          <h2 className="text-lg text-brand-accent mb-2">📝 Latest Blog Posts</h2>
          <ul className="list-disc list-inside text-sm">
            <li>“Debugging Like a Ninja”</li>
            <li>“Pixel-perfect TinaCMS Setup”</li>
            <li>“Streamer Spotlight: SxySamurai”</li>
          </ul>
        </div>

        <div className="border border-brand-border p-4 rounded bg-[#1a1a1a]">
          <h2 className="text-lg text-brand-accent mb-2">🎥 Featured Streamers</h2>
          <ul className="list-disc list-inside text-sm">
            <li>SxySamurai – Arcade Brawler</li>
            <li>MysticNynja – Stealth Strategist</li>
          </ul>
        </div>
      </section>

      <footer className="mt-12 text-center text-xs text-[#888]">
        <p>Powered by TinaCMS · Built with React + Tailwind · © 2025 Decayed Dojo</p>
      </footer>
    </main>
  );
}