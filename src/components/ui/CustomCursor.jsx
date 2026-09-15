'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Custom Cursor component strictly active for product cards (.template_card):
 * - Default browser cursor remains ON.
 * - Product Card Hover: Morphs smoothly into black rounded pill (border-radius: 120px) with "View →".
 */
export function CustomCursor() {
  const cursorRef = useRef(null)
  const posRef = useRef({
    targetX: -100,
    targetY: -100,
    currentX: -100,
    currentY: -100,
  })

  const [cursorState, setCursorState] = useState({
    visible: false,
    hoverType: null, // null | 'card'
    text: 'View',
  })

  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    let animationFrameId
    const pos = posRef.current

    const updatePosition = () => {
      const lerp = 0.18
      pos.currentX += (pos.targetX - pos.currentX) * lerp
      pos.currentY += (pos.targetY - pos.currentY) * lerp

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.currentX}px, ${pos.currentY}px, 0) translate(-50%, -50%)`
      }

      animationFrameId = requestAnimationFrame(updatePosition)
    }

    animationFrameId = requestAnimationFrame(updatePosition)

    const handlePointerMove = (e) => {
      pos.targetX = e.clientX
      pos.targetY = e.clientY

      setCursorState((prev) => (prev.visible ? prev : { ...prev, visible: true }))
    }

    const handlePointerOver = (e) => {
      const target = e.target
      if (!target || !(target instanceof HTMLElement)) return

      const cardEl = target.closest(
        '[data-cursor-text], [data-cursor="card"], .template_card'
      )
      if (cardEl) {
        const customText = cardEl.getAttribute('data-cursor-text') || 'View'
        setCursorState({
          visible: true,
          hoverType: 'card',
          text: customText,
        })
        return
      }

      setCursorState((prev) => {
        if (prev.hoverType === null) return prev
        return { visible: true, hoverType: null, text: 'View' }
      })
    }

    const handleMouseLeave = () => {
      setCursorState((prev) => ({ ...prev, visible: false }))
    }

    const handleMouseEnter = () => {
      setCursorState((prev) => ({ ...prev, visible: true }))
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerover', handlePointerOver, { passive: true })
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerover', handlePointerOver)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`rico-cursor ${cursorState.visible ? 'is-visible' : ''} ${
        cursorState.hoverType ? `is-${cursorState.hoverType}` : ''
      }`}
    >
      <div className="rico-cursor-inner">
        <p className="rico-cursor-text">{cursorState.text}</p>
        <div className="rico-cursor-arrow-wrap">
          <svg
            className="rico-cursor-arrow"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 7V8.2C20 9.88016 20 10.7202 19.673 11.362C19.3854 11.9265 18.9265 12.3854 18.362 12.673C17.7202 13 16.8802 13 15.2 13H4M8 17L4 13L8 9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
