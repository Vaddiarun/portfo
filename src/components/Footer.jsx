import { contact } from '../data/projects';

const LINKS = [['#work', 'Work'], ['#capabilities', 'Capabilities'], ['#process', 'Process'], ['#contact', 'Contact']];

export default function Footer() {
  return (
    <footer className="border-t border-divider">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-6 py-9 md:flex-row md:items-center md:gap-7 md:px-10">
        <a href="#top" className="flex items-center gap-2.5 font-heading text-base font-semibold text-ink no-underline md:mr-auto">
          <img src="/logo-mark.svg" alt="" className="h-7 w-7" />
          Chinna Rayudu<span className="text-accent"> / </span>Studio
        </a>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className="text-[12.5px] text-ink no-underline hover:text-accent">{label}</a>
          ))}
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[12.5px] text-ink no-underline hover:text-accent">WhatsApp</a>
        </nav>
      </div>
      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3 border-t border-divider px-6 py-5 md:px-10">
        <a href={`mailto:${contact.email}`} className="text-[12.5px] text-ink/70 no-underline hover:text-accent">{contact.email}</a>
        <span className="text-[11.5px] text-ink/55">© {new Date().getFullYear()} Chinna Rayudu / Studio</span>
      </div>
    </footer>
  );
}
