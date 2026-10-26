import { contact } from '../data/projects';
import Kicker from './Kicker';
import InquiryForm from './InquiryForm';

const waLink = (phoneHref) => `https://wa.me/${phoneHref.replace(/\D/g, '')}`;

export default function Contact() {
  return (
    <section id="contact" className="border-t border-divider [perspective:1400px]">
      <div className="mx-auto max-w-[1240px] px-6 pb-28 pt-24 md:px-10 [transform-style:preserve-3d]">
        <Kicker n="07" className="mb-16">Contact</Kicker>
        <div className="text-center">
          <h2 data-reveal data-tilt="6"
              className="mb-6 font-heading text-[clamp(34px,5vw,76px)] font-normal leading-[1.04] tracking-tight [transform-style:preserve-3d]">
            Have a problem worth solving?
          </h2>
          <p data-reveal className="mx-auto mb-9 max-w-[46ch] text-[16.5px] leading-[1.7] text-ink/75">
            Tell us what you're building. We'll help turn the idea into a real product.
          </p>
          <div data-reveal className="flex flex-wrap justify-center gap-3">
            <a href="#inquiry" className="btn btn-primary px-7 py-3 text-[15px]">Start a conversation</a>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-secondary px-7 py-3 text-[15px]">WhatsApp</a>
          </div>
          <a href={`mailto:${contact.email}`}
             className="mt-6 inline-block border-b border-accent pb-0.5 text-[14.5px] text-ink no-underline hover:text-accent-700">
            {contact.email}
          </a>
        </div>

        <InquiryForm />

        <div data-reveal className="mx-auto mt-14 grid max-w-[760px] border-l border-t border-divider sm:grid-cols-2">
          {contact.people.map((person) => (
            <div key={person.phoneHref} className="border-b border-r border-divider px-7 py-7 text-left">
              <div className="kicker mb-2">Talk to</div>
              <h3 className="mb-4 font-heading text-2xl font-semibold">{person.name}</h3>
              <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[14.5px]">
                <li>
                  <a href={person.phoneHref} className="text-ink no-underline tabular-nums hover:text-accent-700">
                    <span className="mr-3 inline-block w-[78px] text-[10.5px] uppercase tracking-[0.14em] text-ink/50">Call</span>
                    {person.phone}
                  </a>
                </li>
                <li>
                  <a href={waLink(person.phoneHref)} target="_blank" rel="noopener noreferrer" className="text-ink no-underline hover:text-accent-700">
                    <span className="mr-3 inline-block w-[78px] text-[10.5px] uppercase tracking-[0.14em] text-ink/50">WhatsApp</span>
                    Message
                  </a>
                </li>
                {person.email && (
                  <li>
                    <a href={`mailto:${person.email}`} className="break-all text-ink no-underline hover:text-accent-700">
                      <span className="mr-3 inline-block w-[78px] text-[10.5px] uppercase tracking-[0.14em] text-ink/50">Email</span>
                      {person.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
