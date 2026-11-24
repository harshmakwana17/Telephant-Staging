import { Button } from '@/components/ui/Button'
import { TemplateCard } from '@/components/ui/TemplateCard'

/**
 * The "Most Popular" / "Recent Drops" blocks. Both used identical markup in
 * the export apart from the grid class and heading, so they share a component.
 *
 * layout: 'popular' (4-up) | 'recent' (3-up)
 */
export function ProductGrid({
  eyebrow = 'More Templates',
  heading,
  products = [],
  layout = 'recent',
  viewAllHref = '/products',
  sectionClassName,
}) {
  if (!products.length) return null

  const section = sectionClassName || (layout === 'popular' ? 'section_most_popular' : 'section_recent_launch')
  const grid =
    layout === 'popular'
      ? 'most_popular_template'
      : layout === 'editor' || layout === 'editorChoice'
      ? 'editor_choice_card_wrap'
      : 'recent_launch_card_wrap'

  return (
    <section className={section}>
      <div className="padding-global">
        <div className="container-large">
          <div className="template_wrapper">
            <div className="template_heading_wrap">
              <div className="template_heading">
                <div data-animate="fade-up">{eyebrow}</div>
                <h2 className="heading-style-h3" data-animate="words" data-animate-delay="80">
                  {heading}
                </h2>
              </div>
              <Button
                href={viewAllHref}
                variant="secondary"
                className="has-animated-underline"
                data-animate="fade-up"
                data-animate-delay="200"
              >
                View All
              </Button>
            </div>

            <div className={grid} data-animate="stagger">
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
  )
}
