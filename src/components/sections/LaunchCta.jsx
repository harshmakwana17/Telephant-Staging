import { Button } from '@/components/ui/Button'

export function LaunchCta({ settings }) {
  return (
    <section className="section_launch">
      <div className="padding-global">
        <div className="container-large">
          <div className="launch_wrapper">
            <h2 className="heading-style-h2" data-aos="fade-up">{settings.launchHeading}</h2>
            <div className="button_wrapper" data-aos="fade-up" data-aos-delay="100">
              {(settings.launchButtons || []).map((button) => (
                <Button
                  key={button.label}
                  href={button.href}
                  variant={button.primary ? 'primary' : 'default'}
                  size="large"
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
