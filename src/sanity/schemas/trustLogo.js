export const trustLogo = {
  name: 'trustLogo',
  title: 'Trust logo',
  type: 'document',
  description: 'Logos in the scrolling "Trusted by top-tier agencies" marquee.',
  fields: [
    {
      name: 'name',
      title: 'Company name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Sort order',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Manual order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: { select: { title: 'name', media: 'logo' } },
}
