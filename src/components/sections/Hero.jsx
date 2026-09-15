'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '@/components/ui/Button'
import { RollingText } from '@/components/ui/RollingText'
import { imageUrl } from '@/sanity/image'

export function Hero({ settings }) {
  const socialProofImage = imageUrl(settings.heroSocialProofImage)
  const accentWord = settings.heroHeadingAccent || 'Agencies'

  const heroContentWrapRef = useRef(null)
  const avatarRefs = useRef([])

  useEffect(() => {
    const wrapEl = heroContentWrapRef.current
    if (!wrapEl) return

    const avatars = avatarRefs.current.filter(Boolean)
    if (!avatars.length) return

    // Initially hide avatars: scale 0, opacity 0, transformOrigin center bottom
    gsap.set(avatars, {
      scale: 0,
      opacity: 0,
      transformOrigin: 'center bottom',
    })

    let hasTriggered = false

    const animateAvatars = () => {
      if (hasTriggered) return
      hasTriggered = true

      // Wait 750ms so the AOS container fade-up animation completes first
      setTimeout(() => {
        gsap.to(avatars, {
          scale: 1,
          opacity: 1,
          duration: 0.55,
          stagger: 0.12,
          ease: 'back.out(1.7)', // Elastic scale 0 -> 1 bounce from center bottom
        })
      }, 750)
    }

    // AOS fires custom DOM event 'aos:in' on the element when triggered
    const handleAosIn = () => {
      animateAvatars()
    }

    wrapEl.addEventListener('aos:in', handleAosIn)

    // Observer to detect when AOS adds 'aos-animate' to heroContentWrap
    const observer = new MutationObserver(() => {
      if (wrapEl.classList.contains('aos-animate')) {
        animateAvatars()
      }
    })

    observer.observe(wrapEl, { attributes: true, attributeFilter: ['class'] })

    if (wrapEl.classList.contains('aos-animate')) {
      animateAvatars()
    }

    return () => {
      wrapEl.removeEventListener('aos:in', handleAosIn)
      observer.disconnect()
    }
  }, [])

  return (
    <section className="section_hero">
      <div className="padding-global">
        <div className="container-large">
          <div className="hero_main_wrap">
            <div className="hero_wrap">
              <div className="hero_heading">
                <div className="hero_tag" data-aos="fade-up">
                  <div className="hero_tag_content">
                    <div className="tag_dot" />
                    <div>
                      {settings.heroTagText}{' '}
                      <span className="darkgrey-clr">{settings.heroTagAccent}</span>
                    </div>
                  </div>
                  <div>{settings.heroTagOffer} →</div>
                </div>

                <h1 className="heading-style-h1" data-aos="fade-up" data-aos-delay="100">
                  <span className="block_line">{settings.heroHeadingLine1}</span>
                  <span className="hero_line_2">
                    {settings.heroHeadingLine2}{' '}
                    <RollingText
                      words={['Founders', 'Startups', 'Agencies', 'Bootstraps']}
                      interval={2500}
                      className="grey-clr"
                    />
                  </span>
                </h1>

                <div className="hero_subtext" data-aos="fade-up" data-aos-delay="200">
                  {settings.heroSubtext}
                </div>
              </div>

              <div className="button_wrapper" data-aos="fade-up" data-aos-delay="300">
                {(settings.heroButtons || []).map((button) => (
                  <Button
                    key={button.label}
                    href={button.href}
                    variant={button.primary ? 'primary' : 'default'}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
            </div>

            <div
              ref={heroContentWrapRef}
              className="hero_content_wrap"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="hero_avatar_stack">
                {[
                  '/images/hero-avatar-1.png',
                  '/images/hero-avatar-2.png',
                  '/images/hero-avatar-3.png',
                  '/images/hero-avatar-4.png',
                  '/images/hero-avatar-5.png',
                ].map((src, idx) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={idx}
                    ref={(el) => (avatarRefs.current[idx] = el)}
                    src={src}
                    alt=""
                    className="hero_avatar_item"
                    data-avatar-idx={idx}
                  />
                ))}
              </div>
              <div>{settings.heroSocialProof}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
