import { EmptyBox, SgGrid, SgGroup, SgItem, SgSection } from './Primitives'

/** Plain box demos - every one is `<div class="{name}"><empty box /></div>`. */
const UTILITIES = [
  'hide-tablet',
  'hide-mobile-landscape',
  'hide-mobile-portrait',
  'overflow-visible',
  'overflow-hidden',
  'overflow-auto',
  'overflow-clip',
  'overflow-scroll',
  'pointer-events-auto',
  'pointer-events-none',
  'spacing-clean',
  'align-center',
  'aspect-ratio-square',
  'aspect-ratio-portrait',
  'aspect-ratio-landscape',
  'aspect-ratio-widescreen',
  'display-contents',
  'display-inline',
  'display-inline-flex',
  'text-area-vertical',
  'disable-select',
]

const INHERIT = [
  'text-color-inherit',
  'text-size-inherit',
  'text-weight-inherit',
  'text-decoration-inherit',
]

export function UtilityClasses() {
  return (
    <SgSection
      className="fs-styleguide_utility-classes"
      title="Useful utility systems"
      description="Single-purpose classes for visibility, overflow, aspect ratio and inheritance."
    >
      <SgGroup>
        <SgGrid cols={4}>
          <SgItem label="hide">
            {/* Nothing to show, so the export explains it in place. */}
            <div className="hide" />
            <div>This element is hidden</div>
          </SgItem>

          {UTILITIES.map((name) => (
            <SgItem label={name} key={name}>
              <div className={name}>
                <EmptyBox />
              </div>
            </SgItem>
          ))}

          {/* z-index classes have no visible box in the export either. */}
          <SgItem label="z-index-1">
            <div className="z-index-1" />
          </SgItem>
          <SgItem label="z-index-2">
            <div className="z-index-2" />
          </SgItem>
        </SgGrid>
      </SgGroup>

      <SgGroup heading="Inherit Classes">
        <SgGrid cols={4}>
          {INHERIT.map((name) => (
            <SgItem label={name} key={name}>
              <div className={name}>
                <EmptyBox />
              </div>
            </SgItem>
          ))}

          <SgItem label="border-radius-inherit">
            <div className="fs-styleguide_inherit-wrapper">
              <div className="border-radius-inherit">
                <div className="fs-styleguide_empty-box border-radius-inherit" />
              </div>
            </div>
          </SgItem>
        </SgGrid>
      </SgGroup>
    </SgSection>
  )
}
