import { SgGrid, SgGroup, SgItem, SgSection } from './Primitives'

const LIST_ITEM =
  'Sample text is being used as a placeholder for real text that is normally present.'

export function OtherHtmlTags() {
  return (
    <SgSection
      className="fs-styleguide_other-tags"
      title="Other HTML Tags"
      description="HTML tags define default text styles."
    >
      <SgGroup>
        <SgGrid cols={2}>
          <SgItem label="All paragraphs" tag>
            <p>
              Sample text is being used as a placeholder for real text that is normally
              present. Sample text helps you understand how real text may look on your
              website. Sample text is being used as a placeholder for real text.
            </p>
          </SgItem>

          <SgItem label="All links" tag>
            <a href="#">All Links</a>
          </SgItem>

          <SgItem label="All quotes" tag>
            <blockquote>
              Sample text is being used as a placeholder for real text that is normally
              present. Sample text helps you understand how real text may look on your
              website.
            </blockquote>
          </SgItem>

          {/* Non-breaking space, as in the export, so the label never wraps. */}
          <SgItem label={'All Ordered Lists'} tag>
            <ol>
              <li>{LIST_ITEM}</li>
              <li>{LIST_ITEM}</li>
              <li>{LIST_ITEM}</li>
            </ol>
          </SgItem>

          <SgItem label="All Unordered Lists" tag>
            <ul>
              <li>{LIST_ITEM}</li>
              <li>{LIST_ITEM}</li>
              <li>{LIST_ITEM}</li>
            </ul>
          </SgItem>
        </SgGrid>
      </SgGroup>
    </SgSection>
  )
}
