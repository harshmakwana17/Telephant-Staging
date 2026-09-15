'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { MenuIcon } from '@/components/ui/Icons'
import { imageUrl } from '@/sanity/image'

/**
 * Port of the export's mobile-nav script. The original toggled a `menu-open`
 * class on .nav_container and wired up four listeners by hand; the CSS that
 * animates the drawer is unchanged, so React just owns the class now.
 */
export function Navbar({ settings }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (event) => {
      if (!containerRef.current?.contains(event.target)) setOpen(false)
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    // Snap back to the desktop layout if the drawer is open on resize.
    const handleResize = () => {
      if (window.innerWidth > 991) setOpen(false)
    }

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [open])

  const logo = imageUrl(settings.navLogo) || '/images/Frame-2147228265.svg'

  return (
    <div className="navbar">
      <div className="nav_component">
        <div className="padding-global">
          <div
            ref={containerRef}
            className={`nav_container${open ? ' menu-open' : ''}`}
          >
            <Link href="/" className="nav_brand w-inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" src={logo} alt="Telephant" className="nav_brand-logo" />
            </Link>

            <div className="nav_menu">
              <div className="nav_menu-links">
                {(settings.navLinks || []).map((link) => (
                  <Link
                    key={`${link.label}-${link.href}`}
                    href={link.href || '#'}
                    className="nav_menu_link"
                    // Matches the export: tapping a link closes the drawer.
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {settings.navButton?.label ? (
              <Link href={settings.navButton.href || '#'} className="nav_btn w-inline-block">
                <span className="btn_roll_wrapper">
                  <span className="btn_roll_ghost" aria-hidden="true">
                    {settings.navButton.label}
                  </span>
                  <span className="btn_roll_default">{settings.navButton.label}</span>
                  <span className="btn_roll_hover">{settings.navButton.label}</span>
                </span>
              </Link>
            ) : null}

            <div
              className="nav_menu-button"
              role="button"
              tabIndex={0}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
              onClick={(event) => {
                event.stopPropagation()
                setOpen((value) => !value)
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setOpen((value) => !value)
                }
              }}
            >
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

