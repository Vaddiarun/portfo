import Kicker from './Kicker';
import Stack from './Stack';
import BuildAnything from './BuildAnything';

const CAPABILITIES = [
  ['01', 'UI/UX', 'Research, user flows, wireframes, visual systems and production-ready interfaces.'],
  ['02', 'Frontend', 'Responsive, performant web applications and complex interactive interfaces.'],
  ['03', 'Backend', 'APIs, business logic, databases, authentication and scalable architectures.'],
  ['04', 'Mobile', 'Production-ready Android and iOS applications and mobile-first experiences.'],
  ['05', 'QA', 'Functional testing, regression testing, edge cases and production validation.'],
  ['06', 'DevOps', 'Cloud infrastructure, CI/CD, deployment, monitoring and production environments.'],
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto max-w-[1240px] px-6 py-24 md:px-10">
      <Kicker n="01">Capabilities</Kicker>
      <h2 className="mb-3 max-w-[18ch] font-heading text-[clamp(28px,3.4vw,48px)] font-normal leading-[1.1] tracking-tight">
        Every discipline a product needs, under one roof.
      </h2>
      <p className="mb-14 max-w-[56ch] text-[15px] leading-[1.7] text-ink/55">
        Six disciplines, one delivery team — no handovers between agencies.
      </p>

      <div className="grid border-l border-t border-divider sm:grid-cols-2 lg:grid-cols-3 [perspective:1400px] [transform-style:preserve-3d]">
        {CAPABILITIES.map(([n, title, body]) => (
          <div key={n} data-reveal
               className="border-b border-r border-divider bg-bg px-7 py-8 transition-[transform,box-shadow,background] duration-500 hover:bg-accent/[0.07] hover:shadow-md hover:[transform:translateZ(38px)_rotateX(3deg)]">
            <div className="mb-3.5 flex items-baseline gap-2.5">
              <span className="text-[10px] tracking-[0.14em] text-accent tabular-nums">{n}</span>
              <h3 className="font-heading text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-sm leading-[1.7] text-ink/75">{body}</p>
          </div>
        ))}
      </div>

      <BuildAnything />
      <Stack />
    </section>
  );
}
