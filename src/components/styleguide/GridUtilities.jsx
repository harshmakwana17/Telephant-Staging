import { EmptyBox, SgGroup, SgSection } from './Primitives'

const AUTOFIT = [
  { name: 'grid-autofit', note: 'Webflow Native' },
  { name: 'grid-autofit-css' },
  { name: 'grid-autofit-xsmall' },
  { name: 'grid-autofit-small' },
  { name: 'grid-autofit-medium' },
  { name: 'grid-autofit-large' },
]

const AUTOFILL = [
  { name: 'grid-autofill-css' },
  { name: 'grid-autofill-xsmall' },
  { name: 'grid-autofill-small' },
  { name: 'grid-autofill-medium' },
  { name: 'grid-autofill-large' },
]

const CARD_COUNT = 8

function GridDemo({ name, note, cards = CARD_COUNT }) {
  return (
    <div className="fs-styleguide_grids-type-wrapper">
      <div className="fs-styleguide_grids-type-label">
        <div className="fs-styleguide_label">{name}</div>
        {note ? <div>{note}</div> : null}
      </div>
      <div className={name}>
        {Array.from({ length: cards }, (_, index) => (
          <div className="fs-styleguide_dummy-card" key={index}>
            <EmptyBox />
          </div>
        ))}
      </div>
    </div>
  )
}

export function GridUtilities() {
  return (
    <SgSection
      className="fs-styleguide_grid-utilities"
      title="Grid Utilities"
      description="Auto-fitting and auto-filling grid systems that respond without media queries."
      vertical
    >
      <SgGroup heading="Autofit">
        <div className="fs-styleguide_grid-auto-fits">
          {AUTOFIT.map(({ name, note }) => (
            <GridDemo name={name} note={note} key={name} />
          ))}
        </div>
      </SgGroup>

      <SgGroup heading="Autofill">
        <div className="fs-styleguide_grid-auto-fits">
          {AUTOFILL.map(({ name }) => (
            <GridDemo name={name} key={name} />
          ))}
        </div>
      </SgGroup>

      <SgGroup heading="Others">
        <div className="fs-styleguide_grid-auto-fits">
          <div className="fs-styleguide_grids-type-wrapper">
            <div className="fs-styleguide_grids-type-label">
              <div className="fs-styleguide_label">grid-span-full</div>
            </div>
            <div className="grid-autofit-small">
              <div className="fs-styleguide_dummy-card grid-span-full">
                <EmptyBox />
              </div>
              {Array.from({ length: 4 }, (_, index) => (
                <div className="fs-styleguide_dummy-card" key={index}>
                  <EmptyBox />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SgGroup>
    </SgSection>
  )
}
