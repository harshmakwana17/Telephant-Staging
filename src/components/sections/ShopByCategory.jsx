'use client'

import { useMemo, useState } from 'react'

import { TemplateCard } from '@/components/ui/TemplateCard'
import { FILTER_CATEGORIES } from '@/lib/filterCategories'

const CARDS_PER_TAB = 3

/**
 * Homepage "Shop By Category" (Figma 718:2807): eyebrow + heading on the left,
 * category tabs with live counts on the right, and a 3-up grid of templates in
 * the selected category below.
 *
 * Categories come from lib/filterCategories.js and each product's "Filter
 * categories" ticks in Studio - the same data as the Templates page tabs.
 * Opens on the first category that has templates. Hidden when none do.
 */
export function ShopByCategory({ products = [], eyebrow = 'More Templates', heading = 'Shop By Category' }) {
  const categories = useMemo(
    () =>
      FILTER_CATEGORIES.map(({ value, title }) => ({
        key: value,
        label: title,
        items: products.filter((p) => p.filterCategories?.includes(value)),
      })),
    [products]
  )

  const firstWithItems = categories.find((c) => c.items.length)?.key
  const [active, setActive] = useState(firstWithItems)

  if (!firstWithItems) return null

  const current = categories.find((c) => c.key === active) || categories[0]

  return (
    <section className="section_shop_category">
      <div className="padding-global">
        <div className="container-large">
          <div className="template_wrapper">
            <div className="shop_cat_head">
              <div className="template_heading">
                <div data-animate="fade-up">{eyebrow}</div>
                <h2 className="heading-style-h3" data-animate="words" data-animate-delay="80">
                  {heading}
                </h2>
              </div>

              <div
                className="shop_cat_tabs"
                role="group"
                aria-label="Filter templates by category"
                data-animate="fade-up"
                data-animate-delay="200"
              >
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    type="button"
                    className={`shop_cat_tab${active === cat.key ? ' is-active' : ''}`}
                    aria-pressed={active === cat.key}
                    onClick={() => setActive(cat.key)}
                  >
                    <span className="shop_cat_label">{cat.label}</span>
                    <sup className="shop_cat_count">{cat.items.length}</sup>
                  </button>
                ))}
              </div>
            </div>

            {/* Always mounted so its data-animate init survives tab changes. */}
            <div className="recent_launch_card_wrap" data-animate="stagger">
              {current.items.slice(0, CARDS_PER_TAB).map((product) => (
                <div key={product._id || product.slug}>
                  <TemplateCard product={product} />
                </div>
              ))}
            </div>

            {current.items.length === 0 ? (
              <p className="template_filter_empty">No templates in this category yet.</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
