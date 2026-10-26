import Kicker from './Kicker';

const STAGES = [
  ['01', 'Discover', 'Understand the business, users and problem.'],
  ['02', 'Define', 'Turn requirements into a clear product strategy.'],
  ['03', 'Design', 'Create flows, wireframes and production-ready UI.'],
  ['04', 'Build', 'Develop frontend, backend, mobile applications and integrations.'],
  ['05', 'Test', 'Validate functionality, performance and edge cases.'],
  ['06', 'Deploy', 'Move the product into production with proper infrastructure.'],
  ['07', 'Improve', 'Monitor, iterate and continuously improve the product.'],
];

export default function Process() {
  return (
    <section id="process" className="border-t border-divider bg-surface [perspective:1600px]">
      <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10">
        <Kicker n="04">Process</Kicker>
        <h2 className="mb-12 font-heading text-[clamp(28px,3.4vw,48px)] font-normal leading-[1.1] tracking-tight">
          From idea to production.
        </h2>
        <ol data-tilt="8" className="m-0 list-none border-t border-divider p-0 [transform-style:preserve-3d]">
          {STAGES.map(([n, title, body]) => (
            <li key={n} data-reveal
                className="grid items-baseline gap-6 border-b border-divider py-6 transition-[padding] duration-300 hover:pl-3.5 md:grid-cols-[90px_220px_1fr]">
              <span className="font-heading text-3xl text-accent tabular-nums">{n}</span>
              <h3 className="font-heading text-[22px] font-semibold">{title}</h3>
              <p className="text-[14.5px] leading-[1.7] text-ink/75">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
