// Add a project by appending an object here — nothing else needs to change.
export const projects = [
  {
    id: 'gohomeyy-customer',
    index: '01',
    name: 'Gohomeyy',
    category: 'Food tech · Marketplace · Mobile application',
    description:
      'Gohomeyy connects customers with home chefs cooking nearby. Customers discover chefs around them, browse dishes, order home-cooked meals and instant items, subscribe to meal plans and explore chef specialties.',
    problem:
      'How can customers discover and order trustworthy home-cooked food from nearby chefs?',
    solution:
      'A digital marketplace connecting customers with home chefs, meal plans and food offerings.',
    tags: [
      'Food discovery', 'Ordering', 'Meal subscriptions',
      'Location-based discovery', 'Real-time order workflows', 'Backend services',
    ],
    platforms: ['Android', 'iOS'],
    screenshots: [
      { src: '/work/customer-1.png', alt: 'Gohomeyy: one app, three experiences' },
      { src: '/work/customer-2.png', alt: 'Gohomeyy: nearby chefs on a map with dish listings' },
      { src: '/work/customer-3.png', alt: 'Gohomeyy: today\u2019s specials with limited slots' },
      { src: '/work/customer-4.png', alt: 'Gohomeyy: live order tracking' },
    ],
    links: { googlePlay: 'https://play.google.com/store/apps/details?id=com.gohomeyy.customer' },
    mediaFirst: false,
  },
  {
    id: 'gohomeyy-cook-and-earn',
    index: '02',
    name: 'GoHomeyy: Cook & Earn',
    category: 'Food tech · Partner platform · Mobile application',
    description:
      'The partner application for GoHomeyy home chefs and kitchen partners. Partners receive and manage meal orders, manage kitchen details, menu availability and hygiene certifications, complete identity and food-safety verification, upload kitchen and meal photos, track earnings, receive payouts and run their operational workflow.',
    note: {
      title: 'Why it matters',
      body: 'Two connected applications around one business ecosystem — evidence that the team builds multi-sided platforms, not isolated apps.',
    },
    tags: [],
    platforms: ['Android', 'iOS'],
    screenshots: [
      { src: '/work/partner-1.png', alt: 'Cook & Earn: home-cooked, reimagined' },
      { src: '/work/partner-2.png', alt: 'Cook & Earn: chef discovery map' },
      { src: '/work/partner-3.png', alt: 'Cook & Earn: today\u2019s menu with reservable meals' },
      { src: '/work/partner-4.png', alt: 'Cook & Earn: chef verification and secure payments' },
    ],
    links: { googlePlay: 'https://play.google.com/store/apps/details?id=com.gohomeyy.cookandearn' },
    mediaFirst: true,
  },
];

export const contact = {
  email: 'arunsvaddi@gmail.com',
  phone: '+91 79897 59695',
  phoneHref: 'tel:+917989759695',
  whatsapp: 'https://wa.me/917989759695',
};
