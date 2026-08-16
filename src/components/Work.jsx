import { projects } from '../data/projects';
import Project from './Project';
import Ecosystem from './Ecosystem';

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1240px] px-6 pb-10 pt-24 md:px-10">
      <div className="mb-11 flex items-baseline gap-4">
        <span className="kicker">04 — Selected work</span>
        <span className="h-px flex-1 bg-divider" />
      </div>
      <h2 className="mb-2 font-heading text-[clamp(28px,3.4vw,48px)] font-normal leading-[1.1] tracking-tight">Selected work</h2>
      <p className="mb-16 text-[15px] text-ink/55">Real products. Real problems. Real deployments.</p>

      {projects.map((p, i) => (
        <Project key={p.id} project={p} last={i === projects.length - 1} />
      ))}

      <Ecosystem />
    </section>
  );
}
