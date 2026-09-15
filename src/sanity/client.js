import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, isSanityConfigured } from './env'

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      // Served from Sanity's CDN. Publishes reach the site via the revalidate
      // webhook (src/app/api/revalidate/route.js) rather than by disabling it.
      useCdn: true,
      perspective: 'published',
    })
  : null

/**
 * Runs a GROQ query, tagging the result for Next's Data Cache so a webhook can
 * bust it on publish. Returns `fallback` when Sanity isn't configured yet or
 * when the request fails, so a CMS outage degrades to the baked-in copy instead
 * of a 500.
 */
export async function sanityFetch({
  query,
  params = {},
  tags = ['sanity'],
  fallback = null,
  revalidate = 60,
}) {
  if (!client) return fallback

  try {
    // Caching is opt-in as of Next 15, so `tags` alone would not cache anything -
    // `revalidate` is what puts the response in the Data Cache. The webhook busts
    // the tags on publish; the 60s window is the safety net if it is not wired up.
    const result = await client.fetch(query, params, { next: { revalidate, tags } })
    // An empty result set means the CMS is configured but not populated yet.
    if (result === null || (Array.isArray(result) && result.length === 0)) {
      return fallback
    }
    return result
  } catch (error) {
    console.error('[sanity] query failed, using fallback content:', error.message)
    return fallback
  }
}
