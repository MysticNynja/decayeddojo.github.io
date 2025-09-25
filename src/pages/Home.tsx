// src/pages/Home.tsx
export default function Home() {
  return (
    <main className="bg-brand-bg text-brand-text font-press-start min-h-screen">
      <header className="text-center py-8 border-b-4 border-brand-border">
        <h1 className="text-5xl text-brand-accent drop-shadow-md">Decayed Dojo</h1>
        <p className="mt-4 text-md text-brand-accent-alt">Where retro warriors stream, blog, and battle bugs</p>
      </header>

      {/* Hero Section */}
      <section className="text-center my-12 px-4">
        <h2 className="text-3xl text-brand-accent-alt mb-4">The Digital Scroll of Lost Arts</h2>
        <p className="max-w-3xl mx-auto text-sm leading-loose">
          In the neon-drenched alleys of the internet, a forgotten dojo stands. Here, streamers and bloggers unearth forbidden techniques, debug ancient code, and master the art of retro gaming. This is not just a blog; it's a training ground.
        </p>
      </section>

      {/* Featured Stories */}
      <section className="px-4 md:px-8 my-16">
        <h2 className="text-2xl text-brand-accent mb-8 border-b-2 border-brand-border pb-2">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border-2 border-brand-border p-4 bg-[#1a1a1a] hover:border-brand-accent-alt transition-all duration-150">
            <h3 className="text-lg text-brand-accent mb-2">Debugging Like a Ninja</h3>
            <p className="text-sm">Vanish bugs from your codebase with stealth and precision. A guide to silent, deadly debugging.</p>
          </div>
          {/* Card 2 */}
          <div className="border-2 border-brand-border p-4 bg-[#1a1a1a] hover:border-brand-accent-alt transition-all duration-150">
            <h3 className="text-lg text-brand-accent mb-2">Pixel-perfect TinaCMS Setup</h3>
            <p className="text-sm">Integrate TinaCMS into your retro-themed site without breaking the aesthetic. A step-by-step tutorial.</p>
          </div>
          {/* Card 3 */}
          <div className="border-2 border-brand-border p-4 bg-[#1a1a1a] hover:border-brand-accent-alt transition-all duration-150">
            <h3 className="text-lg text-brand-accent mb-2">Streamer Spotlight: SxySamurai</h3>
            <p className="text-sm">Meet the arcade brawler who dominates the leaderboards with old-school cool.</p>
          </div>
        </div>
      </section>

      {/* Latest Articles & Streamers */}
      <section className="px-4 md:px-8 my-16">
        <h2 className="text-2xl text-brand-accent mb-8 border-b-2 border-brand-border pb-2">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="border-b-2 border-brand-border pb-4">
            <h3 className="text-lg text-brand-accent-alt">MysticNynja's Stealth Strategies</h3>
            <p className="text-sm mt-2">How to outsmart your opponents in classic stealth games.</p>
          </div>
          <div className="border-b-2 border-brand-border pb-4">
            <h3 className="text-lg text-brand-accent-alt">The Philosophy of 1-Credit Clears</h3>
            <p className="text-sm mt-2">A deep dive into the mindset required for arcade perfection.</p>
          </div>
          <div className="border-b-2 border-brand-border pb-4">
            <h3 className="text-lg text-brand-accent-alt">Hardware Mods for Retro Consoles</h3>
            <p className="text-sm mt-2">Bringing your classic hardware into the modern streaming era.</p>
          </div>
          <div className="border-b-2 border-brand-border pb-4">
            <h3 className="text-lg text-brand-accent-alt">Top 5 Obscure SNES Gems</h3>
            <p className="text-sm mt-2">You've played Chrono Trigger. Now try these hidden masterpieces.</p>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-[#1a1a1a] text-center py-12 my-16 border-y-4 border-brand-border">
        <h2 className="text-2xl text-brand-accent">Enter the Dojo</h2>
        <p className="mt-4 mb-6 text-sm">Subscribe to our newsletter for the latest dispatches from the digital frontier.</p>
        <div className="flex justify-center">
          <input type="email" placeholder="your-email@domain.com" className="bg-[#0f0f0f] border-2 border-brand-border text-brand-text px-4 py-2 w-full max-w-xs focus:outline-none focus:border-brand-accent-alt" />
          <button className="bg-brand-accent hover:bg-brand-accent-alt text-brand-bg font-bold py-2 px-6 border-2 border-brand-border hover:border-brand-accent-alt">
            Subscribe
          </button>
        </div>
      </section>

      <footer className="mt-12 text-center text-xs text-[#888] pb-8">
        <p>Powered by TinaCMS · Built with React + Tailwind · © 2025 Decayed Dojo</p>
      </footer>
    </main>
  );
}