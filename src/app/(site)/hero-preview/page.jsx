import { HomePageContent } from '@/components/sections/HomePageContent'

/**
 * Review page for the "motion grid" hero effect: the full homepage, with the
 * rotating card field behind the hero. Not linked anywhere and kept out of
 * search results.
 *
 * Approve: change the homepage to <HomePageContent motionGrid /> and delete
 * this route. Reject: delete this route and MotionGridBackground.jsx (plus
 * the motion-grid CSS block in globals.css).
 */
export const metadata = {
  title: 'Hero preview',
  robots: { index: false, follow: false },
}

export default function HeroPreviewPage() {
  return <HomePageContent motionGrid />
}
