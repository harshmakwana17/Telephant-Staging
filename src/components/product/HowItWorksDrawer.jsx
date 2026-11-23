'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { lockScroll, unlockScroll } from '@/lib/scrollLock'

// Existing destinations are reused for the contact/schedule/terms actions.
// TODO(client): swap SCHEDULE_HREF for a real scheduling link if one exists.
const CONTACT_HREF = 'mailto:sales@telephant.store'
const SCHEDULE_HREF = 'mailto:sales@telephant.store'
const TERMS_HREF = '/terms-and-conditions'

const TABS = [
  { key: 'branding', label: 'Update Branding' },
  { key: 'frontend', label: 'Frontend Development', badge: 'ON-DEMAND' },
]

const CONTENT = {
  branding: {
    steps: [
      {
        title: 'Select the Update Branding Add-on',
        desc: 'Add the Branding Pack to apply your brand identity to your selected template.',
      },
      {
        title: 'Get Your Template Copy',
        desc: "Once payment is complete, we'll deliver your selected template.",
      },
      {
        title: 'Share Your Brand Details',
        desc: "Once payment is complete, we'll deliver your selected template.",
        bullets: ['Colour Updates', 'Fonts & Typography', 'Logo Update'],
      },
      {
        title: 'Get Your Personalised Template',
        badge: 'Within 48 hrs',
        desc: (
          <>
            Get your branded template in <strong>2 business days</strong>, ready to use.
          </>
        ),
      },
    ],
    note: 'Note: Weekend orders are processed the next business day. Saturday orders begin Monday, with delivery by Tuesday EOD.',
  },
  frontend: {
    steps: [
      {
        title: 'Add Development Support',
        desc: (
          <>
            Choose a template and add <strong>Development Support</strong> at checkout.
          </>
        ),
      },
      {
        title: "What You'll Get",
        desc: 'Responsive frontend, preserving its original design with',
        bullets: ['Source Code', 'Mobile Responsive', 'Pixel-Perfect Implementation'],
      },
      {
        title: 'Estimated Timeline',
        badge: 'Within 7–10 business days',
        desc: 'Get your completed frontend code in 7–10 business days.',
      },
      {
        title: 'Need Help Getting Started?',
        help: true,
        desc: (
          <>
            Need help choosing a template or understanding development?{' '}
            <a href={CONTACT_HREF} className="hiw_inline-link">
              Contact Our Team
            </a>{' '}
            or
          </>
        ),
      },
    ],
    note: 'Note: This service covers frontend implementation only. CMS, backend, API, and third-party integrations are excluded.',
  },
}

export function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 7.2v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="8" cy="4.9" r="0.9" fill="currentColor" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 3.5l9 9M12.5 3.5l-9 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function HowItWorksDrawer({ open = false, onClose = () => {}, initialTab = 'branding' }) {
  const [active, setActive] = useState(initialTab)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Jump to the requested tab each time the drawer is opened.
  useEffect(() => {
    if (open) setActive(initialTab)
  }, [open, initialTab])

  // Lock page scroll (native and Lenis) while open.
  useEffect(() => {
    if (!open) return
    lockScroll()
    return unlockScroll
  }, [open])

  // Close on Escape while open.
  useEffect(() => {
    if (!open) return
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const tab = CONTENT[active]

  const drawer = (
    <div
      className={`hiw_overlay${open ? ' is-open' : ''}`}
      onClick={onClose}
      aria-hidden={!open}
    >
      <aside
        className={`hiw_drawer${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Add-ons — Our Process"
        data-lenis-prevent
        onClick={(event) => event.stopPropagation()}
      >
        <div className="hiw_header">
          <div className="hiw_top">
            <span className="hiw_tag">Add-ons</span>
            <button
              type="button"
              className="hiw_close"
              onClick={onClose}
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>

          <p className="hiw_intro">
            72% Client buy Branding pack | 50% Client buy Frontend Developement
          </p>
          <h2 className="hiw_heading">Our Process</h2>

          <div className="hiw_tabs" role="tablist">
            {TABS.map((item) => (
              <button
                key={item.key}
                type="button"
                role="tab"
                aria-selected={active === item.key}
                className={`hiw_tab${active === item.key ? ' is-active' : ''}`}
                onClick={() => setActive(item.key)}
              >
                {item.label}
                {item.badge ? <span className="hiw_ondemand">{item.badge}</span> : null}
              </button>
            ))}
          </div>
        </div>

        <div className={`hiw_body is-${active}`}>
          {tab.steps.map((step, index) => (
            <div key={step.title} className={`hiw_row${step.help ? ' is-help' : ''}`}>
              <div className={`hiw_step${step.help ? ' is-help' : ''}`}>
                <div className={`hiw_num${step.help ? ' is-dark' : ''}`}>{index + 1}</div>
                <div className="hiw_step_body">
                  <div className="hiw_step_head">
                    <h3 className="hiw_step_title">{step.title}</h3>
                    {step.badge ? (
                    <span className="hiw_badge">
                      <span>{step.badge}</span>
                    </span>
                  ) : null}
                  </div>
                  <p className="hiw_step_desc">{step.desc}</p>
                  {step.bullets ? (
                    <div className="hiw_bullets">
                      {step.bullets.map((bullet) => (
                        <span className="hiw_bullet" key={bullet}>
                          <i />
                          {bullet}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
                {step.help ? (
                  <a href={SCHEDULE_HREF} className="hiw_schedule">
                    Schedule call
                  </a>
                ) : null}
              </div>
            </div>
          ))}

          <p className="hiw_note">{tab.note}</p>
        </div>

        <div className="hiw_footer">
          <p className="hiw_footer_text">
            Add-ons are optional and can be selected at checkout. Questions?{' '}
            <a href={CONTACT_HREF} className="hiw_footer_contact">
              Contact our support team.
            </a>
          </p>
          <a href={TERMS_HREF} className="hiw_footer_link">
            Terms &amp; Condition
          </a>
        </div>
      </aside>
    </div>
  )

  return mounted ? createPortal(drawer, document.body) : null
}
