import { brand } from '../data/content';

/** Logo mark + brand name, with the accent half of the name in gold. */
export default function Wordmark({ size = 'text-[22px]', mark = 'h-9 w-9', className = '' }) {
  return (
    <a href="#top" aria-label={`${brand.name} — home`}
       className={`flex items-center gap-2.5 font-heading font-semibold tracking-[0.01em] text-ink no-underline ${size} ${className}`}>
      <img src="/logo-mark.svg" alt="" className={mark} />
      <span className="leading-none">
        {brand.lead}<span className="text-accent [text-shadow:0_0_.5px_currentColor]">{brand.accent}</span>
      </span>
    </a>
  );
}
