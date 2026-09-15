import { EmptyBox, SgGrid, SgGroup, SgItem, SgSection, SgSpacingItem } from './Primitives'

const CONTAINERS = ['container-small', 'container-medium', 'container-large']

const SECTION_PADDING = [
  'padding-section-small',
  'padding-section-top-small',
  'padding-section-bottom-small',
  'padding-section-medium',
  'padding-section-top-medium',
  'padding-section-bottom-medium',
  'padding-section-large',
  'padding-section-top-large',
  'padding-section-bottom-large',
]

export function StructureClasses() {
  return (
    <SgSection
      className="fs-styleguide_structure"
      title="Structure Classes"
      description="Defined and flexible core structure we can use on all or most pages."
      vertical
    >
      <SgGroup>
        <SgGrid cols={1}>
          <SgItem label="page-wrapper">
            <div className="page-wrapper">
              <EmptyBox />
            </div>
          </SgItem>

          <SgItem label="main-wrapper">
            {/* The export used a real <main> here; on this page that would be a
                second <main> inside the site layout's, so it is a <div>. */}
            <div className="main-wrapper">
              <EmptyBox />
            </div>
          </SgItem>

          {CONTAINERS.map((name) => (
            <SgItem label={name} stretch key={name}>
              <div className={name}>
                <EmptyBox />
              </div>
            </SgItem>
          ))}

          <SgItem label="padding-global" stretch>
            <div className="padding-global">
              <EmptyBox />
            </div>
          </SgItem>

          {SECTION_PADDING.map((name) => (
            <SgItem stretch key={name}>
              <SgSpacingItem label={name}>
                <div className={name}>
                  <EmptyBox />
                </div>
              </SgSpacingItem>
            </SgItem>
          ))}

          <SgItem labels={['button-group']}>
            <div className="button-group">
              <EmptyBox />
              <EmptyBox />
            </div>
          </SgItem>
        </SgGrid>
      </SgGroup>
    </SgSection>
  )
}
