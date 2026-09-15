import styles from './RichTextSample.module.css'

/**
 * The rich-text block from the export's "Webflow elements" section.
 *
 * `w-richtext`, `w-richtext-align-normal` and `w-richtext-figure-type-image`
 * are dropped - they only drive Webflow Designer's editing chrome. The visual
 * spacing still comes from `.text-rich-text`, which is the project's own
 * generated design system, not Webflow's component CSS.
 */
export function RichTextSample() {
  return (
    <section className="fs-styleguide_webflow-elements">
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="fs-styleguide_section">
            <div className="fs-styleguide_section-header">
              <h2 className="fs-styleguide_heading-medium">Rich text</h2>
              <p className="text-size-medium">
                Plain semantic HTML under <code>.text-rich-text</code>. Use this for
                Portable Text output from Sanity.
              </p>
            </div>

            <div className="fs-styleguide_item-wrapper">
              <div className="fs-styleguide_1-col">
                <div className="fs-styleguide_item">
                  <div className="fs-styleguide_label">text-rich-text</div>
                  <div className="text-rich-text">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                    <p>
                      Sample text with a <a href="https://example.com">link</a> is being
                      used as a placeholder for real text that is normally present.
                      Sample text helps you understand how real text may look on your
                      website.
                    </p>
                    <ul>
                      <li>
                        Sample text is being used as a placeholder for real text that is
                        normally present.
                      </li>
                      <li>
                        Sample text is being used as a placeholder for real text that is
                        normally present.
                      </li>
                      <li>
                        Sample text is being used as a placeholder for real text that is
                        normally present.
                      </li>
                    </ul>
                    <ol>
                      <li>
                        Sample text is being used as a placeholder for real text that is
                        normally present.
                      </li>
                      <li>
                        Sample text is being used as a placeholder for real text that is
                        normally present.
                      </li>
                      <li>
                        Sample text is being used as a placeholder for real text that is
                        normally present.
                      </li>
                    </ol>
                    <blockquote>
                      Sample text is being used as a placeholder for real text that is
                      normally present. Sample text helps you understand how real text may
                      look on your website.
                    </blockquote>
                    <figure className={styles.figure}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/image.svg" loading="lazy" width="240" alt="" />
                      <figcaption className={styles.caption}>
                        This is a figure caption
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
