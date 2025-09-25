// src/pages/Home.tsx
export default function Home() {
  return (
    <main className="bg-brand-bg text-brand-text font-press-start min-h-screen">
      <header className="text-center py-8 border-b-4 border-brand-border">
        <h1 className="text-5xl text-brand-accent drop-shadow-md">Decayed Dojo</h1>
        <p className="mt-4 text-md text-brand-accent-alt">Not old, but old school</p>
      </header>

      {/* Hero Section */}
      <section className="text-center my-12 px-4">
        <h2 className="text-3xl text-brand-accent-alt mb-4">The Digital Scroll of Lost Arts</h2>
      </section>

      {/* Featured Stories */}
      <section className="px-4 md:px-8 my-16">
        <h2 className="text-2xl text-brand-accent mb-8 border-b-2 border-brand-border pb-2">Featured Stories</h2>
        <div className="space-y-12">
          {/* Card 1 */}
          <div className="bg-[#1a1a1a] border-2 border-brand-border flex">
            <div className="w-1/3 bg-brand-border flex items-center justify-center">
              <span className="text-brand-accent-alt text-lg">IMAGE</span>
            </div>
            <div className="w-2/3 p-6 relative">
              <h3 className="text-xl text-brand-accent mb-2">The Unspoken Genius of Chrono Trigger's Battle System</h3>
              <div className="flex items-center text-xs mb-4">
                <span className="text-brand-accent-alt mr-4">JAN 12</span>
                <span>by SxySamurai</span>
              </div>
              <p className="text-sm mb-6">A deep dive into the Active Time Battle 2.0 and how it revolutionized RPG combat forever.</p>
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button className="text-xs bg-brand-accent hover:bg-brand-accent-alt text-brand-bg font-bold py-1 px-2">READ</button>
                <button className="text-xs bg-brand-border hover:bg-brand-accent-alt py-1 px-2">LIKE</button>
                <button className="text-xs bg-brand-border hover:bg-brand-accent-alt py-1 px-2">SHARE</button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#1a1a1a] border-2 border-brand-border flex">
            <div className="w-1/3 bg-brand-border flex items-center justify-center">
              <span className="text-brand-accent-alt text-lg">IMAGE</span>
            </div>
            <div className="w-2/3 p-6 relative">
              <h3 className="text-xl text-brand-accent mb-2">Why Your Favorite 90s Anime Still Holds Up</h3>
              <div className="flex items-center text-xs mb-4">
                <span className="text-brand-accent-alt mr-4">JAN 10</span>
                <span>by MysticNynja</span>
              </div>
              <p className="text-sm mb-6">From Cowboy Bebop to Evangelion, we explore the timeless themes and art that make 90s anime iconic.</p>
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button className="text-xs bg-brand-accent hover:bg-brand-accent-alt text-brand-bg font-bold py-1 px-2">READ</button>
                <button className="text-xs bg-brand-border hover:bg-brand-accent-alt py-1 px-2">LIKE</button>
                <button className="text-xs bg-brand-border hover:bg-brand-accent-alt py-1 px-2">SHARE</button>
              </div>
            </div>
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

    </main>
  );
}