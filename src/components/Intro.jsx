export default function Intro() {
  return (
    <section className="border-y border-divider [perspective:1400px]">
      <div className="mx-auto grid max-w-[1240px] items-start gap-16 px-6 py-20 md:grid-cols-[1.15fr_.85fr] md:px-10">
        <h2 data-reveal data-tilt="7"
            className="font-heading text-[clamp(32px,4vw,58px)] font-normal leading-[1.08] tracking-tight [transform-style:preserve-3d]">
          Nine people.<br />Four-plus years each.<br />
          <span className="text-accent-700">One complete product team.</span>
        </h2>
        <div data-reveal>
          <p className="mb-5 text-base leading-[1.8] [hyphens:auto] [text-align:justify]">
            From the first wireframe to production deployment, our team handles the complete product
            lifecycle. Designers, engineers, testers and DevOps specialists work as a single delivery
            unit rather than a chain of handovers.
          </p>
          <hr className="my-6 h-px border-0 bg-divider" />
          <p className="text-[14.5px] italic leading-[1.7] text-ink/70">
            Small enough to move fast. Experienced enough to build serious products.
          </p>
        </div>
      </div>
    </section>
  );
}
