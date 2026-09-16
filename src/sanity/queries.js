import { groq } from 'next-sanity'

const imageFields = `
  "url": asset->url,
  "lqip": asset->metadata.lqip,
  "aspectRatio": asset->metadata.dimensions.aspectRatio,
  alt
`

const productCardFields = `
  _id,
  title,
  cardTitle,
  "slug": slug.current,
  cardImage { ${imageFields} },
  "price": licenses[0].price,
  badge,
  isMostPopular,
  isEditorChoice,
  publishedAt,
  order
`

export const mostPopularProductsQuery = groq`
  *[_type == "product" && isMostPopular == true] | order(order asc, publishedAt desc)[0...4] {
    ${productCardFields}
  }
`

/**
 * GROQ slice bounds must be integer literals - `[0...$limit]` is rejected by
 * the parser, so the cap is constant here and the caller trims the result.
 * See getRecentProducts in src/lib/content.js.
 */
export const recentProductsQuery = groq`
  *[_type == "product"] | order(publishedAt desc)[0...20] {
    ${productCardFields}
  }
`

export const editorChoiceProductsQuery = groq`
  *[_type == "product" && isEditorChoice == true] | order(order asc, publishedAt desc)[0...3] {
    ${productCardFields}
  }
`

export const allProductsQuery = groq`
  *[_type == "product"] | order(order asc, publishedAt desc) {
    ${productCardFields}
  }
`

export const productSlugsQuery = groq`
  *[_type == "product" && defined(slug.current)][].slug.current
`

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    cardTitle,
    "slug": slug.current,
    shortDescription,
    badge,
    tags,
    reviewCount,
    satisfactionNote,
    seoTitle,
    seoDescription,
    category-> { title, "slug": slug.current },
    cardImage { ${imageFields} },
    gallery[] { ${imageFields}, layout },
    licenses[] { _key, name, seats, price },
    addOns[] { _key, name, price, compareAtPrice, benefits },
    benefits[] { _key, label, icon { ${imageFields} } },
    faqs[] { _key, question, answer },
    // Hand-picked "More Templates" for this page, in the editor's order.
    // Drops references to deleted templates or ones without a slug, since a
    // card needs a slug to link to. Null when nothing has been picked.
    "relatedProducts": relatedProducts[defined(@->slug.current)]->{
      ${productCardFields}
    }
  }
`

/** Four other products to fill the "You may also like" grid. */
export const relatedProductsQuery = groq`
  *[_type == "product" && slug.current != $slug] | order(publishedAt desc)[0...3] {
    ${productCardFields}
  }
`

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc, _createdAt asc) {
    _id,
    quote,
    name,
    role,
    verified,
    avatar { ${imageFields} }
  }
`

export const trustLogosQuery = groq`
  *[_type == "trustLogo"] | order(order asc, _createdAt asc) {
    _id,
    name,
    logo { ${imageFields} }
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    ...,
    navLogo { ${imageFields} },
    heroSocialProofImage { ${imageFields} },
    footerLogo { ${imageFields} }
  }
`
