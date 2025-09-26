import BlogCard from '../components/BlogCard';

export default function Home() {
  return (
    <>
      <main className="bg-brand-bg text-brand-text font-press-start min-h-screen flex flex-col px-4 sm:px-6 lg:px-12 xl:px-20 max-w-screen-xl mx-auto">
        {/* Hero Section */}
        <section className="text-center my-12 px-4">
          <h2 className="text-hero text-brand-accent-alt mb-4 animate-pulse-glow border-4 border-brand-border shadow-pixel rounded-pixel px-4 py-2 inline-block">
            Stream State: Chaotic Good
          </h2>
          <p className="text-sm max-w-2xl mx-auto text-brand-muted">
            Where crafting gets weird, zombies get personal, and multiplayer mayhem never stops.
            We're not here to min-max—we're here to max-fun. Blog it. Vlog it. Respawn and repeat.
          </p>
        </section>

        {/* Featured Stories */}
        <section className="px-4 md:px-8 my-16">
          <h2 className="text-2xl text-brand-accent mb-8 border-b-4 border-brand-border pb-2 shadow-neon">
            Featured Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BlogCard
              title="The Unspoken Genius of Chrono Trigger's Battle System"
              author="SxySamurai"
              date="JAN 12"
              description="A deep dive into the Active Time Battle 2.0 and how it revolutionized RPG combat forever."
              image="https://placehold.co/800x400/111111/FF4081?text=Chrono+Trigger"
            />
            <BlogCard
              title="Why Your Favorite 90s Anime Still Holds Up"
              author="MysticNynja"
              date="JAN 10"
              description="From Cowboy Bebop to Evangelion, we explore the timeless themes and art that make 90s anime iconic."
              image="https://placehold.co/800x400/111111/FF4081?text=90s+Anime"
            />
          </div>
        </section>

        {/* Latest Articles */}
        <section className="px-4 md:px-8 my-16">
          <h2 className="text-2xl text-brand-accent mb-8 border-b-4 border-brand-border pb-2 shadow-neon">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                title: "MysticNynja's Stealth Strategies",
                desc: "How to outsmart your opponents in classic stealth games.",
              },
              {
                title: "The Philosophy of 1-Credit Clears",
                desc: "A deep dive into the mindset required for arcade perfection.",
              },
              {
                title: "Hardware Mods for Retro Consoles",
                desc: "Bringing your classic hardware into the modern streaming era.",
              },
              {
                title: "Top 5 Obscure SNES Gems",
                desc: "You've played Chrono Trigger. Now try these hidden masterpieces.",
              },
            ].map((article, i) => (
              <div key={i} className="border-b-4 border-brand-border pb-4 shadow-pixel">
                <h3 className="text-lg text-brand-accent-alt">{article.title}</h3>
                <p className="text-sm mt-2 text-brand-muted">{article.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="bg-[#1a1a1a] text-center py-12 my-16 border-y-4 border-brand-border shadow-pixel">
          <h2 className="text-2xl text-brand-accent shadow-neon">Enter the Dojo</h2>
          <p className="mt-4 mb-6 text-sm text-brand-muted">
            Subscribe to our newsletter for the latest dispatches from the digital frontier.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <input
              type="email"
              placeholder="your-email@domain.com"
              className="bg-brand-bg border-4 border-brand-border text-brand-text px-4 py-2 w-full max-w-xs focus:outline-none focus:border-brand-accent-alt rounded-pixel shadow-pixel"
            />
            <button className="bg-brand-accent text-brand-bg font-bold py-2 px-6 border-4 border-brand-border shadow-pixel rounded-pixel transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0_#444] animate-pulse-glow">
              Subscribe
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
