'use client'

import Link from 'next/link'

import { imageUrl, imageAlt } from '@/sanity/image'

/**
 * Product card with Rico.supply cursor-tracking interaction.
 *
 * Uses data-cursor-text="VIEW" to trigger the smooth expanding cursor pill.
 */
export function TemplateCard({ product }) {
  const name = product.cardTitle || product.title
  const src = imageUrl(product.cardImage, 800)
  const priceText = product.price != null ? `$${product.price}` : ''

  return (
    <Link
      href={`/products/${product.slug}`}
      className="template_card w-inline-block"
      data-cursor-text="View"
    >
      <div className="template_card_img_wrap">
        {src ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={src}
            loading="lazy"
            alt={imageAlt(product.cardImage, name)}
            className="template_img"
          />
        ) : null}
      </div>
      <div className="template_card_content">
        <div>{name}</div>
        <div className="template_card_price_wrapper">
          {/* Ghost text reserves container width for smooth 0-jitter roll */}
          <span className="template_card_price_ghost" aria-hidden="true">
            Purchase
          </span>
          <span className="template_card_price_default">
            {priceText}
          </span>
          <span className="template_card_price_hover">
            Purchase
          </span>
        </div>
      </div>
    </Link>
  )
}
