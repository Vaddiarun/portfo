import Orrery from './Orrery';

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
        <p className="mb-8 max-w-[52ch] text-base leading-[1.75] text-ink/80 [hyphens:auto] [text-align:justify]">
          We are a nine-person product engineering team combining design, development, testing and
          DevOps to build real-world applications, websites and SaaS platforms.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#work" className="btn btn-primary px-6 py-3 text-sm">View our work</a>
          <a href="#contact" className="btn btn-secondary px-6 py-3 text-sm">Let's build something</a>
        </div>
      </div>
      <Orrery />
    </section>
  );
}
