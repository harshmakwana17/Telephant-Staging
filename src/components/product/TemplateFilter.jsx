'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import { TemplateCard } from '@/components/ui/TemplateCard'
import { FILTER_CATEGORIES } from '@/lib/filterCategories'

/**
 * Category filter for the templates listing, styled as the page's hero: big
 * tabs (All / Weight Loss / Lab & Diagnostic / D2C E-commerce) with live
 * counts. Clicking one filters the grid below.
 *
 * Each product's "Filter categories" checkboxes in Studio decide which tabs it
 * appears under (a product can be in several); the tab list itself lives in
 * lib/filterCategories.js. Counts are derived, so they always match the data.
 * Client component because the filtering is interactive.
 *
 * On mobile the hero tabs stack vertically; once they scroll out of view a
 * compact, horizontally-scrollable bar sticks to the top with the active tab
 * centred. Both share the same active state.
 */
export function TemplateFilter({ products = [], initialCategory }) {
  const categories = useMemo(
    () => [
      { key: 'all', label: 'All', items: products },
      ...FILTER_CATEGORIES.map(({ value, title }) => ({
        key: value,
        label: title,
        items: products.filter((p) => p.filterCategories?.includes(value)),
      })),
    ],
    [products]
  )

  // Opens on `?category=` when it names a real tab (footer SHOP links), else All.
  const startKey = categories.some((c) => c.key === initialCategory) ? initialCategory : 'all'
  const [active, setActive] = useState(startKey)
  const current = categories.find((c) => c.key === active) || categories[0]

  // Follow the URL when a category link is clicked while already on this page
  // (same-route navigation keeps this component mounted). Adjusting state
  // during render is React's recommended pattern for this, not an effect.
  const [lastStartKey, setLastStartKey] = useState(startKey)
  if (lastStartKey !== startKey) {
    setLastStartKey(startKey)
    setActive(startKey)
  }

  // Sticky mobile bar: shown once the hero tabs scroll above the viewport.
  const heroRef = useRef(null)
  const stickyScrollRef = useRef(null)
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const el = heroRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting), {
      threshold: 0,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Reset to "All" when the Templates nav link is clicked (Navbar dispatches
  // this). Clicking it while already on /products is a same-route navigation,
  // so React keeps this component mounted and its active tab would otherwise
  // persist.
  useEffect(() => {
    const reset = () => setActive('all')
    window.addEventListener('template-filter:reset', reset)
    return () => window.removeEventListener('template-filter:reset', reset)
  }, [])

  // Keep the active tab centred in the sticky bar's horizontal scroll.
  useEffect(() => {
    const scroller = stickyScrollRef.current
    if (!scroller || !stuck || scroller.offsetParent === null) return
    const activeEl = scroller.querySelector('.is-active')
    if (!activeEl) return
    scroller.scrollTo({
      left: activeEl.offsetLeft - (scroller.clientWidth - activeEl.offsetWidth) / 2,
      behavior: 'smooth',
    })
  }, [active, stuck])

  const renderTab = (cat) => (
    <button
      key={cat.key}
      type="button"
      className={`template_filter_tab${active === cat.key ? ' is-active' : ''}`}
      aria-pressed={active === cat.key}
      onClick={() => setActive(cat.key)}
    >
      <span className="template_filter_label">{cat.label}</span>
      <sup className="template_filter_count">{cat.items.length}</sup>
    </button>
  )

  return (
    <div className="template_wrapper">
      <div className="template_filter" ref={heroRef} data-animate="fade-up" data-animate-on="load">
        {/* The tabs carry the page title visually; keep a real h1 for SEO. */}
        <h1 className="template_filter_sronly">Browse templates</h1>
        <div className="template_filter_tabs" role="group" aria-label="Filter templates by category">
          {categories.map(renderTab)}
        </div>
      </div>

      {/* Mobile-only condensed bar (CSS hides it elsewhere). Sticks to the top
          on scroll, scrolls horizontally when it overflows, active tab centred. */}
      <div className={`product_list_stickybar${stuck ? ' is-visible' : ''}`} aria-hidden={!stuck}>
        <div className="product_list_stickybar_scroll" ref={stickyScrollRef}>
          {categories.map(renderTab)}
        </div>
      </div>

      {/* Always mounted so its data-animate init survives filter changes -
          re-mounting it would leave it hidden (motion.css) until the fallback. */}
      <div className="product_list" data-animate="stagger">
        {current.items.map((product) => (
          <div key={product._id || product.slug}>
            <TemplateCard product={product} />
          </div>
        ))}
      </div>

      {current.items.length === 0 ? (
        <p className="template_filter_empty">No templates in this category yet.</p>
      ) : null}
    </div>
  )
}
