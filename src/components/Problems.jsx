import Kicker from './Kicker';

const PIECES = ['Customer app', 'Chef app', 'Order management', 'Location', 'Payments', 'Delivery', 'Verification', 'Notifications', 'Admin systems'];

export default function Problems() {
  return (
    <section className="border-t border-divider bg-surface [perspective:1500px]">
      <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10">
        <Kicker n="02">Approach</Kicker>
        <h2 data-reveal data-tilt="6"
            className="mb-11 max-w-[16ch] font-heading text-[clamp(30px,3.8vw,54px)] font-normal leading-[1.06] tracking-tight [transform-style:preserve-3d]">
          We don't just build features. <span className="text-accent-700">We solve problems.</span>
        </h2>
        <div className="grid items-start gap-14 md:grid-cols-[.9fr_1.1fr]">
          <div data-reveal>
            <p className="mb-5 font-heading text-[27px] italic leading-[1.25]">
              "How do you connect customers with local home chefs?"
            </p>
            <p className="text-[14.5px] leading-[1.75] text-ink/75">
              A question like this is not a screen. It is a two-sided marketplace with verification,
              location, ordering, payouts and operations behind it. We start by mapping the system,
              then design and build every part of it.
            </p>
          </div>
          <div data-reveal data-tilt="9"
               className="grid grid-cols-2 gap-px border border-divider bg-divider sm:grid-cols-3 [transform-style:preserve-3d]">
            {PIECES.map((p, i) => (
              <div key={p}
                   className={`bg-surface px-4 py-5 text-xs uppercase tracking-[0.1em] ${i === PIECES.length - 1 ? 'text-accent-700' : 'text-ink/70'}`}>
                {p}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-11 flex flex-wrap items-center gap-4 font-heading text-lg tracking-wide" data-reveal>
          <span>Problem</span><span className="h-px w-10 bg-accent" />
          <span>Architecture</span><span className="h-px w-10 bg-accent" />
          <span className="text-accent-700">Product</span>
        </div>
      </div>
    </section>
  );
}
