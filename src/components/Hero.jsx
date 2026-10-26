import Orrery from './Orrery';

const STATS = [['9', 'Specialists'], ['4+', 'Years each'], ['2', 'Apps live']];

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid min-h-[74vh] max-w-[1240px] items-center gap-14 px-6 py-20 md:grid-cols-[1.05fr_.95fr] md:px-10">
      <div>
        <div className="mb-7 flex items-center gap-3">
          <span className="h-px w-11 bg-accent" />
          <span className="kicker">Product engineering studio</span>
        </div>
        <h1 className="mb-7 font-heading text-[clamp(42px,5.4vw,82px)] font-normal leading-[1.02] tracking-tight text-balance">
          We build digital products that solve real problems.
        </h1>
        <p className="mb-8 max-w-[52ch] text-base leading-[1.75] text-ink/80">
          We are a nine-person product engineering team combining design, development, testing and
          DevOps to build real-world applications, websites and SaaS platforms.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#work" className="btn btn-primary px-6 py-3 text-sm">View our work</a>
          <a href="#contact" className="btn btn-secondary px-6 py-3 text-sm">Let's build something</a>
        </div>
        <dl className="mt-12 grid max-w-[520px] grid-cols-3 border-t border-divider pt-6">
          {STATS.map(([value, label]) => (
            <div key={label} className="flex flex-col-reverse gap-2">
              <dt className="text-[10.5px] uppercase tracking-[0.14em] text-ink/55">{label}</dt>
              <dd className="m-0 font-heading text-[34px] leading-none text-accent-700 tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <Orrery />
    </section>
  );
}
