'use client'

import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

/**
 * Scroll animations, driven by data attributes - modelled on rho.co.
 *
 *   <h2 data-animate="words">Most Popular</h2>
 *   <p data-animate="fade-up" data-animate-delay="200">...</p>
 *
 *   fade-up  Opacity 0 -> 1 while rising 14px. Paragraphs, tags, buttons, blocks.
 *   fade     Opacity only.
 *   words    SplitText: each word slides up inside its own mask. Headings.
 *            STATIC TEXT ONLY - see the note on the preset below.
 *   stagger  The element's direct children fade up in sequence as they scroll
 *            into view, row by row. Card grids and lists.
 *   pop      Direct children scale up from their bottom edge with a bounce.
 *   rise     The element slides up from below inside its parent, which must
 *            clip (overflow: hidden) - for content that already sits in a mask.
 *
 *   data-animate-delay  Milliseconds, like AOS used. Sequence elements that
 *                       enter together (e.g. the hero) by staggering this.
 *
 * Everything plays once. Elements are hidden by styles/motion.css until this
 * sets their start state, so nothing flashes in its final position first.
 * Users who ask their OS for reduced motion get the page with no animation.
 */

const START = 'top 88%'
const RISE = 14 // px - rho.co's offset for text and blocks
const EASE = 'power3.out'
const EASE_REVEAL = 'power4.out'

// Animation-owned styles to drop once an animation finishes, so no stray
// transform lingers (it would create a stacking context). Deliberately not
// 'all': some animated elements carry React `style` props that must survive.
const CLEAR = 'transform,opacity,visibility'

const onEnter = (trigger) => ({ trigger, start: START, toggleActions: 'play none none none', once: true })

const PRESETS = {
  'fade-up': (el, delay) => {
    gsap
      .timeline({ scrollTrigger: onEnter(el) })
      .from(el, { autoAlpha: 0, y: RISE, duration: 0.9, ease: EASE, clearProps: CLEAR }, delay)
  },

  fade: (el, delay) => {
    gsap
      .timeline({ scrollTrigger: onEnter(el) })
      .from(el, { autoAlpha: 0, duration: 1, ease: 'power2.out', clearProps: CLEAR }, delay)
  },

  /*
   * SplitText rebuilds the element's markup, and reverts by resetting
   * innerHTML - which swaps out the DOM nodes React is holding. Harmless for
   * static text, but anything React re-renders inside the element afterwards
   * goes to detached nodes and silently stops updating. For headings with a
   * live child (e.g. the hero's RollingText), put `words` on the static parts
   * only and use `rise` for the live part.
   *
   * The split is reverted once the words land: the per-word masks clip
   * descenders (g, y, p) at rest, and plain text selects and reflows better.
   */
  words: (el, delay) => {
    const split = SplitText.create(el, { type: 'words', mask: 'words' })
    gsap
      .timeline({ scrollTrigger: onEnter(el), onComplete: () => split.revert() })
      .from(split.words, { yPercent: 110, duration: 1.1, ease: EASE_REVEAL, stagger: 0.06 }, delay)
  },

  stagger: (el, delay, contextSafe) => {
    const items = gsap.utils.toArray(el.children)
    gsap.set(items, { autoAlpha: 0, y: RISE })
    ScrollTrigger.batch(items, {
      start: START,
      once: true,
      // Batches of items entering together animate as a group, so a grid
      // reveals row by row instead of all at once.
      onEnter: contextSafe((batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: EASE,
          stagger: 0.1,
          delay,
          clearProps: CLEAR,
        })
      ),
    })
  },

  pop: (el, delay) => {
    gsap.timeline({ scrollTrigger: onEnter(el) }).from(
      el.children,
      {
        autoAlpha: 0,
        scale: 0,
        transformOrigin: 'center bottom',
        duration: 0.55,
        ease: 'back.out(1.7)',
        stagger: 0.12,
        clearProps: CLEAR,
      },
      delay
    )
  },

  rise: (el, delay) => {
    gsap
      .timeline({ scrollTrigger: onEnter(el.parentElement) })
      .from(el, { yPercent: 110, duration: 1.1, ease: EASE_REVEAL, clearProps: CLEAR }, delay)
  },
}

export function ScrollAnimations() {
  // Re-run on every navigation: the new page's elements need setting up, and
  // useGSAP reverts the previous page's animations, triggers and splits first.
  const pathname = usePathname()

  useGSAP(
    (context, contextSafe) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const elements = gsap.utils.toArray('[data-animate]:not([data-animate-init])')

      elements.forEach((el) => {
        const preset = PRESETS[el.dataset.animate]
        // Already visible means motion.css's fallback timer revealed it (very
        // slow load or a cold dev compile). Animating now would hide it again
        // and replay it, so leave it where it is.
        const alreadyShown = getComputedStyle(el).visibility === 'visible'

        if (preset && !alreadyShown) {
          preset(el, (Number(el.dataset.animateDelay) || 0) / 1000, contextSafe)
        } else if (!preset && process.env.NODE_ENV !== 'production') {
          console.warn(`[motion] unknown data-animate="${el.dataset.animate}"`, el)
        }

        // Hands visibility over from motion.css to GSAP's inline styles.
        el.setAttribute('data-animate-init', '')
      })

      // Images without set dimensions, fonts and the FAQ accordion all change
      // the page height after load, which leaves trigger positions stale.
      let refreshTimer
      const heightWatcher = new ResizeObserver(() => {
        clearTimeout(refreshTimer)
        refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200)
      })
      heightWatcher.observe(document.body)

      return () => {
        clearTimeout(refreshTimer)
        heightWatcher.disconnect()
        elements.forEach((el) => el.removeAttribute('data-animate-init'))
      }
    },
    { dependencies: [pathname], revertOnUpdate: true }
  )

  return null
}
