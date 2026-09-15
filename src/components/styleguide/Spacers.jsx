import { SIZES, SgGrid, SgGroup, SgSection, SgSpacingItem } from './Primitives'

export function Spacers() {
  return (
    <SgSection
      className="fs-styleguide_spacers"
      title="Spacers"
      description="Empty divs that create vertical space where padding or margin do not fit."
      vertical
    >
      <SgGroup>
        <SgGrid cols={3} alignStart>
          {SIZES.map((size) => (
            <SgSpacingItem label={`spacer-${size}`} key={size}>
              <div className="fs-styleguide_spacer-box">
                <div className={`spacer-${size}`} />
              </div>
            </SgSpacingItem>
          ))}
        </SgGrid>
      </SgGroup>
    </SgSection>
  )
}
