/*
 * Root 404. Next renders this for any unmatched URL in the app, and for
 * notFound() thrown inside a route - including /products/[slug].
 *
 * It sits outside the (site) route group, so it pulls in the stylesheets and
 * the nav/footer itself rather than inheriting them from the site layout.
 */
import '@/styles/css/normalize.css'
import '@/styles/css/webflow.css'
import '@/styles/css/telephant.webflow.css'
import '@/styles/form.css'
import '@/styles/globals.css'

import Link from 'next/link'

import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { getSiteSettings } from '@/lib/content'

export const metadata = {
  title: 'Page Not Found',
}

export default async function NotFound() {
  const settings = await getSiteSettings()

  return (
    <div className="page-wrapper">
      <Navbar settings={settings} />
      <main className="main-wrapper">
        <div className="utility-page_component">
          <div className="utility-page_wrapper">
            <h3>Page Not Found</h3>
            <div>The page you are looking for doesn&apos;t exist or has been moved</div>
            <Link href="/" className="button w-button">
              Go Home
            </Link>
          </div>
        </div>
      </main>
      <Footer settings={settings} />
    </div>
  )
}
