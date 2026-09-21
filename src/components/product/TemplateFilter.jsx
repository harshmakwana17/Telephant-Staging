'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import { TemplateCard } from '@/components/ui/TemplateCard'

// "Recent" has no flag on the product - it is the newest by publish date.
// Swap this for an isRecent flag or a date window later if the client wants.
const RECENT_COUNT = 3

/**
 * Category filter for the templates listing, styled as the page's hero: big
 * tabs (All / Popular / Editor Choice / Recent) with live counts. Clicking one
 * filters the grid below.
 *
 * Popular and Editor Choice come from per-product flags; Recent is the newest
 * `RECENT_COUNT` by publishedAt. Counts are derived, so they always match the
 * data. Client component because the filtering is interactive.
 *
 * On mobile the hero tabs stack vertically; once they scroll out of view a
 * compact, horizontally-scrollable bar sticks to the top with the active tab
 * centred. Both share the same active state.
 */
export function TemplateFilter({ products = [] }) {
  const categories = useMemo(() => {
    const byNewest = [...products].sort(
      (a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0)
    )
    return [
      { key: 'all', label: 'All', items: products },
      { key: 'popular', label: 'Popular', items: products.filter((p) => p.isMostPopular) },
      { key: 'editor', label: 'Editor Choice', items: products.filter((p) => p.isEditorChoice) },
      { key: 'recent', label: 'Recent', items: byNewest.slice(0, RECENT_COUNT) },
    ]
  }, [products])

  const [active, setActive] = useState('all')
  const current = categories.find((c) => c.key === active) || categories[0]

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
