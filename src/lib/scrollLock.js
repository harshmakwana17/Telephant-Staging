/**
 * Page scroll lock for overlays (drawers, modals).
 *
 * `overflow: hidden` on <body> is not enough on this site: Lenis
 * (components/motion/SmoothScroll.jsx) moves the page itself on wheel input,
 * so it has to be paused as well. SmoothScroll registers its instance here.
 *
 * Locks are counted, so two overlays open at once only release the page when
 * both have closed. The scrollbar's width is added as padding while locked so
 * the page doesn't shift sideways when the scrollbar disappears.
 */
let lenis = null
let locks = 0

export function registerLenis(instance) {
  lenis = instance
}

export function lockScroll() {
  locks += 1
  if (locks > 1) return

  const html = document.documentElement
  const scrollbar = window.innerWidth - html.clientWidth
  html.style.overflow = 'hidden'
  if (scrollbar > 0) html.style.paddingRight = `${scrollbar}px`
  lenis?.stop()
}

export function unlockScroll() {
  if (locks === 0) return
  locks -= 1
  if (locks > 0) return

  const html = document.documentElement
  html.style.overflow = ''
  html.style.paddingRight = ''
  lenis?.start()
}
