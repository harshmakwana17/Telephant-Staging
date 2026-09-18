'use client'

import { Button } from '@/components/ui/Button'
import { RollingText } from '@/components/ui/RollingText'
import { imageUrl } from '@/sanity/image'

export function Hero({ settings }) {
  const socialProofImage = imageUrl(settings.heroSocialProofImage)
  const accentWord = settings.heroHeadingAccent || 'Agencies'


  return (
    <section className="section_hero">
      <div className="padding-global">
        <div className="container-large">
          <div className="hero_main_wrap">
            <div className="hero_wrap">
              <div className="hero_heading">
                <div className="hero_tag" data-animate="fade-up">
                  <div className="hero_tag_content">
                    <div className="tag_dot" />
                    <div>
                      {settings.heroTagText}{' '}
                      <span className="darkgrey-clr">{settings.heroTagAccent}</span>
                    </div>
                  </div>
                  <div>{settings.heroTagOffer} →</div>
                </div>

                {/* Split per part: SplitText rebuilds the markup it touches, so it only
                    gets the static text. RollingText re-renders every few
                    seconds and would stop updating if split - it rises inside
                    its own mask instead (revealDelay). */}
                <h1 className="heading-style-h1">
                  <span className="block_line" data-animate="words" data-animate-delay="100">
                    {settings.heroHeadingLine1}
                  </span>
                  <span className="hero_line_2">
                    <span data-animate="words" data-animate-delay="250">
                      {settings.heroHeadingLine2}{' '}
                    </span>
                    <RollingText
                      words={['Founders', 'Startups', 'Agencies', 'Bootstraps']}
                      interval={2500}
                      className="grey-clr"
                      revealDelay={450}
                    />
                  </span>
                </h1>

                <div className="hero_subtext" data-animate="fade-up" data-animate-delay="550">
                  {settings.heroSubtext}
                </div>
              </div>

              <div className="button_wrapper" data-animate="fade-up" data-animate-delay="700">
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
              className="hero_content_wrap"
              data-animate="fade-up"
              data-animate-delay="850"
            >
              <div className="hero_avatar_stack" data-animate="pop" data-animate-delay="1100">
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
