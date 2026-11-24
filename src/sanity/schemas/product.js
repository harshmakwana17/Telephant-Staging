import { FILTER_CATEGORIES } from '../../lib/filterCategories'

export const product = {
  name: 'product',
  title: 'Product / Template',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'media', title: 'Media' },
    { name: 'pricing', title: 'Pricing' },
    { name: 'details', title: 'Details & FAQ' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      description:
        'Full product name, e.g. "Avexa - Telehealth and wellness website template"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cardTitle',
      title: 'Card title',
      type: 'string',
      group: 'content',
      description: 'Short name shown on grid cards, e.g. "Avexa". Falls back to Title.',
    },
    {
      name: 'breadcrumbTitle',
      title: 'Breadcrumb title',
      type: 'string',
      group: 'content',
      description: 'Short title shown in the breadcrumb, e.g. "Tryeden". Falls back to Title.',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      group: 'content',
      description: 'Shown in the breadcrumb, e.g. "Telehealth Templates".',
    },
    {
      name: 'shortDescription',
      title: 'Short description',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'One or two lines under the product title.',
    },
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
      group: 'content',
      description: 'Tag above the title, e.g. "Bestseller". Leave empty to hide.',
    },
    {
      name: 'tags',
      title: 'Marquee tags',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
      description: 'Scrolling pills under the description, e.g. "Ozempic", "Weight Loss".',
      options: { layout: 'tags' },
    },

    {
      name: 'cardImage',
      title: 'Card image',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
      description: 'Thumbnail used in the "Most Popular" and "Recent Drops" grids.',
      fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      group: 'media',
      description: 'Preview screenshots on the product page, in order.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt text', type: 'string' },
            {
              name: 'layout',
              title: 'Layout',
              type: 'string',
              description:
                'Full = full width row. Half = sits side by side with the next Half image.',
              options: {
                list: [
                  { title: 'Full width', value: 'full' },
                  { title: 'Half width', value: 'half' },
                ],
                layout: 'radio',
              },
              initialValue: 'full',
            },
          ],
        },
      ],
    },

    {
      name: 'purchaseLink',
      title: 'Purchase link (fallback)',
      type: 'url',
      group: 'pricing',
      description:
        'Used by "Purchase Now" only when the selected licence has no link of its own. Set the real links on each Licence option below.',
    },
    {
      name: 'licenses',
      title: 'License options',
      type: 'array',
      group: 'pricing',
      description: 'Radio options. The first one is selected by default.',
      of: [
        {
          type: 'object',
          name: 'license',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'seats',
              title: 'Seats label',
              type: 'string',
              description: 'e.g. "(1 User)"',
            },
            {
              name: 'price',
              title: 'Price (USD)',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            },
            {
              name: 'purchaseLink',
              title: 'Purchase link (no add-ons)',
              type: 'url',
              description:
                'Where "Purchase Now" goes when this licence is selected with NO add-ons.',
            },
            {
              name: 'addOnLinks',
              title: 'Purchase links with add-ons',
              type: 'array',
              description:
                'Where "Purchase Now" goes when add-ons are selected with this licence. Add one row per add-on, or per combination of add-ons. When the visitor\'s selected add-ons match a row, that row\'s link is used. If several rows match, the row listing the MOST add-ons wins (so a "Branding + Development" row beats a "Branding" row when both are ticked). If two rows are equally specific, the one whose add-on comes first in the "Add-on plans" list wins.',
              of: [
                {
                  type: 'object',
                  name: 'addOnLink',
                  fields: [
                    {
                      name: 'addOns',
                      title: 'Add-on(s) for this link',
                      type: 'array',
                      of: [{ type: 'string' }],
                      options: { layout: 'tags' },
                      description:
                        'List one or more add-on names. The link is used when ALL of them are selected together. For a single add-on, list just that one. Names must match the Add-on plan Names exactly.',
                      validation: (Rule) => Rule.required().min(1),
                    },
                    {
                      name: 'url',
                      title: 'Link',
                      type: 'url',
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                  preview: {
                    select: {
                      a0: 'addOns.0',
                      a1: 'addOns.1',
                      a2: 'addOns.2',
                      url: 'url',
                      legacy: 'addOn',
                    },
                    prepare: ({ a0, a1, a2, url, legacy }) => {
                      const names = [a0, a1, a2].filter(Boolean)
                      return {
                        title: names.length ? names.join(' + ') : legacy || 'No add-on selected',
                        subtitle: url,
                      }
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: { title: 'name', subtitle: 'price' },
            prepare: ({ title, subtitle }) => ({
              title,
              subtitle: subtitle != null ? '$' + subtitle : 'No price',
            }),
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    },
    {
      name: 'addOns',
      title: 'Add-on plans',
      type: 'array',
      group: 'pricing',
      description: 'Optional checkboxes added on top of the license price.',
      of: [
        {
          type: 'object',
          name: 'addOn',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'compareAtPrice',
              title: 'Compare-at price (struck through)',
              type: 'number',
            },
            {
              name: 'price',
              title: 'Price (USD)',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            },
            {
              name: 'benefits',
              title: 'Benefits',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
          preview: {
            select: { title: 'name', subtitle: 'price' },
            prepare: ({ title, subtitle }) => ({
              title,
              subtitle: subtitle != null ? '$' + subtitle : 'No price',
            }),
          },
        },
      ],
    },

    {
      name: 'benefits',
      title: 'Trust badges',
      type: 'array',
      group: 'details',
      description: 'The icon row under the buy button, e.g. "Hippa Compliant".',
      of: [
        {
          type: 'object',
          name: 'benefit',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
            },
          ],
          preview: { select: { title: 'label', media: 'icon' } },
        },
      ],
    },
    {
      name: 'faqs',
      title: 'Accordion sections',
      type: 'array',
      group: 'details',
      description:
        'The "About" / "Use Cases" / "What is Included" dropdowns. The first is open by default.',
      of: [
        {
          type: 'object',
          name: 'faq',
          fields: [
            {
              name: 'question',
              title: 'Heading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'answer',
              title: 'Body',
              type: 'array',
              of: [{ type: 'block' }],
            },
          ],
          preview: { select: { title: 'question' } },
        },
      ],
    },

    {
      name: 'relatedProducts',
      title: 'More templates',
      type: 'array',
      group: 'details',
      description:
        'Templates shown in the "More Templates" section at the bottom of this product page, in this order. Pick up to 3. Leave empty to show the 3 newest templates automatically.',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
          // Weak, so a template can still be deleted while other pages list it.
          // The product page skips any reference that no longer resolves.
          weak: true,
          options: {
            // Picking here should never create a new, half-filled template.
            disableNew: true,
            // A template can't list itself. Strip the draft prefix so both the
            // draft and published copies of the current document are excluded.
            filter: ({ document }) => {
              const id = (document?._id || '').replace(/^drafts\./, '')
              return {
                filter: '!(_id in [$id, $draftId])',
                params: { id, draftId: `drafts.${id}` },
              }
            },
          },
        },
      ],
      // Matches the 3-column grid; a 4th card would sit alone on a new row.
      validation: (Rule) => Rule.unique().max(3),
    },
    {
      name: 'reviewCount',
      title: 'Review count',
      type: 'number',
      group: 'details',
      description: 'Shown next to the stars, e.g. 497.',
    },
    {
      name: 'satisfactionNote',
      title: 'Satisfaction note',
      type: 'string',
      group: 'details',
      description: 'e.g. "98% Found Satisfactory results"',
    },

    {
      name: 'filterCategories',
      title: 'Filter categories',
      type: 'array',
      group: 'content',
      description:
        'Tabs this template appears under on the Templates page. Tick any that apply; every template also shows under "All".',
      of: [{ type: 'string' }],
      options: {
        list: FILTER_CATEGORIES,
        layout: 'grid',
      },
    },
    {
      name: 'isMostPopular',
      title: 'Show in "Most Popular"',
      type: 'boolean',
      group: 'content',
      initialValue: false,
    },
    {
      name: 'isEditorChoice',
      title: 'Show in "Editor Choice"',
      type: 'boolean',
      group: 'content',
      initialValue: false,
    },
    {
      name: 'publishedAt',
      title: 'Launch date',
      type: 'datetime',
      group: 'content',
      description: 'Drives the order of the "Recent Drops" grid.',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'order',
      title: 'Manual sort order',
      type: 'number',
      group: 'content',
      description: 'Lower numbers appear first in "Most Popular".',
    },

    {
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      group: 'seo',
      description: 'Falls back to Title.',
    },
    {
      name: 'seoDescription',
      title: 'SEO description',
      type: 'text',
      rows: 2,
      group: 'seo',
      description: 'Falls back to Short description.',
    },
  ],
  orderings: [
    {
      title: 'Manual order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Newest first',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', media: 'cardImage', price: 'licenses.0.price' },
    prepare: ({ title, media, price }) => ({
      title,
      subtitle: price != null ? '$' + price : 'No price set',
      media,
    }),
  },
}
