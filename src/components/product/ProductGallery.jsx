import { imageUrl, imageSrcSet, imageAlt } from '@/sanity/image'

/**
 * Rebuilds the export's gallery layout from a flat list of images.
 *
 * The export hard-coded the arrangement: full-width shots sit directly in
 * .product_card_img_wrap, while consecutive half-width shots are wrapped
 * together in a .product_card_wrap row. Each gallery image carries a `layout`
 * field in Sanity, and runs of `half` are grouped here.
 */
export function ProductGallery({ gallery = [], title }) {
  if (!gallery.length) return null

  const rows = []
  let halfRun = []

  const flushHalfRun = () => {
    if (halfRun.length) {
      rows.push({ type: 'half', images: halfRun })
      halfRun = []
    }
  }

  for (const image of gallery) {
    if (image.layout === 'half') {
      halfRun.push(image)
    } else {
      flushHalfRun()
      rows.push({ type: 'full', images: [image] })
    }
  }
  flushHalfRun()

  return (
    <div className="product_card_img_wrap">
      {rows.map((row, rowIndex) =>
        row.type === 'full' ? (
          <GalleryImage
            key={rowIndex}
            image={row.images[0]}
            title={title}
            className="template_img"
          />
        ) : (
          <div className="product_card_wrap" key={rowIndex}>
            {row.images.map((image, index) => (
              <GalleryImage
                key={index}
                image={image}
                title={title}
                className="product_card_img"
              />
            ))}
          </div>
        )
      )}
    </div>
  )
}

function GalleryImage({ image, title, className }) {
  const src = imageUrl(image, 1600)
  if (!src) return null

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      srcSet={imageSrcSet(image)}
      sizes="(max-width: 1418px) 100vw, 1418px"
      loading="lazy"
      alt={imageAlt(image, title)}
      className={className}
    />
  )
}
