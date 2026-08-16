import ScreenshotFan from './ScreenshotFan';

/** Renders any entry from src/data/projects.js — add data, not components. */
export default function Project({ project, last = false }) {
  const { index, name, category, description, problem, solution, note, tags, screenshots, links } = project;
  return (
    <article data-reveal className={`grid gap-0 ${last ? 'py-16' : 'border-b border-divider pb-16'}`}>
      <div>
        <div className="mb-4 flex flex-wrap items-baseline gap-3.5">
          <span className="font-heading text-[13px] tracking-[0.12em] text-accent tabular-nums">{index}</span>
          <span className="text-[10.5px] uppercase tracking-[0.14em] text-ink/55">{category}</span>
        </div>
        <h3 className="mb-6 font-heading text-[clamp(32px,4vw,56px)] font-normal leading-[1.04] tracking-tight">{name}</h3>
        <p className="mb-7 max-w-[60ch] text-[15.5px] leading-[1.78] [hyphens:auto] [text-align:justify]">{description}</p>

        {(problem || solution) && (
          <div className="grid gap-8 border-t border-divider pt-6 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 font-heading text-[15px] font-semibold">The problem</h4>
              <p className="text-[13.5px] leading-[1.7] text-ink/75">{problem}</p>
            </div>
            <div>
              <h4 className="mb-2 font-heading text-[15px] font-semibold">The solution</h4>
              <p className="text-[13.5px] leading-[1.7] text-ink/75">{solution}</p>
            </div>
          </div>
        )}

        {note && (
          <div className="mb-7 border-t border-divider pt-6">
            <h4 className="mb-2 font-heading text-[15px] font-semibold">{note.title}</h4>
            <p className="max-w-[60ch] text-[13.5px] leading-[1.7] text-ink/75">{note.body}</p>
          </div>
        )}

        {tags?.length > 0 && (
          <div className="my-7 flex flex-wrap gap-2">
            {tags.map((t) => <span key={t} className="tag tag-outline">{t}</span>)}
          </div>
        )}

        {links?.googlePlay && (
          <a href={links.googlePlay} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 text-sm">
            View project on Google Play →
          </a>
        )}
      </div>

      <ScreenshotFan shots={screenshots} />
    </article>
  );
}
