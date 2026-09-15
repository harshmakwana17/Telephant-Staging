/**
 * Shared wrappers for the style guide sections.
 *
 * The export repeated the same four or five nestings hundreds of times with
 * Webflow-generated `w-node-*` ids on many of them. Those ids only existed to
 * carry per-element grid placement from the Designer and are not referenced by
 * any CSS in the export, so they are dropped; the layout classes do the work.
 */

export function SgSection({ className, title, description, vertical = false, children }) {
  return (
    <section className={className}>
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className={`fs-styleguide_section${vertical ? ' is-vertical' : ''}`}>
            <div className="fs-styleguide_section-header">
              <h2 className="fs-styleguide_heading-medium">{title}</h2>
              {description ? <p className="text-size-medium">{description}</p> : null}
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

/** A labelled demo cell. `labels` shows a row of chips for combo classes. */
export function SgItem({ label, labels, tag = false, stretch = false, children }) {
  return (
    <div className={`fs-styleguide_item${stretch ? ' is-stretch' : ''}`}>
      {labels ? (
        <div className="fs-styleguide_row">
          {labels.map((text) => (
            <div className="fs-styleguide_label" key={text}>
              {text}
            </div>
          ))}
        </div>
      ) : label ? (
        <div className={`fs-styleguide_label${tag ? ' is-tag' : ''}`}>{label}</div>
      ) : null}
      {children}
    </div>
  )
}

/** Used by the spacing and spacer sections, which label a bare box. */
export function SgSpacingItem({ label, children }) {
  return (
    <div className="fs-styleguide_spacing">
      <div className="fs-styleguide_label">{label}</div>
      {children}
    </div>
  )
}

export function SgGrid({ cols = 1, alignStart = false, children }) {
  return (
    <div className={`fs-styleguide_${cols}-col${alignStart ? ' is-align-start' : ''}`}>
      {children}
    </div>
  )
}

/**
 * An `item-wrapper`, optionally preceded by a sub-heading. `note` renders the
 * `label-wrap` the export puts beside some headings - either a sentence or the
 * `padding-[size]` / `margin-[size]` naming-pattern chips.
 */
export function SgGroup({ heading, note, children }) {
  return (
    <div className="fs-styleguide_item-wrapper">
      {heading ? (
        <div className="fs-styleguide_item-header">
          <h3 className="text-weight-semibold">{heading}</h3>
          {note ? <div className="fs-styleguide_label-wrap">{note}</div> : null}
        </div>
      ) : null}
      {children}
    </div>
  )
}

/** The `X-[size]` and `X-[direction]-[size]` chips used by the spacing groups. */
export function PatternLabels({ prefix }) {
  return (
    <>
      <div className="fs-styleguide_label is-tag">{prefix}-[size]</div>
      <div>and</div>
      <div className="fs-styleguide_label is-tag">{prefix}-[direction]-[size]</div>
    </>
  )
}

export function EmptyBox() {
  return <div className="fs-styleguide_empty-box" />
}

/** The 13 spacing steps, in the order the design system defines them. */
export const SIZES = [
  'xxtiny',
  'xtiny',
  'tiny',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'huge',
  'xhuge',
  'xxhuge',
]

/** Same list with the `0` step that the padding/margin/gap scales add. */
export const SPACING_STEPS = ['0', ...SIZES]
