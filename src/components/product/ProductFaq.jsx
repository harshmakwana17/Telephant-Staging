'use client'

import { useRef, useState } from 'react'
import { PortableText } from 'next-sanity'

import { ChevronDownIcon } from '@/components/ui/Icons'

/**
 * Accordion from the product page. One panel open at a time, height animated
 * 0 -> scrollHeight -> auto so the panel can still grow after the transition,
 * which is what the export's script did by hand.
 */
export function ProductFaq({ faqs = [] }) {
  const [openKey, setOpenKey] = useState(faqs[0]?._key ?? null)
  const panelRefs = useRef({})

  const setPanelRef = (key) => (element) => {
    panelRefs.current[key] = element
  }

  const collapse = (key) => {
    const panel = panelRefs.current[key]
    if (!panel) return
    // From `auto` a transition would not run, so pin the measured height first.
    panel.style.height = `${panel.scrollHeight}px`
    requestAnimationFrame(() => {
      panel.style.height = '0px'
    })
  }

  const expand = (key) => {
    const panel = panelRefs.current[key]
    if (!panel) return
    panel.style.height = '0px'
    requestAnimationFrame(() => {
      panel.style.height = `${panel.scrollHeight}px`
    })
  }

  const handleToggle = (key) => {
    if (openKey === key) {
      collapse(key)
      setOpenKey(null)
      return
    }
    if (openKey) collapse(openKey)
    setOpenKey(key)
    // Let React apply `is-open` before measuring, so padding/margin are included.
    requestAnimationFrame(() => expand(key))
  }

  // Release the fixed height once open, so long content is not clipped.
  const handleTransitionEnd = (key) => {
    const panel = panelRefs.current[key]
    if (panel && openKey === key) panel.style.height = 'auto'
  }

  if (!faqs.length) return null

  return (
    <div className="faq_wrapper">
      {faqs.map((faq, index) => {
        const isOpen = openKey === faq._key
        return (
          <div
            className={[
              'dropdown',
              index === 0 && 'is-top-border',
              isOpen && 'is-open',
            ]
              .filter(Boolean)
              .join(' ')}
            key={faq._key}
          >
            <div
              className="dropdown_toggle"
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={() => handleToggle(faq._key)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  handleToggle(faq._key)
                }
              }}
            >
              <div>{faq.question}</div>
              <ChevronDownIcon />
            </div>

            <div
              className="navigation"
              ref={setPanelRef(faq._key)}
              onTransitionEnd={() => handleTransitionEnd(faq._key)}
              style={{ height: isOpen ? 'auto' : 0 }}
            >
              <FaqBody faq={faq} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

/**
 * Sanity stores the body as Portable Text; the baked-in fallback content uses a
 * plain string, so handle both.
 */
function FaqBody({ faq }) {
  if (Array.isArray(faq.answer) && faq.answer.length > 0) {
    return <PortableText value={faq.answer} />
  }
  if (faq.answerText) {
    return (
      <>
        {faq.answerText.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </>
    )
  }
  return null
}
