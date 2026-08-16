import { contact } from '../data/projects';

const LINKS = [['#work', 'Work'], ['#capabilities', 'Capabilities'], ['#process', 'Process'], ['#contact', 'Contact']];

export default function Footer() {
  return (
    <footer className="border-t border-divider">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-7 px-6 py-8 md:px-10">
        <span className="mr-auto font-heading text-base font-semibold">
          Arun<span className="text-accent"> / </span>Studio
        </span>
        {LINKS.map(([href, label]) => (
          <a key={href} href={href} className="text-[12.5px] text-ink no-underline hover:text-accent">{label}</a>
        ))}
        <a href={`mailto:${contact.email}`} className="text-[12.5px] text-ink no-underline hover:text-accent">{contact.email}</a>
        <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[12.5px] text-ink no-underline hover:text-accent">WhatsApp</a>
        <span className="text-[11.5px] text-ink/55">© {new Date().getFullYear()} Arun / Studio</span>
      </div>
    </footer>
  );
}
