import { projects } from '../data/projects';
import Project from './Project';
import Ecosystem from './Ecosystem';
import Kicker from './Kicker';

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1240px] px-6 pb-10 pt-24 md:px-10">
      <Kicker n="03">Work</Kicker>
      <h2 className="mb-2 font-heading text-[clamp(28px,3.4vw,48px)] font-normal leading-[1.1] tracking-tight">Selected work</h2>
      <p className="mb-16 text-[15px] text-ink/55">Real products. Real problems. Real deployments.</p>

      {projects.map((p, i) => (
        <Project key={p.id} project={p} last={i === projects.length - 1} />
      ))}

      <Ecosystem />
    </section>
  );
}
