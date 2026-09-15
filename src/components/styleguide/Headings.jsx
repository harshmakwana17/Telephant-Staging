import { SgGrid, SgGroup, SgItem, SgSection } from './Primitives'

/** The export paired each HTML tag with its matching heading-style-* class. */
const HEADINGS = [
  {
    level: 1,
    text: 'Sample text helps you understand how real text may look. Sample text is being used as a placeholder.',
  },
  {
    level: 2,
    text: 'Sample text is being used as a placeholder. Sample text helps you understand how real text may look.',
  },
  {
    level: 3,
    text: 'Sample text helps you understand how real text may look on your website. Sample text is being used as a placeholder for real text that is normally present.',
  },
  {
    level: 4,
    text: 'Sample text is being used as a placeholder. Sample text helps you understand how real text may look. Sample text is being used as a placeholder for real text that is normally present.',
  },
  {
    level: 5,
    text: 'Sample text is being used as a placeholder. Sample text helps you understand how real text may look. Sample text is being used as a placeholder for real text that is normally present. Sample text helps you understand how real text may look.',
  },
  {
    level: 6,
    text: 'Sample text is being used as a placeholder for real text that is normally present. Sample text helps you understand how real text may look. Sample text is being used as a placeholder for real text that is normally present. Sample text helps you understand how real text may look.',
  },
]

export function Headings() {
  return (
    <SgSection
      className="fs-styleguide_headings"
      title="Headings"
      description="HTML tags define default Heading styles. Use Heading classes when the typography style doesn't match the default HTML tag."
    >
      <SgGroup>
        <SgGrid cols={1}>
          {HEADINGS.map(({ level, text }) => {
            const Tag = `h${level}`
            return [
              <SgItem label={`H${level}`} tag key={`tag-${level}`}>
                <Tag>{text}</Tag>
              </SgItem>,
              <SgItem label={`heading-style-h${level}`} key={`class-${level}`}>
                <div className={`heading-style-h${level}`}>{text}</div>
              </SgItem>,
            ]
          })}
        </SgGrid>
      </SgGroup>
    </SgSection>
  )
}
