import { useState } from 'react';
import { contact } from '../data/projects';
import { inquiry } from '../data/content';

const field = 'w-full rounded border border-divider bg-bg px-3.5 py-2.5 text-[14.5px] text-ink outline-none transition-colors focus:border-accent';
const label = 'mb-1.5 block text-[10.5px] uppercase tracking-[0.14em] text-ink/60';

/** No backend: the brief is sent through the visitor's own WhatsApp or email app. */
export default function InquiryForm() {
  const [form, setForm] = useState({ name: '', reach: '', type: '', budget: '', timeline: '', details: '' });
  const [error, setError] = useState('');
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const brief = () => [
    'Hi, I would like an estimate for a project.',
    '',
    `Name: ${form.name}`,
    `Contact: ${form.reach}`,
    `Project type: ${form.type || '-'}`,
    `Budget: ${form.budget || '-'}`,
    `Timeline: ${form.timeline || '-'}`,
    '',
    form.details,
  ].join('\n');

  const send = (via) => (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.reach.trim() || !form.details.trim()) {
      setError('Please add your name, a way to reach you, and a few lines about the project.');
      return;
    }
    setError('');
    const text = encodeURIComponent(brief());
    const url = via === 'whatsapp'
      ? `${contact.whatsapp}?text=${text}`
      : `mailto:${contact.email}?subject=${encodeURIComponent(`Project inquiry: ${form.type || form.name}`)}&body=${text}`;
    window.open(url, via === 'whatsapp' ? '_blank' : '_self', 'noopener');
  };

  const select = (k, options, placeholder) => (
    <select value={form[k]} onChange={set(k)} className={field}>
      <option value="">{placeholder}</option>
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
  );

  return (
    <form id="inquiry" data-reveal noValidate onSubmit={send('whatsapp')}
          className="mx-auto mt-14 max-w-[760px] scroll-mt-24 border border-divider bg-surface px-6 py-8 text-left sm:px-9">
      <h3 className="mb-1 font-heading text-2xl font-semibold">Tell us about your project</h3>
      <p className="mb-7 text-sm text-ink/60">Takes a minute. We reply with next steps and, once we understand the scope, a written estimate.</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <label><span className={label}>Your name *</span><input value={form.name} onChange={set('name')} className={field} autoComplete="name" /></label>
        <label><span className={label}>Email or phone *</span><input value={form.reach} onChange={set('reach')} className={field} autoComplete="email" /></label>
        <label><span className={label}>Project type</span>{select('type', inquiry.types, 'Choose one')}</label>
        <label><span className={label}>Budget</span>{select('budget', inquiry.budgets, 'Choose a range')}</label>
        <label className="sm:col-span-2"><span className={label}>Timeline</span>{select('timeline', inquiry.timelines, 'When do you want to start?')}</label>
        <label className="sm:col-span-2">
          <span className={label}>What are you building? *</span>
          <textarea value={form.details} onChange={set('details')} rows={5} className={`${field} resize-y`}
                    placeholder="The problem, who it's for, and anything you already have (designs, an existing app, a deadline)." />
        </label>
      </div>

      {error && <p role="alert" className="mt-4 text-sm text-brand-orange">{error}</p>}

      <div className="mt-7 flex flex-wrap gap-3">
        <button type="submit" className="btn btn-primary bg-transparent px-6 py-3 text-[15px]">Send on WhatsApp</button>
        <button type="button" onClick={send('email')} className="btn btn-secondary bg-transparent px-6 py-3 text-[15px]">Send by email</button>
      </div>
    </form>
  );
}
