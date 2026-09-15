import { SgGrid, SgItem, SgSection } from './Primitives'

const VARIANTS = [
  { combo: null },
  { combo: 'is-small' },
  { combo: 'is-large' },
  { combo: 'is-secondary' },
]

export function Buttons() {
  return (
    <SgSection
      className="fs-styleguide_buttons"
      title="Buttons"
      description="Button combo class system."
    >
      <SgGrid cols={3}>
        {VARIANTS.map(({ combo }) => (
          <SgItem
            label={combo ? undefined : 'button'}
            labels={combo ? ['button', combo] : undefined}
            key={combo || 'base'}
          >
            {/*
              `w-button` is kept here: unlike the form controls, `.button` never
              sets `display`, so an <a> would lose its padding without the
              `display: inline-block` that .w-button supplies.
            */}
            <a href="#" className={`button${combo ? ` ${combo}` : ''} w-button`}>
              Button Text
            </a>
          </SgItem>
        ))}

        <SgItem labels={['button', 'is-icon']}>
          <a href="#" className="button is-icon w-inline-block">
            <div>Button Text</div>
            <div className="icon-1x1-small">
              <svg
                aria-hidden="true"
                fill="currentColor"
                role="img"
                viewBox="0 0 20 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Arrow Right</title>
                <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
              </svg>
            </div>
          </a>
        </SgItem>
      </SgGrid>
    </SgSection>
  )
}
