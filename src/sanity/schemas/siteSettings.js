const linkFields = [
  { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() },
  { name: 'href', title: 'URL', type: 'string', initialValue: '#' },
]

export const siteSettings = {
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  groups: [
    { name: 'nav', title: 'Navigation', default: true },
    { name: 'hero', title: 'Home hero' },
    { name: 'cta', title: 'CTA sections' },
    { name: 'footer', title: 'Footer' },
  ],
  fields: [
    {
      name: 'navLogo',
      title: 'Header logo',
      type: 'image',
      group: 'nav',
      fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
    },
    {
      name: 'navLinks',
      title: 'Nav links',
      type: 'array',
      group: 'nav',
      of: [{ type: 'object', name: 'navLink', fields: linkFields }],
    },
    {
      name: 'navButton',
      title: 'Nav button',
      type: 'object',
      group: 'nav',
      fields: linkFields,
    },

    {
      name: 'heroTagText',
      title: 'Hero pill - text',
      type: 'string',
      group: 'hero',
      description: 'e.g. "Built by Experts."',
    },
    {
      name: 'heroTagAccent',
      title: 'Hero pill - grey text',
      type: 'string',
      group: 'hero',
      description: 'e.g. "Designed to Convert."',
    },
    {
      name: 'heroTagOffer',
      title: 'Hero pill - right side',
      type: 'string',
      group: 'hero',
      description: 'e.g. "20% OFF"',
    },
    {
      name: 'heroHeadingLine1',
      title: 'Hero heading - line 1',
      type: 'string',
      group: 'hero',
      description: 'e.g. "Telehealth & Wellness"',
    },
    {
      name: 'heroHeadingLine2',
      title: 'Hero heading - line 2',
      type: 'string',
      group: 'hero',
      description: 'e.g. "for ready to move"',
    },
    {
      name: 'heroHeadingAccent',
      title: 'Hero heading - animated word',
      type: 'string',
      group: 'hero',
      description: 'The grey flip-in word, e.g. "Agencies"',
    },
    {
      name: 'heroSubtext',
      title: 'Hero subtext',
      type: 'text',
      rows: 2,
      group: 'hero',
    },
    {
      name: 'heroButtons',
      title: 'Hero buttons',
      type: 'array',
      group: 'hero',
      of: [
        {
          type: 'object',
          name: 'heroButton',
          fields: [
            ...linkFields,
            {
              name: 'primary',
              title: 'Primary style (dark)',
              type: 'boolean',
              initialValue: false,
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(2),
    },
    {
      name: 'heroSocialProof',
      title: 'Hero social proof text',
      type: 'string',
      group: 'hero',
      description: 'e.g. "More than +100 founders Launched Brands"',
    },
    {
      name: 'heroSocialProofImage',
      title: 'Hero social proof avatars',
      type: 'image',
      group: 'hero',
      fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
    },

    {
      name: 'trustHeadingLine1',
      title: 'Trust marquee heading - line 1',
      type: 'string',
      group: 'cta',
    },
    {
      name: 'trustHeadingLine2',
      title: 'Trust marquee heading - line 2',
      type: 'string',
      group: 'cta',
    },
    {
      name: 'trustCaption',
      title: 'Trust marquee caption',
      type: 'string',
      group: 'cta',
    },
    {
      name: 'testimonialHeadingLine1',
      title: 'Testimonial heading - line 1',
      type: 'string',
      group: 'cta',
    },
    {
      name: 'testimonialHeadingLine2',
      title: 'Testimonial heading - line 2',
      type: 'string',
      group: 'cta',
    },
    {
      name: 'testimonialRating',
      title: 'Testimonial rating pill',
      type: 'object',
      group: 'cta',
      fields: [
        { name: 'score', title: 'Score', type: 'string', initialValue: '5.0' },
        { name: 'count', title: 'Review count', type: 'string', initialValue: '100+' },
      ],
    },
    {
      name: 'contactEyebrow',
      title: 'Contact - eyebrow',
      type: 'string',
      group: 'cta',
    },
    {
      name: 'contactHeading',
      title: 'Contact - heading',
      type: 'string',
      group: 'cta',
    },
    {
      name: 'contactBody',
      title: 'Contact - body',
      type: 'text',
      rows: 3,
      group: 'cta',
    },
    {
      name: 'contactButton',
      title: 'Contact - button',
      type: 'object',
      group: 'cta',
      fields: linkFields,
    },
    {
      name: 'launchHeading',
      title: 'Launch CTA - heading',
      type: 'string',
      group: 'cta',
    },
    {
      name: 'launchButtons',
      title: 'Launch CTA - buttons',
      type: 'array',
      group: 'cta',
      of: [
        {
          type: 'object',
          name: 'launchButton',
          fields: [
            ...linkFields,
            {
              name: 'primary',
              title: 'Primary style (dark)',
              type: 'boolean',
              initialValue: false,
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(2),
    },

    {
      name: 'footerLogo',
      title: 'Footer logo',
      type: 'image',
      group: 'footer',
      fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
    },
    {
      name: 'footerBlurb',
      title: 'Footer blurb',
      type: 'text',
      rows: 2,
      group: 'footer',
    },
    {
      name: 'footerColumns',
      title: 'Footer link columns',
      type: 'array',
      group: 'footer',
      of: [
        {
          type: 'object',
          name: 'footerColumn',
          fields: [
            {
              name: 'title',
              title: 'Column title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [{ type: 'object', name: 'footerLink', fields: linkFields }],
            },
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    },
    {
      name: 'footerCompany',
      title: 'Footer company name',
      type: 'string',
      group: 'footer',
    },
    {
      name: 'footerEmail',
      title: 'Footer email',
      type: 'string',
      group: 'footer',
    },
    {
      name: 'footerCopyright',
      title: 'Footer copyright line',
      type: 'string',
      group: 'footer',
    },
  ],
  preview: {
    prepare: () => ({ title: 'Site settings' }),
  },
}
