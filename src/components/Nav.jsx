import Wordmark from './Wordmark';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#process', label: 'Process' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 flex items-center gap-8 border-b border-divider bg-bg/90 px-6 py-3 backdrop-blur md:px-10">
      <Wordmark className="mr-auto" size="text-[28px]" mark="h-12 w-12" />
      <nav className="hidden items-center gap-6 md:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-[13px] tracking-wide text-ink no-underline hover:text-accent">
            {l.label}
          </a>
        ))}
        <a href="#inquiry" className="btn btn-primary text-[13px]">Get an estimate</a>
      </nav>
      <a href="#contact" className="btn btn-primary text-[13px] md:hidden">Contact</a>
    </header>
  );
}
