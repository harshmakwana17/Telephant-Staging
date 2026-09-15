import { Buttons } from '@/components/styleguide/Buttons'
import { Colors } from '@/components/styleguide/Colors'
import { FormElements } from '@/components/styleguide/FormElements'
import { GridUtilities } from '@/components/styleguide/GridUtilities'
import { Headings } from '@/components/styleguide/Headings'
import { Icons } from '@/components/styleguide/Icons'
import { MaxWidths } from '@/components/styleguide/MaxWidths'
import { OtherHtmlTags } from '@/components/styleguide/OtherHtmlTags'
import { RichTextSample } from '@/components/styleguide/RichTextSample'
import { Spacers } from '@/components/styleguide/Spacers'
import { Spacing } from '@/components/styleguide/Spacing'
import { StructureClasses } from '@/components/styleguide/StructureClasses'
import { TextClasses } from '@/components/styleguide/TextClasses'
import { UtilityClasses } from '@/components/styleguide/UtilityClasses'

export const metadata = {
  title: 'Style Guide',
  description:
    'Client-First structure, typography, spacing, grid and form components used across the site.',
  robots: { index: false, follow: false },
}

/**
 * Port of style-guide.html. Section order matches the export exactly; the final
 * "Webflow elements" section is split into Form elements and Rich text, both
 * rebuilt without Webflow markup or CSS.
 */
export default function StyleGuidePage() {
  return (
    <div className="fs-styleguide_component">
      <header className="fs-styleguide_header">
        <div className="padding-global padding-section-large">
          <div className="container-large">
            <div className="fs-styleguide_header-block">
              <div className="fs-styleguide_hero-label">Client-First — Version 3.0</div>
              <h1 className="fs-styleguide_heading-header">Style Guide</h1>
              <div className="max-width-medium">
                <p className="text-size-medium">
                  Client-First is a set of guidelines and strategies created by Finsweet
                  to help you build Webflow websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="fs-styleguide_classes">
        <StructureClasses />
        <Headings />
        <OtherHtmlTags />
        <TextClasses />
        <Buttons />
        <Colors />
        <MaxWidths />
        <Spacing />
        <GridUtilities />
        <Spacers />
        <Icons />
        <UtilityClasses />
        <FormElements />
        <RichTextSample />
      </section>
    </div>
  )
}
