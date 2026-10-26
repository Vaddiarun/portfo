import { contact } from '../data/projects';
import { brand } from '../data/content';
import Wordmark from './Wordmark';

const LINKS = [['#work', 'Work'], ['#capabilities', 'Capabilities'], ['#process', 'Process'], ['#pricing', 'Pricing'], ['#faq', 'FAQ'], ['#contact', 'Contact']];

export default function Footer() {
  return (
    <footer className="border-t border-divider">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-6 py-9 md:flex-row md:items-center md:gap-7 md:px-10">
        <Wordmark className="md:mr-auto" size="text-2xl" mark="h-10 w-10" />
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className="text-[12.5px] text-ink no-underline hover:text-accent">{label}</a>
          ))}
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[12.5px] text-ink no-underline hover:text-accent">WhatsApp</a>
        </nav>
      </div>
      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3 border-t border-divider px-6 py-5 md:px-10">
        <a href={`mailto:${contact.email}`} className="text-[12.5px] text-ink/70 no-underline hover:text-accent">{contact.email}</a>
        <span className="text-[11.5px] text-ink/55">© {new Date().getFullYear()} {brand.name}</span>
      </div>
    </footer>
  );
}
