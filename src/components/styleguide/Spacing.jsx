import {
  EmptyBox,
  PatternLabels,
  SIZES,
  SPACING_STEPS,
  SgGrid,
  SgGroup,
  SgSection,
  SgSpacingItem,
} from './Primitives'

/**
 * The export wrote all 230 of these cells out by hand. They are generated from
 * the scale here, which is the same output with the pattern made explicit.
 */
const DIRECTIONS = ['', 'top', 'bottom', 'left', 'right', 'horizontal', 'vertical']

function ScaleGrid({ prefix, direction }) {
  const build = (step) =>
    direction ? `${prefix}-${direction}-${step}` : `${prefix}-${step}`

  return (
    <SgGrid cols={3} alignStart>
      {SPACING_STEPS.map((step) => {
        const name = build(step)
        return (
          <SgSpacingItem label={name} key={name}>
            <div className={name}>
              <EmptyBox />
            </div>
          </SgSpacingItem>
        )
      })}
    </SgGrid>
  )
}

export function Spacing() {
  return (
    <SgSection
      className="fs-styleguide_spacings"
      title="Spacing"
      description="Spacing system for padding, margin and gaps, built on one set of size variables."
      vertical
    >
      <SgGroup heading="All Size Variables">
        <SgGrid cols={3} alignStart>
          {SIZES.map((size) => (
            <SgSpacingItem label={size} key={size}>
              <div className={`spacer-${size}`}>
                <EmptyBox />
              </div>
            </SgSpacingItem>
          ))}
        </SgGrid>
      </SgGroup>

      <SgGroup heading="All Padding Classes" note={<PatternLabels prefix="padding" />}>
        {DIRECTIONS.map((direction) => (
          <ScaleGrid prefix="padding" direction={direction} key={`padding-${direction}`} />
        ))}
      </SgGroup>

      <SgGroup heading="All Margin Classes" note={<PatternLabels prefix="margin" />}>
        {DIRECTIONS.map((direction) => (
          <ScaleGrid prefix="margin" direction={direction} key={`margin-${direction}`} />
        ))}
      </SgGroup>

      <SgGroup
        heading="Grid/Flex Gaps"
        note={<div>Can be used with grid or flex.</div>}
      >
        <ScaleGrid prefix="gap" direction="" />
      </SgGroup>
    </SgSection>
  )
}
