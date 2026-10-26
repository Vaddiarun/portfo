import { buildAnything } from '../data/content';

export default function BuildAnything() {
  return (
    <div data-reveal className="mt-14 grid items-center gap-8 border border-accent/60 bg-accent/[0.05] px-7 py-9 md:grid-cols-[1fr_1.4fr] md:px-10">
      <div>
        <h3 className="mb-3 font-heading text-[clamp(26px,2.6vw,36px)] font-normal leading-[1.1]">
          Have a requirement? <span className="text-accent-700">We'll build it.</span>
        </h3>
        <p className="mb-6 text-sm leading-[1.7] text-ink/70">
          If it runs on a phone, a browser or a server, we can design, build and ship it. Not on the list? Ask anyway.
        </p>
        <a href="#inquiry" className="btn btn-primary px-6 py-3 text-sm">Describe your requirement</a>
      </div>
      <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
        {buildAnything.map((item) => (
          <li key={item} className="tag tag-outline text-[12.5px]">{item}</li>
        ))}
      </ul>
    </div>
  );
}
