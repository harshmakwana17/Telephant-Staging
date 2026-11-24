import { GetInTouch } from '@/components/sections/GetInTouch'
import { TemplateFilter } from '@/components/product/TemplateFilter'
import { getAllProducts, getSiteSettings } from '@/lib/content'

export const metadata = {
  title: 'All Templates',
  description:
    'Browse every Telephant telehealth and wellness website template.',
}

// `?category=weight-loss` (etc.) opens the Templates page on that tab - used by
// the footer SHOP links. Unknown values fall back to "All".
export default async function ProductsPage({ searchParams }) {
  const [products, settings, params] = await Promise.all([
    getAllProducts(),
    getSiteSettings(),
    searchParams,
  ])
  const category = typeof params?.category === 'string' ? params.category : undefined

  return (
    <>
      <section className="product_list-hero">
        <div className="padding-global">
          <div className="container-large">
            <TemplateFilter products={products} initialCategory={category} />
          </div>
        </div>
      </section>

      <GetInTouch settings={settings} />
    </>
  )
}
