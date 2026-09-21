'use client'

import { useEffect, useRef } from 'react'
import Splide from '@splidejs/splide'

import '@splidejs/splide/css'

import { imageUrl, imageSrcSet, imageAlt } from '@/sanity/image'

/**
 * Tablet + mobile product gallery carousel: autoplay, draggable, with
 * pagination dots underneath. Shown at <=991px (CSS); the desktop stacked
 * gallery (ProductGallery) is hidden there. One image per slide.
 *
 * Splide is also told to destroy itself at >=992px, so if it ever mounts above
 * the breakpoint it falls back to a plain list rather than a live carousel.
 */
export function ProductGalleryMobile({ gallery = [], title }) {
  const rootRef = useRef(null)

  useEffect(() => {
    if (!rootRef.current) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const splide = new Splide(rootRef.current, {
      type: 'loop',
      drag: true,
      arrows: false,
      pagination: false,
      autoplay: !reduceMotion,
      interval: 3500,
      speed: 600,
      pauseOnHover: true,
      pauseOnFocus: true,
      // Gap between slides: 0.5rem on mobile, 1rem on tablet (mobile-first).
      gap: '0.5rem',
      mediaQuery: 'min',
      breakpoints: {
        768: { gap: '1rem' },
        992: { destroy: true },
      },
    })

    splide.mount()
    return () => splide.destroy(true)
  }, [])

  if (!gallery.length) return null

  return (
    <div className="product_gallery_mobile splide" ref={rootRef} aria-label={`${title} gallery`}>
      <div className="splide__track">
        <ul className="splide__list">
          {gallery.map((image, index) => (
            <li className="splide__slide" key={index}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl(image, 1200)}
                srcSet={imageSrcSet(image)}
                sizes="100vw"
                alt={imageAlt(image, title)}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
