'use client'

import { useMemo, useState } from 'react'

/**
 * Licence picker, add-on checkboxes and the live total.
 *
 * The `name` attributes are load-bearing: the export's custom CSS styles these
 * controls via `input[name="Licence Type"]` and `input[name="Add ons Plan"]`,
 * so renaming them silently drops the styling.
 *
 * Checkout itself is a stub - see the TODO on handleBuy.
 */
export function ProductPurchase({ licenses = [], addOns = [] }) {
  const [licenseKey, setLicenseKey] = useState(licenses[0]?._key ?? null)
  const [selectedAddOns, setSelectedAddOns] = useState([])

  const total = useMemo(() => {
    const license = licenses.find((l) => l._key === licenseKey)
    const base = license?.price ?? 0
    const extras = addOns
      .filter((addOn) => selectedAddOns.includes(addOn._key))
      .reduce((sum, addOn) => sum + (addOn.price ?? 0), 0)
    return base + extras
  }, [licenses, licenseKey, addOns, selectedAddOns])

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

  return (
    <>
      {licenses.length > 0 ? (
        <div className="liecence_type_block" data-animate="fade-up" data-animate-on="load" data-animate-delay="150" data-animate-dur="500">
          <div>Licence Type</div>
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

      <button
        type="button"
        className="button buy-now-btn"
        onClick={handleBuy}
        data-animate="fade-up"
        data-animate-on="load"
        data-animate-delay="150"
        data-animate-dur="500"
      >
        {/* Label left, live total right - both roll on hover like every other
            button (.button:hover .btn_roll_* in globals.css). */}
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
      </button>

      {addOns.length > 0 ? (
        <div className="add_plan_block" data-animate="fade-up" data-animate-on="load" data-animate-delay="200" data-animate-dur="500">
          <div>Add ons Plan</div>
          <div className="add_plan_wrapper">
            {addOns.map((addOn) => (
              <label className="label" key={addOn._key}>
                <div className="plan_select">
                  <div className="plan_select_details">
                    <div className="plan_select_block">
                      <input
                        type="checkbox"
                        name="Add ons Plan"
                        value={addOn.name}
                        checked={selectedAddOns.includes(addOn._key)}
                        onChange={() => toggleAddOn(addOn._key)}
                      />
                      <div>{addOn.name}</div>
                    </div>
                    <div className="plan_select_block">
                      {addOn.compareAtPrice ? (
                        <div className="mrp">${addOn.compareAtPrice}</div>
                      ) : null}
                      <div>${addOn.price}</div>
                    </div>
                  </div>

                  {(addOn.benefits || []).length > 0 ? (
                    <div className="plan_benifits_wrapper">
                      {addOn.benefits.map((benefit) => (
                        <div className="plan_benifit_details" key={benefit}>
                          <div className="plan_benifit_dot" />
                          <div>{benefit}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </label>
            ))}
          </div>
        </div>
      ) : null}
    </>
  )
}
