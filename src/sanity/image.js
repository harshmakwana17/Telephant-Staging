// Named export: the default export is deprecated and warns on every build.
import { createImageUrlBuilder } from '@sanity/image-url'

import { dataset, projectId, isSanityConfigured } from './env'

const builder = isSanityConfigured
  ? createImageUrlBuilder({ projectId, dataset })
  : null

/**
 * Resolves an image reference to a URL.
 *
 * Handles both shapes the app deals with:
 *  - a Sanity image object (or the `{ url }` projection the queries return)
 *  - a plain string path from the fallback content, e.g. "/images/foo.webp"
 */
export function imageUrl(source, width) {
  if (!source) return null
  if (typeof source === 'string') return source

  // The GROQ projections already dereference `asset->url`.
  if (source.url) {
    return width ? `${source.url}?w=${width}&auto=format&fit=max` : source.url
  }

  if (!builder || !source.asset) return null

  const image = builder.image(source).auto('format').fit('max')
  return width ? image.width(width).url() : image.url()
}

/** Builds a srcSet across the widths Webflow's markup originally used. */
export function imageSrcSet(source, widths = [500, 800, 1080, 1600]) {
  if (!source || typeof source === 'string') return undefined
  return widths
    .map((w) => `${imageUrl(source, w)} ${w}w`)
    .filter(Boolean)
    .join(', ')
}

export function imageAlt(source, fallback = '') {
  if (!source || typeof source === 'string') return fallback
  return source.alt || fallback
}
