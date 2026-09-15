import { SgGrid, SgGroup, SgItem, SgSection } from './Primitives'
import { SOCIAL_ICONS } from './icons'

const HEIGHT_CLASSES = ['icon-height-small', 'icon-height-medium', 'icon-height-large']
const SQUARE_CLASSES = ['icon-1x1-small', 'icon-1x1-medium', 'icon-1x1-large']

function IconSvg({ icon, sizeClass }) {
  return (
    <div className={sizeClass}>
      <svg
        aria-hidden="true"
        role="img"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={icon.viewBox}
      >
        <title>{icon.title}</title>
        {icon.d ? <path d={icon.d} /> : null}
        {icon.points ? <polygon points={icon.points} /> : null}
      </svg>
    </div>
  )
}

export function Icons() {
  return (
    <SgSection
      className="fs-styleguide_icons"
      title="Icons"
      description={
        <>
          Unify icons sizes. <strong>icon-height</strong> sets height of icons.{' '}
          <strong>icon-1x1</strong> sets both height and width of icons.
        </>
      }
    >
      <SgGroup>
        <SgGrid cols={2}>
          {HEIGHT_CLASSES.map((name) => (
            <SgItem label={name} key={name}>
              {/*
                The export pointed at a placeholder SVG on Webflow's CDN. Using
                the local asset keeps the page working off Webflow hosting.
              */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/image.svg" loading="lazy" alt="" className={name} />
            </SgItem>
          ))}

          {SQUARE_CLASSES.map((sizeClass) => (
            <SgItem label={sizeClass} key={sizeClass}>
              <div className="fs-styleguide_row">
                {SOCIAL_ICONS.map((icon) => (
                  <IconSvg icon={icon} sizeClass={sizeClass} key={icon.title} />
                ))}
              </div>
            </SgItem>
          ))}
        </SgGrid>
      </SgGroup>
    </SgSection>
  )
}
