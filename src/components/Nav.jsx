const links = [
  { href: '#work', label: 'Work' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#process', label: 'Process' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 flex items-center gap-8 border-b border-divider bg-bg/90 px-6 py-4 backdrop-blur md:px-10">
      <a href="#top" className="mr-auto font-heading text-lg font-semibold text-ink no-underline">
        Arun<span className="text-accent"> / </span>Studio
      </a>
      <nav className="hidden items-center gap-6 md:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-[13px] tracking-wide text-ink no-underline hover:text-accent">
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary text-[13px]">Start a conversation</a>
      </nav>
      <a href="#contact" className="btn btn-primary text-[13px] md:hidden">Contact</a>
    </header>
  );
}
