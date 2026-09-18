import Link from 'next/link'

import { ArrowRightIcon } from '@/components/ui/Icons'

export function GetInTouch({ settings }) {
  return (
    <section className="section_get_in_touch">
      <div className="padding-global">
        <div className="container-large">
          <div className="get_in_touch_wrap">
            {/* Background Video */}
            <video
              className="get_in_touch_video_bg"
              autoPlay
              loop
              muted
              playsInline
              src="/images/scene-15-grain.mp4"
            />
            <div className="get_in_touch_heading">
              <div data-animate="fade-up">{settings.contactEyebrow}</div>
              <h2 className="heading-style-h2 is-white-clr" data-animate="words" data-animate-delay="80">
                {settings.contactHeading}
              </h2>
            </div>
            <div className="get_in_touch_content" data-animate="fade-up" data-animate-delay="250">
              <div>{settings.contactBody}</div>
              <Link
                href={settings.contactButton?.href || '#'}
                className="button get_in_touch-btn w-inline-block"
              >
                <div>{settings.contactButton?.label}</div>
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
