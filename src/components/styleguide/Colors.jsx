import { SgGrid, SgGroup, SgItem, SgSection } from './Primitives'

const BACKGROUNDS = [
  'background-color-primary',
  'background-color-secondary',
  'background-color-alternate',
]

export function Colors() {
  return (
    <SgSection
      className="fs-styleguide_colors"
      title="Colors"
      description="Manage recurring text and background colors."
    >
      <SgGroup heading="Text Colors">
        <SgGrid cols={3}>
          <SgItem label="text-color-primary">
            <div className="text-color-primary">text-color-primary</div>
          </SgItem>

          <SgItem label="text-color-secondary">
            <div className="text-color-secondary">text-color-secondary</div>
          </SgItem>

          <SgItem label="text-color-alternate">
            {/* Shown on a dark background, since the class is white text. */}
            <div className="background-color-primary">
              <div className="text-color-alternate">text-color-alternate</div>
            </div>
          </SgItem>
        </SgGrid>
      </SgGroup>

      <SgGroup heading="Background Colors">
        <SgGrid cols={3}>
          {BACKGROUNDS.map((name) => (
            <SgItem label={name} key={name}>
              <div className="fs-styleguide_background">
                <div className={name}>
                  <div className="fs-styleguide_background-space" />
                </div>
              </div>
            </SgItem>
          ))}
        </SgGrid>
      </SgGroup>
    </SgSection>
  )
}
