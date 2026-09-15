/**
 * The copy and imagery from the original Webflow export.
 *
 * This is what the site renders until a Sanity project id is set and content
 * is published. Keeping it here means `npm run dev` gives you the real design
 * on the first run, and it doubles as a reference for what each CMS field maps
 * to. Once Sanity is populated it takes over completely - see src/lib/content.js.
 */

export const fallbackSettings = {
  navLogo: '/images/Frame-2147228265.svg',
  navLinks: [
    { label: 'Browse templates', href: '/products' },
    { label: 'Customise', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Support', href: '#' },
  ],
  navButton: { label: 'Contact Now', href: '#' },

  heroTagText: 'Built by Experts.',
  heroTagAccent: 'Designed to Convert.',
  heroTagOffer: '20% OFF',
  heroHeadingLine1: 'Telehealth & Wellness',
  heroHeadingLine2: 'for ready to move',
  heroHeadingAccent: 'Agencies',
  heroSubtext:
    'Get a standout design without hiring a design agency and launch your new website super-fast',
  heroButtons: [
    { label: 'Browse  Templates', href: '/products', primary: false },
    { label: 'Pick & Customise', href: '#', primary: true },
  ],
  heroSocialProof: 'More than +100 founders Launched Brands',
  heroSocialProofImage: '/images/Frame-2147228259.webp',

  trustHeadingLine1: 'Trusted by top-tier agencies and',
  trustHeadingLine2: 'studios around the Globe',
  trustCaption: 'Helping Telehealth & Wellness Brands to Launch',

  testimonialHeadingLine1: 'Trusted by hundreds of',
  testimonialHeadingLine2: 'brands & founders',
  testimonialRating: { score: '5.0', count: '100+' },

  contactEyebrow: 'Get in Touch',
  contactHeading: 'Need a Custom Design?',
  contactBody:
    "If none of the plans suit your needs, simply share your project details — we'll get in touch and tailor a solution just for you.",
  contactButton: { label: 'Contact Us', href: '#' },

  launchHeading: 'Launch your First Telehealth Website Now!',
  launchButtons: [
    { label: 'Purchase Now', href: '#', primary: false },
    { label: 'Why Telephant ', href: '#', primary: true },
  ],

  footerLogo: '/images/Frame-1410085881.webp',
  footerBlurb:
    'Join our community for pioneering access to new releases and discounts.',
  footerColumns: [
    {
      title: 'SHOP',
      links: [
        { label: 'Single Templates', href: '/products' },
        { label: 'Collections', href: '#' },
        { label: 'Home', href: '/' },
      ],
    },
    {
      title: 'INFO',
      links: [
        { label: 'FAQs', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Affiliates', href: '#' },
        { label: 'License and Policies', href: '#' },
      ],
    },
    {
      title: 'SOCIAL',
      links: [
        { label: 'Instagram', href: '#' },
        { label: 'LinkedIn', href: '#' },
        { label: 'Twitter', href: '#' },
      ],
    },
  ],
  footerCompany: 'DStudio.Agency',
  footerEmail: 'hello@dstudio.agency',
  footerCopyright: 'DStudio Agency ® Copyright',
}

export const fallbackTestimonials = [
  {
    _id: 't1',
    quote: "We've partnered with Dstudio on multiple telehealth projects.",
    name: 'Amir Sigari',
    role: 'Marketing - Ellie MD ',
    verified: true,
    avatar: '/images/amir-sigari.png',
  },
  {
    _id: 't2',
    quote: 'Dstudio delivered a clean, patient-first telehealth website that perfectly.',
    name: 'Zak Casey',
    role: 'Tryeden - Marketing ',
    verified: true,
    avatar: '/images/zak-casey.png',
  },
  {
    _id: 't3',
    quote: 'Dstudio delivered a clean, patient-first telehealth website that perfectly.',
    name: 'Alexandra Lieb',
    role: 'Founder - Jelly Health',
    verified: true,
    avatar: '/images/alexandra-lieb.png',
  },
  {
    _id: 't4',
    quote: 'Working with Dstudio was seamless. They created a high-converting telehealth',
    name: 'Joey Stiver',
    role: 'CEO & Founder - Amble',
    verified: true,
    avatar: '/images/joey-stiver.png',
  },
  {
    _id: 't5',
    quote: 'Working with Dstudio was seamless. They simplified a complex AI product',
    name: 'Konrad Sudyka',
    role: 'CEO & Founder - Elevated Health',
    verified: true,
    avatar: '/images/konrad-sudyka.png',
  },
  {
    _id: 't6',
    quote: 'Dstudio transformed our product vision into a modern, intuitive experience.',
    name: 'Zak Casey',
    role: 'Marketing - Ellie MD ',
    verified: true,
    avatar: '/images/zak-casey-2.png',
  },
]

export const fallbackTrustLogos = [
  { _id: 'l1', name: 'Logo 1', logo: '/images/Frame-1171276901.webp' },
  { _id: 'l2', name: 'Logo 2', logo: '/images/Frame-1171276904.webp' },
  { _id: 'l3', name: 'Logo 3', logo: '/images/Frame-1171276903.webp' },
  { _id: 'l4', name: 'Logo 4', logo: '/images/Frame-1171276900.webp' },
  { _id: 'l5', name: 'Logo 5', logo: '/images/Frame-1171276902.webp' },
]

const defaultLicenses = [
  { _key: 'single', name: 'Single User License', seats: '(1 User)', price: 299 },
  { _key: 'multi', name: 'Multi User License', seats: '(10 User)', price: 299 },
]

const defaultAddOns = [
  {
    _key: 'branding',
    name: 'Update Branding',
    compareAtPrice: 599,
    price: 250,
    benefits: ['Colour Updates', 'Fonts & Typography', 'Design Component '],
  },
  {
    _key: 'frontend',
    name: 'Get Frontend Development',
    compareAtPrice: 5999,
    price: 3999,
    benefits: ['Webflow / Framer / React', 'Mobile Responsive', 'Source Code'],
  },
]

const defaultBenefits = [
  { _key: 'b1', label: 'Hippa Compliant', icon: '/images/hippa-compliant.svg' },
  { _key: 'b2', label: 'CRO Focused', icon: '/images/cro-focused.svg' },
  { _key: 'b3', label: 'UX First Design', icon: '/images/ux-first-design.svg' },
  {
    _key: 'b4',
    label: 'Secure Checkout',
    icon: '/images/secure-checkout.svg',
  },
]

const defaultFaqs = [
  {
    _key: 'about',
    question: 'About',
    answerText:
      'The first moisturizer scientifically proven to boost the synthesis of six skin-rebuilding essentials, ensuring your skin stays firm, hydrated, and resilient.\n\nPowered by 25 clinically studied active ingredients for skin health and longevity—more than any other moisturizer on the market—it’s designed to restore, repair, and strengthen stressed-out skin. Glow like you’ve slept… even if you haven’t.',
  },
  {
    _key: 'usecases',
    question: 'Use Cases',
    answerText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eget magna fermentum iaculis. Donec vel sapien at libero tincidunt tincidunt. Suspendisse potenti, sed euismod erat nec neque consequat.',
  },
  {
    _key: 'included',
    question: 'What’s Included',
    answerText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eget magna fermentum iaculis. Donec vel sapien at libero tincidunt tincidunt. Suspendisse potenti, sed euismod erat nec neque consequat.',
  },
]

const defaultGallery = [
  { url: '/images/Frame-2147228202.png', layout: 'full', alt: '' },
  { url: '/images/image-36.png', layout: 'full', alt: '' },
  { url: '/images/image-34.png', layout: 'half', alt: '' },
  { url: '/images/image-35.png', layout: 'half', alt: '' },
  { url: '/images/image-37.png', layout: 'full', alt: '' },
]

function makeProduct({ id, cardTitle, title, slug, image, badge, popular, editor, date }) {
  return {
    _id: id,
    title,
    cardTitle,
    slug,
    shortDescription:
      'A high-performance shampoo that purifies, smooths, and  restores balance without stripping or buildup.',
    badge,
    tags: ['Ozempic®', 'GP1 - Injection', 'Vitamin B12', 'Semaglutide', 'Weight Loss'],
    reviewCount: 497,
    satisfactionNote: '98% Found Satisfactory results',
    category: { title: 'Telehealth Templates', slug: 'telehealth-templates' },
    cardImage: image,
    gallery: defaultGallery,
    licenses: defaultLicenses,
    addOns: defaultAddOns,
    benefits: defaultBenefits,
    faqs: defaultFaqs,
    price: 295,
    isMostPopular: popular,
    isEditorChoice: Boolean(editor),
    publishedAt: date,
  }
}

export const fallbackProducts = [
  makeProduct({
    id: 'p1',
    cardTitle: 'Tryeden',
    title: 'Tryeden - Telehealth and wellness website template',
    slug: 'tryeden',
    image: '/images/image-2156.webp',
    badge: 'Bestseller',
    popular: true,
    date: '2026-08-01',
  }),
  makeProduct({
    id: 'p2',
    cardTitle: 'Amble',
    title: 'Amble - Telehealth and wellness website template',
    slug: 'amble',
    image: '/images/image-2157.webp',
    badge: 'Bestseller',
    popular: true,
    date: '2026-07-20',
  }),
  makeProduct({
    id: 'p3',
    cardTitle: 'Youthology',
    title: 'Youthology - Telehealth and wellness website template',
    slug: 'youthology',
    image: '/images/Frame-2085663716.webp',
    badge: null,
    popular: true,
    date: '2026-07-10',
  }),
  makeProduct({
    id: 'p4',
    cardTitle: 'Humecare',
    title: 'Humecare - Telehealth and wellness website template',
    slug: 'humecare',
    image: '/images/Frame-2085663716-1.webp',
    badge: null,
    popular: true,
    date: '2026-07-01',
  }),
  makeProduct({
    id: 'p5',
    cardTitle: 'Avexa',
    title: 'Avexa - Telehealth and wellness website template',
    slug: 'avexa',
    image: '/images/Frame-2085663716-2.webp',
    badge: 'Bestseller',
    popular: false,
    date: '2026-08-28',
  }),
  makeProduct({
    id: 'p6',
    cardTitle: 'Seriva',
    title: 'Seriva – Healthcare Website Theme',
    slug: 'seriva',
    image: '/images/Frame-2085663716-3.webp',
    badge: null,
    popular: false,
    date: '2026-08-20',
  }),
  makeProduct({
    id: 'p7',
    cardTitle: 'Nuvia',
    title: 'Nuvia - Telehealth and wellness website template',
    slug: 'nuvia',
    image: '/images/Frame-2085663716-4.webp',
    badge: null,
    popular: false,
    date: '2026-08-12',
  }),
  makeProduct({
    id: 'p8',
    cardTitle: 'Sundays',
    title: 'Sundays - Telehealth and wellness website template',
    slug: 'sundays',
    image: '/images/image-2162.webp',
    badge: null,
    popular: false,
    editor: true,
    date: '2026-06-20',
  }),
  makeProduct({
    id: 'p9',
    cardTitle: 'Eden',
    title: 'Eden - Telehealth and wellness website template',
    slug: 'eden',
    image: '/images/Frame-2147228251.webp',
    badge: null,
    popular: false,
    editor: true,
    date: '2026-06-10',
  }),
]
