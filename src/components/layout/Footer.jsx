import Link from 'next/link'

import { NewsletterForm } from './NewsletterForm'
import { imageUrl } from '@/sanity/image'

export function Footer({ settings }) {
  const logo = imageUrl(settings.footerLogo)

  return (
    <section className="section_footer">
      <div className="padding-global">
        <div className="container-large">
          <div className="footer_main_wrap">
            <div className="footer_wrapper">
              <div className="footer_fp">
                {logo ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img loading="lazy" src={logo} alt="Telephant" className="footer_logo" />
                ) : null}
                <div className="footer_fp_deatils">{settings.footerBlurb}</div>
                <NewsletterForm />
              </div>

              <div className="footer_sp">
                <div className="footer_menu_main_wrapper">
                  {(settings.footerColumns || []).map((column) => (
                    <div className="footer_menu_wrap" key={column.title}>
                      <div>{column.title}</div>
                      <div className="footer_menu_details">
                        {(column.links || []).map((link) => (
                          <Link
                            key={`${link.label}-${link.href}`}
                            href={link.href || '#'}
                            className="footer_menu_link"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="footer_bottom_wrap">
              <div className="footer_bottom_fp">
                <div>{settings.footerCompany}</div>
              </div>
              <div className="footer_bottom_sp">
                <a href={`mailto:${settings.footerEmail}`} className="footer_email">
                  {settings.footerEmail}
                </a>
                <div>{settings.footerCopyright}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
