'use client'

import { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'

/**
 * Initialises AOS once for the app, mirroring the export's inline init.
 *
 * Nothing here re-runs on route change, and nothing needs to: AOS watches the
 * DOM with a MutationObserver and picks up `data-aos` elements that Next adds
 * during client-side navigation. Add `data-aos="..."` to any element and it
 * animates, on first load or after navigating.
 *
 * Not handled: `prefers-reduced-motion`. AOS animates regardless. Its `disable`
 * option accepts a function, e.g.
 *   disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
 */
export function AosProvider() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
    })
  }, [])

  return null
}
