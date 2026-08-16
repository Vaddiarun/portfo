import { contact } from '../data/projects';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-divider [perspective:1400px]">
      <div className="mx-auto max-w-[1240px] px-6 py-28 text-center md:px-10 [transform-style:preserve-3d]">
        <h2 data-reveal data-tilt="6"
            className="mb-6 font-heading text-[clamp(34px,5vw,76px)] font-normal leading-[1.04] tracking-tight [transform-style:preserve-3d]">
          Have a problem worth solving?
        </h2>
        <p data-reveal className="mx-auto mb-9 max-w-[46ch] text-[16.5px] leading-[1.7] text-ink/75">
          Tell us what you're building. We'll help turn the idea into a real product.
        </p>
        <div data-reveal className="flex flex-wrap justify-center gap-3">
          <a href={`mailto:${contact.email}`} className="btn btn-primary px-7 py-3 text-[15px]">Start a conversation</a>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-secondary px-7 py-3 text-[15px]">WhatsApp</a>
        </div>
        <div className="mx-auto mt-10 flex max-w-[620px] flex-wrap justify-center gap-8 border-t border-divider pt-7">
          <a href={`mailto:${contact.email}`} className="border-b border-accent pb-0.5 text-[15px] text-ink no-underline hover:text-accent-700">{contact.email}</a>
          <a href={contact.phoneHref} className="border-b border-accent pb-0.5 text-[15px] text-ink no-underline tabular-nums hover:text-accent-700">{contact.phone}</a>
        </div>
      </div>
    </section>
  );
}
