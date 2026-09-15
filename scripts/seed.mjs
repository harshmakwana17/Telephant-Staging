/**
 * One-off import of the Webflow export's content into Sanity.
 *
 *   npm run seed
 *
 * Uploads the images from public/images, then creates the products,
 * testimonials, trust logos, category and site-settings documents that the
 * site currently renders from src/lib/fallback.js. Safe to re-run: every
 * document uses a deterministic _id and is written with createOrReplace, and
 * uploaded assets are deduplicated by Sanity on content hash.
 *
 * Requires SANITY_WRITE_TOKEN (Sanity Manage -> API -> Tokens -> Editor).
 */
import { createClient } from '@sanity/client'
import { readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')

// Load .env.local without adding a dotenv dependency.
for (const file of ['.env.local', '.env']) {
  const full = path.join(projectRoot, file)
  if (!existsSync(full)) continue
  const raw = await readFile(full, 'utf8')
  for (const line of raw.split('\n')) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].replace(/^["']|["']$/g, '')
    }
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_WRITE_TOKEN

if (!projectId) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local')
  process.exit(1)
}
if (!token) {
  console.error(
    'Missing SANITY_WRITE_TOKEN in .env.local.\n' +
      'Create one at https://sanity.io/manage -> your project -> API -> Tokens (Editor permission).'
  )
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01',
  useCdn: false,
})

const {
  fallbackSettings,
  fallbackProducts,
  fallbackTestimonials,
  fallbackTrustLogos,
} = await import('../src/lib/fallback.js')

