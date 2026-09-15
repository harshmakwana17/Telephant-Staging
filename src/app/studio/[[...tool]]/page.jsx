/**
 * Sanity Studio, embedded at /studio.
 *
 * `force-static` keeps Next from trying to pre-render the Studio's
 * browser-only UI on the server.
 */
import { isSanityConfigured } from '@/sanity/env'

import { StudioClient } from './StudioClient'
import { StudioSetupNotice } from './StudioSetupNotice'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Telephant Studio',
  robots: { index: false, follow: false },
}

export default function StudioPage() {
  // Sanity's config throws "Configuration must contain `projectId`" if it is
  // mounted without credentials, which is a confusing first-run experience.
  if (!isSanityConfigured) return <StudioSetupNotice />

  return <StudioClient />
}
