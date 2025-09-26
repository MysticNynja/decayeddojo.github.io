import { Link } from 'react-router-dom';

function StatusBadge({ status }: { status: string }) {
  const isLive = status === "Live";
  const isPreRecorded = status === "Pre-recorded";

  const baseClasses = "px-3 py-1 rounded-pixel shadow-pixel font-bold";
  const liveClasses = "bg-brand-accent-alt text-brand-bg animate-pulse-glow";
  const preRecordedClasses = "bg-brand-muted text-brand-bg";
  const offlineClasses = "bg-[#333] text-brand-muted opacity-50";

  const statusClass = isLive ? liveClasses
    : isPreRecorded ? preRecordedClasses
    : offlineClasses;

  return (
    <div className={`${baseClasses} ${statusClass}`}>
      {status}
    </div>
  );
}

export default function Navbar({ status = "Pre-recorded" }) {
  return (
    <>
    <nav className="hidden lg:grid grid-cols-3 items-center px-12 py-6 bg-brand-bg border-b-4 border-brand-border shadow-pixel font-press-start text-xs uppercase tracking-wider">
      
      {/* Left */}
      <div className="text-left">
        <div className="text-brand-accent text-lg font-bold leading-none">
          Decayed Dojo
        </div>
        <div className="text-brand-accent-alt text-[0.6rem] mt-1 leading-snug">
          Retro Roots. Modern Mayhem.
        </div>
      </div>

      {/* Center */}
      <ul className="flex justify-center gap-8 text-brand-muted">
        {[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Streams', href: '/streams' },
          { label: 'VODs', href: '/vods' },
        ].map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="hover:text-brand-accent-alt transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px]"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right */}
      <div className="justify-self-end">
        <StatusBadge status={status} />
      </div>
    </nav>

    <nav className="lg:hidden px-4 py-4 bg-brand-bg border-b-4 border-brand-border shadow-pixel font-press-start text-xs uppercase tracking-wider flex flex-col gap-4">
        {/* Row 1: Logo + Status */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-1">
            <img src="/uploads/logo.png" alt="Decayed Dojo" className="h-16 w-auto" />
            <StatusBadge status={status} />
        </div>
        {/* Row 2: Nav Links */}
        <ul className="flex justify-center gap-6 text-brand-muted">
            {[ { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' }, 
                { label: 'Streams', href: '/streams' }, 
                { label: 'VODs', href: '/vods' }, 
            ].map(({ label, href }) => ( 
                <li key={label}> 
                    <Link to={href} className="hover:text-brand-accent-alt transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px]">
                        {label}
                    </Link>
                </li> 
            ))} 
        </ul> 
    </nav>
  </>
);
}
