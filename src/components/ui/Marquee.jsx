'use client'

import { useEffect, useRef } from 'react'
import Splide from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

import '@splidejs/splide/css'

/**
 * Auto-scrolling marquee, matching the two Splide instances in the export:
 * the trust-logo strip and the product tag pills.
 *
 * Mounting through a ref rather than a global `.splide` selector means several
 * marquees can live on one page without fighting over the same class - the
 * export's product page had exactly that problem.
 */
export function Marquee({ className = '', speed = 1, children }) {
  const rootRef = useRef(null)

  useEffect(() => {
    if (!rootRef.current) return

    const splide = new Splide(rootRef.current, {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      autoWidth: true,
      arrows: false,
      pagination: false,
      autoScroll: { speed },
      // Splide's slide-by-slide autoplay, which this marquee doesn't use - the
      // continuous motion comes from the AutoScroll extension mounted below.
      //
      // Not handled: `prefers-reduced-motion`. AutoScroll never checks it, so
      // the strip keeps moving for users who turned motion off. To respect it,
      // pass `autoScroll: { autoStart: false }` when
      // matchMedia('(prefers-reduced-motion: reduce)').matches.
      autoplay: false,
    })

    splide.mount({ AutoScroll })
    return () => splide.destroy(true)
  }, [speed])

  return (
    <div className={`splide ${className}`.trim()} ref={rootRef}>
      <div className="splide__track">
        <div className="splide__list">{children}</div>
      </div>
    </div>
  )
}
