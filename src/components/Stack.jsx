import { stack } from '../data/content';

export default function Stack() {
  return (
    <div data-reveal className="mt-14">
      <h3 className="mb-5 font-heading text-[15px] font-semibold uppercase tracking-[0.1em] text-ink/60">Tools we build with</h3>
      <dl className="m-0 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map(([group, tools]) => (
          <div key={group}>
            <dt className="kicker mb-2">{group}</dt>
            <dd className="m-0 flex flex-wrap gap-2">
              {tools.map((t) => <span key={t} className="tag border border-divider text-ink/80">{t}</span>)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
