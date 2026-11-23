'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import 'lenis/dist/lenis.css'

import { registerLenis } from '@/lib/scrollLock'

gsap.registerPlugin(ScrollTrigger)

/**
 * Lenis smooth scrolling, driven by GSAP's ticker rather than its own loop.
 *
 * One clock for both means ScrollTrigger reads the same scroll position Lenis
 * just rendered - running them on separate requestAnimationFrame loops makes
 * scroll-linked animations lag a frame behind and jitter.
 *
 * Lenis only smooths mouse wheels; touch scrolling stays native. It is skipped
 * entirely for users who ask their OS for reduced motion.
 */
export function SmoothScroll() {
  const pathname = usePathname()
  const lenisRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ autoRaf: false })
    lenisRef.current = lenis
    // Lets overlays pause smooth scrolling - see lib/scrollLock.js.
    registerLenis(lenis)

    const stopSyncing = lenis.on('scroll', ScrollTrigger.update)
    const tick = (time) => lenis.raf(time * 1000) // GSAP time is in seconds
    gsap.ticker.add(tick)
    // GSAP normally skips ahead after a dropped frame; with Lenis that shows up
    // as a visible jump in scroll position.
    gsap.ticker.lagSmoothing(0)

    return () => {
      stopSyncing()
      gsap.ticker.remove(tick)
      gsap.ticker.lagSmoothing(500, 33) // GSAP's defaults
      lenis.destroy()
      lenisRef.current = null
      registerLenis(null)
    }
  }, [])

  // On navigation, Next.js scrolls the new page to the top while committing it.
  // A smooth scroll still easing out from the previous page would undo that:
  // Lenis ignores native scrolling mid-animation, so it would drag the new page
  // down to the old target. Cancel it and carry on from where Next left the page.
  // A layout effect, so this lands in the same commit, before Lenis's next frame
  // - and after Next's own scroll, because this renders after the page.
  useLayoutEffect(() => {
    const lenis = lenisRef.current
    if (!lenis?.isSmooth) return
    // Lenis has no public cancel; stopping resets it to the current position.
    lenis.stop()
    lenis.start()
  }, [pathname])

  return null
}
