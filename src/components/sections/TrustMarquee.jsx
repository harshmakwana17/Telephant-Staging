import { Marquee } from '@/components/ui/Marquee'
import { imageUrl, imageAlt } from '@/sanity/image'

export function TrustMarquee({ settings, logos = [] }) {
  if (!logos.length) return null

  return (
    <section className="section_trust">
      <div className="padding-global">
        <div className="container-large">
          <div className="trust_main_wrapper">
            <h2 className="heading-style-h4" data-aos="fade-up">
              <span className="block_line">{settings.trustHeadingLine1}</span>{' '}
              <span className="trust_title_span">{settings.trustHeadingLine2}</span>
            </h2>

            <div className="trust_wrapper" data-aos="fade-up" data-aos-delay="100">
              <Marquee>
                {logos.map((logo) => (
                  <div className="splide__slide" key={logo._id}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageUrl(logo.logo, 200)}
                      loading="lazy"
                      alt={imageAlt(logo.logo, logo.name)}
                      className="trust_logo_img"
                    />
                  </div>
                ))}
              </Marquee>

              <div className="trust_divider" />
              <div>{settings.trustCaption}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
