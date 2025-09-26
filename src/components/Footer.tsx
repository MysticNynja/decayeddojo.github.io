import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-bg text-brand-muted text-center py-8 border-t-4 border-brand-border shadow-pixel">
      <nav className="mb-4 flex justify-center gap-6 text-xs uppercase tracking-wider">
        <Link to="/" className="hover:text-brand-accent-alt transition">Home</Link>
        <Link to="/blog" className="hover:text-brand-accent-alt transition">Blog</Link>
        <Link to="/streams" className="hover:text-brand-accent-alt transition">Streams</Link>
        <Link to="/vods" className="hover:text-brand-accent-alt transition">VODs</Link>
      </nav>
      <p className="text-xs">
        © 2025 Decayed Dojo — From zombie hordes to pixel forts, play what fuels you.
      </p>
    </footer>
  );
}
