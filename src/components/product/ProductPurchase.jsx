'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

import { HowItWorksDrawer, InfoIcon } from './HowItWorksDrawer'

const CONTACT_EMAIL = 'hello@telephant.store'

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2.4 6.3l2.3 2.3 4.9-5.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.5 7L4 12l4.5 5M15.5 7L20 12l-4.5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Licence picker, add-on plans and the live total.
 *
 * The licence radio `name="Licence Type"` is load-bearing: the export's custom
 * CSS styles it via `input[name="Licence Type"]`.
 *
 * Add-ons: "Update Branding" is a selectable plan that adds to the Purchase Now
 * total and drives the purchase link; "Get Frontend Development" is an on-demand
 * enquiry (Contact Us), not added to the cart. The "How It Works?" trigger and
 * the Update Branding info icon open the shared process drawer.
 *
 * Checkout itself is a stub - see the TODO on handleBuy.
 */
export function ProductPurchase({ licenses = [], addOns = [], purchaseLink = null }) {
  const [licenseKey, setLicenseKey] = useState(licenses[0]?._key ?? null)
  const [selectedAddOns, setSelectedAddOns] = useState([])
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerTab, setDrawerTab] = useState('branding')

  const openDrawer = (tab = 'branding') => {
    setDrawerTab(tab)
    setDrawerOpen(true)
  }

  // First add-on is the selectable "Update Branding" plan; second is the
  // on-demand "Get Frontend Development" enquiry card.
  const branding = addOns[0] || null
  const frontend = addOns[1] || null

  const total = useMemo(() => {
    const license = licenses.find((l) => l._key === licenseKey)
    const base = license?.price ?? 0
    const extras = addOns
      .filter((addOn) => selectedAddOns.includes(addOn._key))
      .reduce((sum, addOn) => sum + (addOn.price ?? 0), 0)
    return base + extras
  }, [licenses, licenseKey, addOns, selectedAddOns])

  // The Purchase link depends on the selection. Each add-on link row targets one
  // add-on or a combination; a row applies only when ALL its add-ons are ticked.
  // The most specific matching row wins (most add-ons listed); ties break by the
  // "Add-on plans" order. Falls back to the licence's own link, then the
  // product-level link.
  const href = useMemo(() => {
    const license = licenses.find((l) => l._key === licenseKey)
    const links = license?.addOnLinks || []

    const selectedNames = new Set(
      addOns.filter((a) => selectedAddOns.includes(a._key)).map((a) => a.name)
    )
    const planIndex = new Map(addOns.map((a, i) => [a.name, i]))

    let best = null
    let bestCount = -1
    let bestRank = Infinity
    for (const link of links) {
      const required = link.addOns?.length ? link.addOns : link.addOn ? [link.addOn] : []
      if (required.length === 0 || !link.url) continue
      if (!required.every((name) => selectedNames.has(name))) continue
      const rank = Math.min(...required.map((name) => planIndex.get(name) ?? Infinity))
      if (required.length > bestCount || (required.length === bestCount && rank < bestRank)) {
        best = link.url
        bestCount = required.length
        bestRank = rank
      }
    }

    return best || license?.purchaseLink || purchaseLink || null
  }, [licenses, licenseKey, addOns, selectedAddOns, purchaseLink])

  const isExternal = href ? /^https?:\/\//i.test(href) : false

  const toggleAddOn = (key) => {
    setSelectedAddOns((current) =>
      current.includes(key) ? current.filter((k) => k !== key) : [...current, key]
    )
  }

  const handleBuy = () => {
    // TODO: hand off to a checkout provider. Everything it needs is here:
    // { licenseKey, selectedAddOns, total }.
    console.info('Checkout stub', { licenseKey, selectedAddOns, total })
  }

  const formatPrice = (value) =>
    `$${Number(value).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`

  const brandingSelected = branding ? selectedAddOns.includes(branding._key) : false

  return (
    <>
      {licenses.length > 0 ? (
        <div className="liecence_type_block" data-animate="fade-up" data-animate-on="load" data-animate-delay="150" data-animate-dur="500">
          <div className="liecence_head">
            <div>Licence Type</div>
            <Link href="/license-agreement" className="view_license_link">
              View License Details
            </Link>
          </div>
          <div className="liecence_wrapper">
            {licenses.map((license) => (
              <label className="label" key={license._key}>
                <div className="liecence_type_select">
                  <div className="liencence_select_details">
                    <input
                      type="radio"
                      name="Licence Type"
                      value={license.name}
                      checked={licenseKey === license._key}
                      onChange={() => setLicenseKey(license._key)}
                    />
                    <div>{license.name}</div>
                    <div className="how_many_users">{license.seats}</div>
                  </div>
                  <div>{formatPrice(license.price)}</div>
                </div>
              </label>
            ))}
          </div>
        </div>
      ) : null}

      {/* Label left, live total right - both roll on hover like every other
          button (.button:hover .btn_roll_* in globals.css). Renders as a link
          when the selection resolves to a URL, otherwise the checkout stub. */}
      {(() => {
        const inner = (
          <>
            <div className="btn_roll_wrapper">
              <span className="btn_roll_ghost" aria-hidden="true">
                Purchase Now
              </span>
              <span className="btn_roll_default">Purchase Now</span>
              <span className="btn_roll_hover">Purchase Now</span>
            </div>

            <div className="btn_roll_wrapper">
              <span className="btn_roll_ghost" aria-hidden="true">
                {formatPrice(total)} USD
              </span>
              <span className="btn_roll_default">{formatPrice(total)} USD</span>
              <span className="btn_roll_hover">{formatPrice(total)} USD</span>
            </div>
          </>
        )
        const animate = {
          'data-animate': 'fade-up',
          'data-animate-on': 'load',
          'data-animate-delay': '150',
          'data-animate-dur': '500',
        }
        return href ? (
          <a
            href={href}
            className="button buy-now-btn"
            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            {...animate}
          >
            {inner}
          </a>
        ) : (
          <button type="button" className="button buy-now-btn" onClick={handleBuy} {...animate}>
            {inner}
          </button>
        )
      })()}

      {addOns.length > 0 ? (
        <div className="add_plan_block" data-animate="fade-up" data-animate-on="load" data-animate-delay="200" data-animate-dur="500">
          <div className="add_plan_head">
            <div>Add Ons Plan</div>
            <button
              type="button"
              className="hiw_header_trigger"
              onClick={() => openDrawer('branding')}
            >
              <InfoIcon />
              How It Works?
            </button>
          </div>

          <div className="addon_cards">
            {branding ? (
              <div
                className={`addon_brand${brandingSelected ? ' is-selected' : ''}`}
                role="button"
                tabIndex={0}
                aria-pressed={brandingSelected}
                onClick={() => toggleAddOn(branding._key)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    toggleAddOn(branding._key)
                  }
                }}
              >
                <div className="addon_row">
                  <div className="addon_name">
                    <span className="addon_check" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    <span>{branding.name}</span>
                    <button
                      type="button"
                      className="addon_info"
                      aria-label="How it works"
                      onClick={(event) => {
                        event.stopPropagation()
                        openDrawer('branding')
                      }}
                    >
                      <InfoIcon />
                    </button>
                  </div>
                  <div className="addon_price">
                    {branding.compareAtPrice ? (
                      <span className="addon_mrp">+${branding.compareAtPrice}</span>
                    ) : null}
                    <span className="addon_amt">+${branding.price}</span>
                  </div>
                </div>
                {(branding.benefits || []).length > 0 ? (
                  <div className="addon_feats">
                    {branding.benefits.map((benefit) => (
                      <span className="addon_feat" key={benefit}>
                        <i />
                        {benefit}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}

            {frontend ? (
              <div className="addon_front">
                <div className="addon_row">
                  <div className="addon_name">
                    <span className="addon_code" aria-hidden="true">
                      <CodeIcon />
                    </span>
                    <span>{frontend.name}</span>
                    <span className="addon_ondemand">ON-DEMAND</span>
                  </div>
                  <div className="addon_price addon_price-from">
                    <span className="addon_from">Starting from</span>
                    <span className="addon_amt">${frontend.price}</span>
                  </div>
                </div>
                {(frontend.benefits || []).length > 0 ? (
                  <div className="addon_feats">
                    {frontend.benefits.map((benefit) => (
                      <span className="addon_feat" key={benefit}>
                        <i />
                        {benefit}
                      </span>
                    ))}
                  </div>
                ) : null}
                <hr className="addon_sep" />
                <div className="addon_front_bottom">
                  <div className="addon_front_note">Final price depends on pages and scope.</div>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="addon_contact">
                    Contact Us
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <HowItWorksDrawer
        open={drawerOpen}
        initialTab={drawerTab}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  )
}
