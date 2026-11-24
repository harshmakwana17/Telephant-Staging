'use client'

import { useEffect, useMemo, useRef } from 'react'

/**
 * "Motion grid" hero background, modelled on wannathis.one/online-tools/motion-grid:
 * template cards placed on an invisible 3D sphere that rotates continuously
 * behind the hero copy.
 *
 * - Cards on the front of the sphere are large and bright and sweep one way;
 *   cards on the back are small and faint and drift the other way. As a card
 *   comes round to the front it grows - the perspective effect.
 * - No mouse interaction: the motion is a constant, endless rotation.
 * - Cards stay flat to the viewer (billboards); only position, scale, opacity
 *   and stacking change with depth.
 * - Cards passing directly behind the headline are dimmed so it stays
 *   readable on the light background.
 *
 * Honours prefers-reduced-motion (renders one still frame). The loop pauses
 * while the hero is off-screen. Decorative only: aria-hidden, no pointer events.
 */

const CARD_COUNT = 32
const CARD_WIDTH = 150 // px at scale 1 (a card at the very front)
const SPEED = 0.045 // radians per second around the vertical axis
const TILT = 0.32 // radians - tips the sphere forward so rows aren't flat
const CAMERA = 2.6 // perspective distance in sphere radii (smaller = stronger)

// Points spread evenly over a unit sphere (Fibonacci lattice).
function spherePoints(count) {
  const golden = Math.PI * (3 - Math.sqrt(5))
  return Array.from({ length: count }, (_, i) => {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = golden * i
    return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r }
  })
}

export function MotionGridBackground({ images = [] }) {
  const cards = useMemo(
    () =>
      images.length
        ? spherePoints(CARD_COUNT).map((p, i) => ({ ...p, src: images[i % images.length] }))
        : [],
    [images]
  )
  const rootRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const root = rootRef.current
    if (!root || !cards.length) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    let visible = true
    let width = root.clientWidth
    let height = root.clientHeight

    const cosT = Math.cos(TILT)
    const sinT = Math.sin(TILT)

    const render = (angle) => {
      const cx = width / 2
      const cy = height * 0.47
      // Stretch the sphere into an ellipse that fills the wide hero.
      const rx = width * 0.52
      const ry = height * 0.62
      const narrow = width < 768

      cards.forEach((card, i) => {
        const el = cardRefs.current[i]
        if (!el) return
        // Rotate around the vertical axis, then tip forward.
        const x1 = card.x * Math.cos(angle) + card.z * Math.sin(angle)
        const z1 = -card.x * Math.sin(angle) + card.z * Math.cos(angle)
        const y2 = card.y * cosT - z1 * sinT
        const z2 = card.y * sinT + z1 * cosT

        // Perspective: z2 = 1 is nearest the viewer, -1 the far side.
        const scale = CAMERA / (CAMERA - z2)
        const sx = cx + x1 * rx * scale
        const sy = cy + y2 * ry * scale
        const size = (narrow ? 0.6 : 1) * scale * 0.62

        // Depth fade: far side faint, front fully visible.
        const depth = (z2 + 1) / 2 // 0 far .. 1 near
        let opacity = 0.12 + 0.88 * Math.pow(depth, 1.6)
        // Dim cards passing behind the copy block (headline, paragraph,
        // buttons, social proof).
        const dx = (sx - cx) / (width * 0.34)
        const dy = (sy - height * 0.5) / (height * 0.42)
        const behindCopy = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy))
        opacity *= 1 - 0.9 * Math.min(1, behindCopy * 1.6)
        // Fade out under the navbar.
        opacity *= Math.min(1, Math.max(0, (sy - 40) / 90))

        el.style.transform = `translate3d(${sx.toFixed(1)}px, ${sy.toFixed(1)}px, 0) translate(-50%, -50%) scale(${size.toFixed(3)})`
        el.style.opacity = opacity.toFixed(3)
        el.style.zIndex = String(Math.round(depth * 100))
      })
    }

    const start = performance.now()
    const startAngle = 0.6
    const tick = (now) => {
      frame = requestAnimationFrame(tick)
      if (!visible) return
      render(startAngle + ((now - start) / 1000) * SPEED)
    }

    const ro = new ResizeObserver(() => {
      width = root.clientWidth
      height = root.clientHeight
      if (reduced) render(startAngle)
    })
    ro.observe(root)

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    io.observe(root)

    render(startAngle)
    root.classList.add('is-ready')
    if (!reduced) frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      ro.disconnect()
      io.disconnect()
    }
  }, [cards])

  if (!cards.length) return null

  return (
    <div className="motion_grid_bg" ref={rootRef} aria-hidden="true">
      {cards.map((card, i) => (
        <div
          key={i}
          className="motion_grid_card"
          style={{ width: `${CARD_WIDTH}px` }}
          ref={(el) => {
            cardRefs.current[i] = el
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={card.src} alt="" loading="lazy" draggable="false" />
        </div>
      ))}
    </div>
  )
}
