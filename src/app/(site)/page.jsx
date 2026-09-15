import { GetInTouch } from '@/components/sections/GetInTouch'
import { Hero } from '@/components/sections/Hero'
import { LaunchCta } from '@/components/sections/LaunchCta'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { Testimonials } from '@/components/sections/Testimonials'
import { TrustMarquee } from '@/components/sections/TrustMarquee'
import {
  getEditorChoiceProducts,
  getMostPopularProducts,
  getRecentProducts,
  getSiteSettings,
  getTestimonials,
  getTrustLogos,
} from '@/lib/content'

export default async function HomePage() {
  const [settings, popular, recent, editorChoice, testimonials, trustLogos] =
    await Promise.all([
      getSiteSettings(),
      getMostPopularProducts(),
      getRecentProducts(3),
      getEditorChoiceProducts(),
      getTestimonials(),
      getTrustLogos(),
    ])

  return (
    <>
      <Hero settings={settings} />
      <ProductGrid heading="Most Popular" products={popular} layout="popular" />
      <ProductGrid heading="Recent Launched" products={recent} layout="recent" />
      <ProductGrid heading="Editor Choice" products={editorChoice} layout="editor" />
      <Testimonials settings={settings} testimonials={testimonials} />
      <TrustMarquee settings={settings} logos={trustLogos} />
      <GetInTouch settings={settings} />
      <LaunchCta settings={settings} />
    </>
  )
}
