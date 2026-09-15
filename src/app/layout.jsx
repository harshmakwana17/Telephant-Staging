/**
 * Root layout - deliberately bare.
 *
 * The Webflow stylesheets and the site chrome (nav/footer) live in the (site)
 * route group instead, so the embedded Sanity Studio at /studio renders on a
 * clean page without the site's global CSS bleeding into its UI.
 */
/**
 * Absolute base for Open Graph and Twitter image URLs.
 *
 * Order matters: an explicit NEXT_PUBLIC_SITE_URL (a custom domain) wins, then
 * Vercel's stable production domain, then the per-deployment URL so previews
 * get correct absolute URLs too, and localhost only in local dev. Without this
 * a deployed page would advertise localhost image URLs to crawlers.
 */
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return 'http://localhost:3000'
}

export const metadata = {
  metadataBase: new URL(resolveSiteUrl()),
  title: {
    default: 'Telephant',
    template: '%s | Telephant',
  },
  description:
    'Telehealth & wellness website templates built by experts and designed to convert.',
  icons: {
    icon: '/favicon.png',
    apple: '/images/webclip.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
