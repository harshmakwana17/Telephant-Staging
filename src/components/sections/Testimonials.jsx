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
            <div className="testimonial_heading" data-aos="fade-up">
              <div className="testimonial_tag">
                <SingleStarIcon />
                <div>
                  {rating.score} <span className="testi_span">Rating Over</span>{' '}
                  {rating.count} <span className="testi_span">Reviews</span>
                </div>
              </div>
              <h2 className="heading-style-h2">
                <span className="block_line">{settings.testimonialHeadingLine1}</span>{' '}
                {settings.testimonialHeadingLine2}
              </h2>
            </div>

            <div className="testimonial_grid">
              {testimonials.map((testimonial, index) => {
                const avatar = imageUrl(testimonial.avatar, 120)
                return (
                  <div
                    className="testimonial_card"
                    key={testimonial._id}
                    data-aos="fade-up"
                    data-aos-delay={(index % 3) * 100}
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
