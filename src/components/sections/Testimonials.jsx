import { SingleStarIcon, VerifiedBadgeIcon } from '@/components/ui/Icons'
import { imageUrl, imageAlt } from '@/sanity/image'

export function Testimonials({ settings, testimonials = [] }) {
  if (!testimonials.length) return null

  const rating = settings.testimonialRating || {}

  return (
    <section className="section_testimonial">
      <div className="padding-global">
        <div className="container-large">
          <div className="testimonial_wrapper">
            <div className="testimonial_heading">
              <div className="testimonial_tag" data-animate="fade-up">
                <SingleStarIcon />
                <div>
                  {rating.score} <span className="testi_span">Rating Over</span>{' '}
                  {rating.count} <span className="testi_span">Reviews</span>
                </div>
              </div>
              <h2 className="heading-style-h2" data-animate="words" data-animate-delay="80">
                <span className="block_line">{settings.testimonialHeadingLine1}</span>{' '}
                {settings.testimonialHeadingLine2}
              </h2>
            </div>

            <div className="testimonial_grid" data-animate="stagger">
              {testimonials.map((testimonial) => {
                const avatar = imageUrl(testimonial.avatar, 120)
                return (
                  <div
                    className="testimonial_card"
                    key={testimonial._id}
                  >
                    <div>“{testimonial.quote}”</div>
                    <div className="testi_person_block">
                      {avatar ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={avatar}
                          width={34}
                          height={34}
                          loading="lazy"
                          alt={imageAlt(testimonial.avatar, testimonial.name)}
                        />
                      ) : null}
                      <div className="testi_person_details">
                        <div className="testi_person_name_wrap">
                          <div>{testimonial.name}</div>
                          {testimonial.verified ? <VerifiedBadgeIcon /> : null}
                        </div>
                        <div>{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
