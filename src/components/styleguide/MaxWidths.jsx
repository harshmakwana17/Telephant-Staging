import { EmptyBox, SgGrid, SgGroup, SgItem, SgSection } from './Primitives'

const MAX_WIDTHS = [
  'max-width-full',
  'max-width-full-tablet',
  'max-width-full-mobile-portrait',
  'max-width-full-mobile-landscape',
  'max-width-xxlarge',
  'max-width-xlarge',
  'max-width-large',
  'max-width-medium',
  'max-width-small',
  'max-width-xsmall',
  'max-width-xxsmall',
]

export function MaxWidths() {
  return (
    <SgSection
      className="fs-styleguide_max-width"
      title="Max widths"
      description="Use the max-width CSS property to contain inner content to a maximum width."
      vertical
    >
      <SgGroup>
        <SgGrid cols={1}>
          {MAX_WIDTHS.map((name) => (
            <SgItem label={name} key={name}>
              {/* The export used <main> for most of these, which would nest a
                  second <main> inside the site layout's. Divs render the same. */}
              <div className={name}>
                <EmptyBox />
              </div>
            </SgItem>
          ))}
        </SgGrid>
      </SgGroup>
    </SgSection>
  )
}
