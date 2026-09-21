import { GetInTouch } from '@/components/sections/GetInTouch'
import { TemplateFilter } from '@/components/product/TemplateFilter'
import { getAllProducts, getSiteSettings } from '@/lib/content'

export const metadata = {
  title: 'All Templates',
  description:
    'Browse every Telephant telehealth and wellness website template.',
}

export default async function ProductsPage() {
  const [products, settings] = await Promise.all([getAllProducts(), getSiteSettings()])

  return (
    <>
      <section className="product_list-hero">
        <div className="padding-global">
          <div className="container-large">
            <TemplateFilter products={products} />
          </div>
        </div>
      </section>

      <GetInTouch settings={settings} />
    </>
  )
}
