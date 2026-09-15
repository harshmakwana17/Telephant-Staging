export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

/**
 * The site ships with the original Webflow copy baked in as a fallback, so it
 * renders correctly before a Sanity project exists. Once a project id is set,
 * every section reads from the CMS instead. See src/lib/content.js.
 */
export const isSanityConfigured = Boolean(projectId)
