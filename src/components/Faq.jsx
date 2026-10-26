import { faqs } from '../data/content';
import Kicker from './Kicker';

export default function Faq() {
  return (
    <section id="faq" className="border-t border-divider bg-surface">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-24 md:grid-cols-[.8fr_1.2fr] md:px-10">
        <div>
          <Kicker n="06">FAQ</Kicker>
          <h2 className="font-heading text-[clamp(28px,3.4vw,48px)] font-normal leading-[1.1] tracking-tight">
            Questions clients ask first.
          </h2>
        </div>
        <div className="border-t border-divider">
          {faqs.map(([q, a]) => (
            <details key={q} className="group border-b border-divider">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-heading text-[19px] font-semibold [&::-webkit-details-marker]:hidden">
                {q}
                <span className="font-body text-[26px] font-normal leading-none text-accent transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-[60ch] pb-6 text-[14.5px] leading-[1.75] text-ink/75">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
