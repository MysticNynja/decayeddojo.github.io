export default function Footer() {
  return (
    <footer className="bg-brand-bg text-brand-muted text-center py-8 border-t-4 border-brand-border shadow-pixel">
      <nav className="mb-4 flex justify-center gap-6 text-xs uppercase tracking-wider">
        <a href="#" className="hover:text-brand-accent-alt transition">Home</a>
        <a href="#" className="hover:text-brand-accent-alt transition">Blog</a>
        <a href="#" className="hover:text-brand-accent-alt transition">Streams</a>
        <a href="#" className="hover:text-brand-accent-alt transition">VODs</a>
      </nav>
      <p className="text-xs">
        © 2025 Decayed Dojo — From zombie hordes to pixel forts, play what fuels you.
      </p>
    </footer>
  );
}
