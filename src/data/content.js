// Copy for the stack, engagement, FAQ and inquiry sections — edit text here, not in components.

// Shown in the nav, footer and copyright. Also update <title> in index.html when this changes.
// `accent` is the part of the name drawn in gold.
export const brand = { name: 'Devorbit', lead: 'Dev', accent: 'orbit' };

export const availability = 'Available for new projects';

// Named members get an initials tile; the rest of `size` is shown as one "+N more" tile.
export const team = {
  size: 9,
  role: 'Full-stack engineer',
  members: [
    { name: 'Arun Kumar' },
    { name: 'Chinna Rayudu' },
  ],
};

export const buildAnything = [
  'Mobile apps', 'Websites', 'SaaS platforms', 'Admin dashboards', 'E-commerce',
  'Booking & scheduling', 'Marketplaces', 'Payments & wallets', 'APIs & integrations',
  'Internal tools', 'Automation', 'MVPs',
];

export const stack = [
  ['Mobile', ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit']],
  ['Web', ['React', 'Vite', 'Tailwind CSS', 'JavaScript']],
  ['Backend & data', ['REST APIs', 'Firebase', 'Firebase Auth / OTP']],
  ['Integrations', ['Razorpay payments', 'Google Maps & geolocation', 'Push notifications']],
  ['Delivery', ['Google Play', 'App Store', 'CI/CD', 'Cloud hosting']],
];

// Set `from` (e.g. 'From ₹50,000') to show a starting price on a card; leave null to hide it.
export const engagements = [
  {
    title: 'Fixed-scope project',
    from: null,
    bestFor: 'A defined product: MVP, mobile app, website or SaaS.',
    points: ['Scope, timeline and price agreed up front', 'Paid in milestones as work is delivered', 'Ends with launch and handover'],
  },
  {
    title: 'Dedicated team',
    from: null,
    bestFor: 'Ongoing product work without hiring in-house.',
    points: ['Designers, engineers and QA as your product team', 'Monthly billing, scale up or down', 'Works inside your roadmap and tools'],
  },
  {
    title: 'Support & improvements',
    from: null,
    bestFor: 'Products that are already live.',
    points: ['Bug fixes, updates and small features', 'Monitoring and store releases', 'Monthly plan or per task'],
  },
];

export const included = [
  'Weekly progress demo',
  'Full source code and ownership',
  'NDA on request',
  'Single point of contact',
];

export const faqs = [
  ['Who owns the code?', 'You do. On final payment you get the full source code, design files and accounts used for the product.'],
  ['Will you sign an NDA?', 'Yes. We can sign your NDA, or send ours, before you share any details about the idea.'],
  ['How much does a project cost?', 'It depends on scope. After a first call we send a written estimate with features, timeline and price, so you know the total before any work starts.'],
  ['How long does it take?', 'It depends on scope. The estimate breaks the work into milestones with dates, and you see progress in a demo every week.'],
  ['How do payments work?', 'Fixed-scope projects are paid in milestones: an advance to start, then a payment as each agreed milestone is delivered.'],
  ['What happens after launch?', 'We hand over the code and documentation, and can stay on through a support plan for fixes, updates and new features.'],
  ['Can you take over an existing project?', 'Yes. We start with a short review of the existing code and infrastructure, then tell you what we would keep, fix or rebuild.'],
  ['How do we communicate?', 'One point of contact on WhatsApp or email, plus a weekly demo call. You can reach the team directly whenever needed.'],
];

export const inquiry = {
  types: ['Mobile app', 'Website', 'SaaS / web platform', 'UI/UX design', 'Existing project / support', 'Other'],
  budgets: ['Under ₹1 lakh', '₹1–3 lakh', '₹3–10 lakh', '₹10 lakh+', 'Not sure yet'],
  timelines: ['As soon as possible', 'Within 1–3 months', '3+ months', 'Just exploring'],
};