/** Uploads public/<publicPath> once and returns a Sanity image reference. */
const assetCache = new Map()
async function uploadImage(publicPath) {
  if (!publicPath || typeof publicPath !== 'string') return undefined
  if (assetCache.has(publicPath)) return assetCache.get(publicPath)

  const filePath = path.join(projectRoot, 'public', publicPath.replace(/^\//, ''))
  if (!existsSync(filePath)) {
    console.warn(`  ! missing image, skipping: ${publicPath}`)
    return undefined
  }

  const buffer = await readFile(filePath)
  const asset = await client.assets.upload('image', buffer, {
    filename: path.basename(filePath),
  })
  const ref = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
  assetCache.set(publicPath, ref)
  console.log(`  + uploaded ${path.basename(filePath)}`)
  return ref
}

/** Sanity needs a _key on every array item. */
const withKeys = (items, prefix) =>
  items.map((item, index) => ({ _key: item._key || `${prefix}-${index}`, ...item }))

/** Plain text -> a minimal Portable Text block array. */
const toPortableText = (text, keyPrefix) =>
  String(text)
    .split('\n\n')
    .map((paragraph, index) => ({
      _type: 'block',
      _key: `${keyPrefix}-${index}`,
      style: 'normal',
      markDefs: [],
      children: [
        { _type: 'span', _key: `${keyPrefix}-${index}-0`, text: paragraph.trim(), marks: [] },
      ],
    }))

async function run() {
  const docs = []

  console.log('\nCategory')
  docs.push({
    _id: 'category-telehealth-templates',
    _type: 'category',
    title: 'Telehealth Templates',
    slug: { _type: 'slug', current: 'telehealth-templates' },
  })

  console.log('\nProducts')
  for (const [index, product] of fallbackProducts.entries()) {
    console.log(`- ${product.title}`)
    const cardImage = await uploadImage(product.cardImage)

    const gallery = []
    for (const [i, image] of (product.gallery || []).entries()) {
      const uploaded = await uploadImage(image.url)
      if (uploaded) {
        gallery.push({ ...uploaded, _key: `gallery-${i}`, layout: image.layout, alt: image.alt })
      }
    }

    const benefits = []
    for (const [i, benefit] of (product.benefits || []).entries()) {
      const icon = await uploadImage(benefit.icon)
      benefits.push({ _key: `benefit-${i}`, label: benefit.label, icon })
    }

    docs.push({
      _id: `product-${product.slug}`,
      _type: 'product',
      title: product.title,
      cardTitle: product.cardTitle,
      slug: { _type: 'slug', current: product.slug },
      category: { _type: 'reference', _ref: 'category-telehealth-templates' },
      shortDescription: product.shortDescription,
      badge: product.badge || undefined,
      tags: product.tags,
      reviewCount: product.reviewCount,
      satisfactionNote: product.satisfactionNote,
      cardImage,
      gallery,
      licenses: withKeys(product.licenses || [], 'license'),
      addOns: withKeys(product.addOns || [], 'addon'),
      benefits,
      faqs: (product.faqs || []).map((faq, i) => ({
        _key: `faq-${i}`,
        question: faq.question,
        answer: toPortableText(faq.answerText, `faq-${i}`),
      })),
      isMostPopular: product.isMostPopular,
      isEditorChoice: product.isEditorChoice,
      publishedAt: new Date(product.publishedAt).toISOString(),
      order: index,
    })
  }

  console.log('\nTestimonials')
  for (const [index, testimonial] of fallbackTestimonials.entries()) {
    docs.push({
      _id: `testimonial-${index + 1}`,
      _type: 'testimonial',
      quote: testimonial.quote,
      name: testimonial.name,
      role: testimonial.role,
      verified: testimonial.verified,
      avatar: await uploadImage(testimonial.avatar),
      order: index,
    })
  }

  console.log('\nTrust logos')
  for (const [index, logo] of fallbackTrustLogos.entries()) {
    docs.push({
      _id: `trustlogo-${index + 1}`,
      _type: 'trustLogo',
      name: logo.name,
      logo: await uploadImage(logo.logo),
      order: index,
    })
  }

  console.log('\nSite settings')
  docs.push({
    _id: 'siteSettings',
    _type: 'siteSettings',
    navLogo: await uploadImage(fallbackSettings.navLogo),
    navLinks: withKeys(fallbackSettings.navLinks, 'nav'),
    navButton: fallbackSettings.navButton,
    heroTagText: fallbackSettings.heroTagText,
    heroTagAccent: fallbackSettings.heroTagAccent,
    heroTagOffer: fallbackSettings.heroTagOffer,
    heroHeadingLine1: fallbackSettings.heroHeadingLine1,
    heroHeadingLine2: fallbackSettings.heroHeadingLine2,
    heroHeadingAccent: fallbackSettings.heroHeadingAccent,
    heroSubtext: fallbackSettings.heroSubtext,
    heroButtons: withKeys(fallbackSettings.heroButtons, 'hero-btn'),
    heroSocialProof: fallbackSettings.heroSocialProof,
    heroSocialProofImage: await uploadImage(fallbackSettings.heroSocialProofImage),
    trustHeadingLine1: fallbackSettings.trustHeadingLine1,
    trustHeadingLine2: fallbackSettings.trustHeadingLine2,
    trustCaption: fallbackSettings.trustCaption,
    testimonialHeadingLine1: fallbackSettings.testimonialHeadingLine1,
    testimonialHeadingLine2: fallbackSettings.testimonialHeadingLine2,
    testimonialRating: fallbackSettings.testimonialRating,
    contactEyebrow: fallbackSettings.contactEyebrow,
    contactHeading: fallbackSettings.contactHeading,
    contactBody: fallbackSettings.contactBody,
    contactButton: fallbackSettings.contactButton,
    launchHeading: fallbackSettings.launchHeading,
    launchButtons: withKeys(fallbackSettings.launchButtons, 'launch-btn'),
    footerLogo: await uploadImage(fallbackSettings.footerLogo),
    footerBlurb: fallbackSettings.footerBlurb,
    footerColumns: fallbackSettings.footerColumns.map((column, i) => ({
      _key: `col-${i}`,
      title: column.title,
      links: withKeys(column.links, `col-${i}-link`),
    })),
    footerCompany: fallbackSettings.footerCompany,
    footerEmail: fallbackSettings.footerEmail,
    footerCopyright: fallbackSettings.footerCopyright,
  })

  console.log(`\nWriting ${docs.length} documents...`)
  let tx = client.transaction()
  for (const doc of docs) tx = tx.createOrReplace(doc)
  await tx.commit()

  console.log(`\nDone. Seeded ${docs.length} documents into ${projectId}/${dataset}.`)
  console.log('Open http://localhost:3000/studio to edit them.')
}

run().catch((error) => {
  console.error('\nSeed failed:', error.message)
  process.exit(1)
})
