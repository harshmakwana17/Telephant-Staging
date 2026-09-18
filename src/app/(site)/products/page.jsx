import { LaunchCta } from '@/components/sections/LaunchCta'
import { TemplateCard } from '@/components/ui/TemplateCard'
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
      <section className="section_most_popular">
        <div className="padding-global">
          <div className="container-large">
            <div className="template_wrapper">
              <div className="template_heading_wrap">
                <div className="template_heading">
                  <div data-animate="fade-up">Browse</div>
                  <h1 className="heading-style-h3" data-animate="words" data-animate-delay="80">
                    All Templates
                  </h1>
                </div>
              </div>

              <div className="most_popular_template" data-animate="stagger">
                {products.map((product) => (
                  <div key={product._id || product.slug}>
                    <TemplateCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LaunchCta settings={settings} />
    </>
  )
}
