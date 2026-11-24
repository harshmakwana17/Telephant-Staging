import { GetInTouch } from '@/components/sections/GetInTouch'
import { Hero } from '@/components/sections/Hero'
import { LaunchCta } from '@/components/sections/LaunchCta'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { ShopByCategory } from '@/components/sections/ShopByCategory'
import { Testimonials } from '@/components/sections/Testimonials'
import { TrustMarquee } from '@/components/sections/TrustMarquee'
import {
  getAllProducts,
  getEditorChoiceProducts,
  getMostPopularProducts,
  getRecentProducts,
  getSiteSettings,
  getTestimonials,
  getTrustLogos,
} from '@/lib/content'
import { imageUrl } from '@/sanity/image'

/**
 * Every homepage section, in order. Shared by the homepage (app/(site)/page.jsx)
 * and the /hero-preview review page so the two never drift apart.
 *
 * `motionGrid` turns on the rotating card field behind the hero (trial).
 */
export async function HomePageContent({ motionGrid = false }) {
  const [settings, popular, recent, editorChoice, testimonials, trustLogos, allProducts] =
    await Promise.all([
      getSiteSettings(),
      getMostPopularProducts(),
      getRecentProducts(3),
      getEditorChoiceProducts(),
      getTestimonials(),
      getTrustLogos(),
      getAllProducts(),
    ])

  const motionGridImages = motionGrid
    ? allProducts.map((p) => imageUrl(p.cardImage, 400)).filter(Boolean)
    : null

  return (
    <>
      <Hero settings={settings} motionGridImages={motionGridImages} />
      <ProductGrid heading="Most Popular" products={popular} layout="popular" />
      <ShopByCategory products={allProducts} />
      <ProductGrid heading="Recent Drops" products={recent} layout="recent" />
      <ProductGrid heading="Editor Choice" products={editorChoice} layout="editor" />
      <Testimonials settings={settings} testimonials={testimonials} />
      <TrustMarquee settings={settings} logos={trustLogos} />
      <GetInTouch settings={settings} />
      <LaunchCta settings={settings} />
    </>
  )
}
