import { SgGrid, SgGroup, SgItem, SgSection } from './Primitives'

const SHORT =
  'Sample text is being used as a placeholder for real text that is normally present.'
const MEDIUM =
  'Sample text is being used as a placeholder for real text that is normally present on your website.'
const LONG =
  'Sample text is being used as a placeholder for real text that is normally present. Sample text helps you understand how real text may look on your website. Sample text is being used as a placeholder for real text.'
const VERY_LONG = `${LONG} ${LONG}`

const SIZES = [
  { name: 'text-size-large', text: SHORT },
  { name: 'text-size-medium', text: MEDIUM },
  { name: 'text-size-regular', text: LONG },
  { name: 'text-size-small', text: `${MEDIUM} Sample text helps you understand how real text may look on your website.` },
  { name: 'text-size-tiny', text: `${MEDIUM} Sample text helps you understand how real text may look on your website.` },
]

/** Truncation classes carry a caveat note in the export. */
const CLAMP_NOTE = 'This CSS style is not supported for Rich Texts on iOS.'

const STYLES = [
  { name: 'text-style-strikethrough' },
  { name: 'text-style-italic' },
  { name: 'text-style-muted' },
  { name: 'text-style-allcaps' },
  { name: 'text-style-nowrap' },
  { name: 'text-style-link' },
  { name: 'text-style-quote', text: 'Sample text is being used as a placeholder.' },
  { name: 'text-style-1line', text: `${LONG} text-style-1line`, note: CLAMP_NOTE },
  { name: 'text-style-2lines', text: `${LONG} text-style-2lines`, note: CLAMP_NOTE },
  { name: 'text-style-3lines', text: VERY_LONG, note: CLAMP_NOTE },
  { name: 'text-style-balance', text: `${VERY_LONG} Sample text is being used as a placeholder for real text.` },
  { name: 'text-style-pretty', text: `${VERY_LONG} Sample text is being used as a placeholder for real text.` },
]

const WEIGHTS = [
  'text-weight-xbold',
  'text-weight-bold',
  'text-weight-semibold',
  'text-weight-medium',
  'text-weight-normal',
  'text-weight-light',
]

const ALIGNMENTS = ['text-align-left', 'text-align-center', 'text-align-right']

export function TextClasses() {
  return (
    <SgSection
      className="fs-styleguide_text-classes"
      title="Text Classes"
      description="Text classes when typography style doesn't match the default HTML tag."
    >
      <SgGroup heading="Text Sizes">
        <SgGrid cols={3}>
          {SIZES.map(({ name, text }) => (
            <SgItem label={name} key={name}>
              <p className={name}>{text}</p>
            </SgItem>
          ))}
        </SgGrid>
      </SgGroup>

      <SgGroup heading="Text Styles">
        <SgGrid cols={3}>
          {STYLES.map(({ name, text, note }) => (
            <SgItem label={name} key={name}>
              {note ? <div className="fs-styleguide_message">{note}</div> : null}
              <p className={name}>{text || name}</p>
            </SgItem>
          ))}
        </SgGrid>
      </SgGroup>

      <SgGroup heading="Text Weights">
        <SgGrid cols={3}>
          {WEIGHTS.map((name) => (
            <SgItem label={name} key={name}>
              <div className={name}>{name}</div>
            </SgItem>
          ))}
        </SgGrid>
      </SgGroup>

      <SgGroup heading="Text Alignments">
        <SgGrid cols={3}>
          {ALIGNMENTS.map((name, index) => (
            <SgItem label={name} stretch={index > 0} key={name}>
              <div className={name}>{name}</div>
            </SgItem>
          ))}
        </SgGrid>
      </SgGroup>
    </SgSection>
  )
}
