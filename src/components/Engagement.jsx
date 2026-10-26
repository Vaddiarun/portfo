import { engagements, included } from '../data/content';
import Kicker from './Kicker';

export default function Engagement() {
  return (
    <section id="pricing" className="mx-auto max-w-[1240px] px-6 py-24 md:px-10">
      <Kicker n="05">Working with us</Kicker>
      <h2 className="mb-3 max-w-[20ch] font-heading text-[clamp(28px,3.4vw,48px)] font-normal leading-[1.1] tracking-tight">
        Three ways to work together.
      </h2>
      <p className="mb-14 max-w-[56ch] text-[15px] leading-[1.7] text-ink/55">
        Every engagement starts with a free call and a written estimate — you know the scope and price before work begins.
      </p>

      <div className="grid border-l border-t border-divider md:grid-cols-3">
        {engagements.map((e) => (
          <div key={e.title} data-reveal className="flex flex-col border-b border-r border-divider px-7 py-8">
            <h3 className="mb-2 font-heading text-2xl font-semibold">{e.title}</h3>
            {e.from && <div className="mb-2 font-heading text-lg text-accent-700">{e.from}</div>}
            <p className="mb-5 text-sm leading-[1.7] text-ink/70">{e.bestFor}</p>
            <ul className="m-0 mb-7 flex list-none flex-col gap-2.5 p-0 text-sm leading-[1.6]">
              {e.points.map((p) => (
                <li key={p} className="flex gap-2.5"><span className="text-accent">—</span>{p}</li>
              ))}
            </ul>
            <a href="#inquiry" className="btn btn-secondary mt-auto self-start px-5 py-2.5">Get an estimate</a>
          </div>
        ))}
      </div>

      <div data-reveal className="mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-3">
        <span className="kicker">Always included</span>
        {included.map((item) => (
          <span key={item} className="text-[14.5px]"><span className="mr-2 text-accent">✓</span>{item}</span>
        ))}
      </div>
    </section>
  );
}
