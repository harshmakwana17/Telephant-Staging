/**
 * Document-style layout for the legal pages (Privacy Policy, License Agreement,
 * Terms & Conditions), matching the Figma design: a centered title + "Last
 * updated" line, then a single narrow centered column, closing with a divider
 * and the Telephant sign-off line.
 *
 * Content is passed as structured data so each page reproduces the exact copy
 * from the design. Reuses the site design system (Satoshi headings, the
 * `padding-global` / `container-large` wrappers); page-specific typography and
 * spacing live in the `.legal_*` rules in globals.css.
 *
 * `intro`     - lead content under the title; array of strings (paragraphs) or
 *               block objects (see below).
 * `preamble`  - array of { heading, blocks } rendered UNNUMBERED before the
 *               numbered sections (e.g. "Important", "License Summary").
 * `sections`  - array of { heading, blocks }; headings are auto-numbered 1..n.
 * A block is one of:
 *     { type: 'p',  text }                       -> paragraph
 *     { type: 'h3', text }                       -> bold sub-heading
 *     { type: 'ul', items }                      -> bullet list; item is a
 *                                                   string, or { label, text }
 *     { type: 'table', columns, rows }           -> comparison table
 *     { type: 'contact', name, lines, email }    -> contact / address block
 * `signOff`   - closing line under the divider (default matches the design).
 */
import { LaunchCta } from '@/components/sections/LaunchCta'
import { getSiteSettings } from '@/lib/content'

export async function LegalPage({
  title,
  lastUpdated,
  intro = [],
  preamble = [],
  sections = [],
  signOff = 'Telephant | A Dstudio Agency initiative',
}) {
  const settings = await getSiteSettings()
  const introBlocks = intro.map((item) =>
    typeof item === 'string' ? { type: 'p', text: item } : item
  )

  return (
    <>
      <section className="section_legal">
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <header className="legal_header">
            <h1 className="legal_title">{title}</h1>
            {lastUpdated ? (
              <div className="legal_updated">Last updated: {lastUpdated}</div>
            ) : null}
          </header>

          <div className="legal_doc">
            <LegalBlocks blocks={introBlocks} />

            {preamble.map((section) => (
              <div className="legal_block" key={section.heading}>
                <h2 className="legal_heading">{section.heading}</h2>
                <LegalBlocks blocks={section.blocks} />
              </div>
            ))}

            {sections.map((section, index) => (
              <div className="legal_block" key={section.heading}>
                <h2 className="legal_heading">
                  {index + 1}. {section.heading}
                </h2>
                <LegalBlocks blocks={section.blocks} />
              </div>
            ))}

            {signOff ? (
              <>
                <hr className="legal_divider" />
                <div className="legal_signoff">{signOff}</div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      </section>
      <LaunchCta settings={settings} />
    </>
  )
}

function LegalBlocks({ blocks = [] }) {
  return blocks.map((block, index) => {
    if (block.type === 'h3') {
      return (
        <h3 className="legal_subheading" key={index}>
          {block.text}
        </h3>
      )
    }

    if (block.type === 'ul') {
      return (
        <ul className="legal_list" key={index}>
          {block.items.map((item, itemIndex) =>
            typeof item === 'string' ? (
              <li className="legal_li" key={itemIndex}>
                {item}
              </li>
            ) : (
              <li className="legal_li" key={itemIndex}>
                <strong>{item.label}:</strong> {item.text}
              </li>
            )
          )}
        </ul>
      )
    }

    if (block.type === 'table') {
      return (
        <div className="legal_table_wrap" key={index}>
          <table className="legal_table">
            <thead>
              <tr>
                {block.columns.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }

    if (block.type === 'contact') {
      return (
        <div className="legal_contact" key={index}>
          {block.name ? (
            <div className="legal_contact_name">
              <strong>{block.name}</strong>
            </div>
          ) : null}
          {(block.lines || []).map((line, lineIndex) => (
            <div key={lineIndex}>{line}</div>
          ))}
          {block.email ? (
            <div className="legal_contact_email">
              <strong>{block.email.label}</strong> {block.email.value}
            </div>
          ) : null}
        </div>
      )
    }

    return (
      <p className="legal_p" key={index}>
        {block.text}
      </p>
    )
  })
}
