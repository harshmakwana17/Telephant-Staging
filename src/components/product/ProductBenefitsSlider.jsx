'use client'

import { useEffect, useRef } from 'react'
import Splide from '@splidejs/splide'

import '@splidejs/splide/css'

import { imageUrl } from '@/sanity/image'

/**
 * Benefits slider (all breakpoints): auto-playing slide-by-slide (like the
 * product gallery), draggable, no pagination. Used at every size so any number
 * of benefits works - a static row wraps/overflows once there are more than a
 * few.
 *
 * The original benefits are passed straight through - type 'slide' keeps zero
 * clones (no duplicated slides); rewind sends autoplay back to the start when
 * it reaches the end.
 */
export function ProductBenefitsSlider({ benefits = [] }) {
  const rootRef = useRef(null)

  useEffect(() => {
    if (!rootRef.current) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const splide = new Splide(rootRef.current, {
      type: 'slide',
      rewind: true,
      autoWidth: true,
      gap: '1rem',
      drag: true,
      arrows: false,
      pagination: false,
      autoplay: !reduceMotion,
      interval: 3000,
      speed: 600,
      pauseOnHover: true,
      pauseOnFocus: true,
    })

    splide.mount()
    return () => splide.destroy(true)
  }, [])

  if (!benefits.length) return null

  return (
    <div className="benifit_slider splide" ref={rootRef} aria-hidden="true">
      <div className="splide__track">
        <ul className="splide__list">
          {benefits.map((benefit, index) => {
            const icon = imageUrl(benefit.icon, 64)
            return (
              <li className="splide__slide" key={benefit._key || index}>
                <div className="benifit_block">
                  {icon ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={icon} loading="lazy" alt="" />
                  ) : null}
                  <div>{benefit.label}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
