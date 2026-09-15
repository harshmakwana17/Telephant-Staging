import 'server-only'

import { sanityFetch } from '@/sanity/client'
import {
  allProductsQuery,
  editorChoiceProductsQuery,
  mostPopularProductsQuery,
  productBySlugQuery,
  productSlugsQuery,
  recentProductsQuery,
  relatedProductsQuery,
  siteSettingsQuery,
  testimonialsQuery,
  trustLogosQuery,
} from '@/sanity/queries'
import {
  fallbackProducts,
  fallbackSettings,
  fallbackTestimonials,
  fallbackTrustLogos,
} from './fallback'

/**
 * Every getter below asks Sanity first and falls back to the baked-in Webflow
 * copy when the CMS is unconfigured, empty, or unreachable. That keeps the site
 * rendering in all three states rather than erroring.
 */

export async function getSiteSettings() {
  const settings = await sanityFetch({
    query: siteSettingsQuery,
    tags: ['sanity', 'siteSettings'],
    fallback: null,
  })
  // Merge so a partially filled settings document still gets sensible defaults
  // for the fields the editor has not touched yet.
  return { ...fallbackSettings, ...(settings || {}) }
}

export async function getMostPopularProducts() {
  return sanityFetch({
    query: mostPopularProductsQuery,
    tags: ['sanity', 'product'],
    fallback: fallbackProducts.filter((p) => p.isMostPopular).slice(0, 4),
  })
}

export async function getEditorChoiceProducts(limit = 2) {
  const products = await sanityFetch({
    query: editorChoiceProductsQuery,
    tags: ['sanity', 'product'],
    fallback: fallbackProducts.filter((p) => p.isEditorChoice).slice(0, limit),
  })
  return (products || []).slice(0, limit)
}

export async function getRecentProducts(limit = 3) {
  // The query caps at 20 (GROQ slices cannot take a parameter); trim here.
  const products = await sanityFetch({
    query: recentProductsQuery,
    tags: ['sanity', 'product'],
    fallback: [...fallbackProducts].sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    ),
  })
  return products.slice(0, limit)
}

export async function getAllProducts() {
  return sanityFetch({
    query: allProductsQuery,
    tags: ['sanity', 'product'],
    fallback: fallbackProducts,
  })
}

export async function getProductSlugs() {
  return sanityFetch({
    query: productSlugsQuery,
    tags: ['sanity', 'product'],
    fallback: fallbackProducts.map((p) => p.slug),
  })
}

export async function getProductBySlug(slug) {
  return sanityFetch({
    query: productBySlugQuery,
    params: { slug },
    tags: ['sanity', 'product'],
    fallback: fallbackProducts.find((p) => p.slug === slug) || null,
  })
}

export async function getRelatedProducts(slug) {
  return sanityFetch({
    query: relatedProductsQuery,
    params: { slug },
    tags: ['sanity', 'product'],
    fallback: fallbackProducts.filter((p) => p.slug !== slug).slice(0, 3),
  })
}

export async function getTestimonials() {
  return sanityFetch({
    query: testimonialsQuery,
    tags: ['sanity', 'testimonial'],
    fallback: fallbackTestimonials,
  })
}

export async function getTrustLogos() {
  return sanityFetch({
    query: trustLogosQuery,
    tags: ['sanity', 'trustLogo'],
    fallback: fallbackTrustLogos,
  })
}
