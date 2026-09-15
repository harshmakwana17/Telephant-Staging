/*
 * Webflow's three stylesheets, imported in the order the export linked them.
 * They are untouched so a future re-export can overwrite src/styles/css/
 * wholesale; anything added by hand lives in globals.css.
 */
import '@/styles/css/normalize.css'
import '@/styles/css/webflow.css'
import '@/styles/css/telephant.webflow.css'
import '@/styles/form.css'
import '@/styles/globals.css'

import { AosProvider } from '@/components/ui/AosProvider'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { getSiteSettings } from '@/lib/content'

export default async function SiteLayout({ children }) {
  const settings = await getSiteSettings()

  return (
    <div className="page-wrapper">
      <CustomCursor />
      <Navbar settings={settings} />
      <main className="main-wrapper">{children}</main>
      <Footer settings={settings} />
      <AosProvider />
    </div>
  )
}
