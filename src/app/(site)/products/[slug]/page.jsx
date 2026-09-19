import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ProductFaq } from '@/components/product/ProductFaq'
import { ProductGallery } from '@/components/product/ProductGallery'
import { ProductPurchase } from '@/components/product/ProductPurchase'
import { LaunchCta } from '@/components/sections/LaunchCta'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { Testimonials } from '@/components/sections/Testimonials'
import { TrustMarquee } from '@/components/sections/TrustMarquee'
import { ChevronRightIcon, StarRatingIcon } from '@/components/ui/Icons'
import { Marquee } from '@/components/ui/Marquee'
import {
  getProductBySlug,
  getProductSlugs,
  getRelatedProducts,
  getSiteSettings,
  getTestimonials,
  getTrustLogos,
} from '@/lib/content'
import { imageUrl, imageAlt } from '@/sanity/image'

/** Pre-render every product at build time; new ones are added on first request. */
export async function generateStaticParams() {
  const slugs = await getProductSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) return {}

  const title = product.seoTitle || product.title
  const description = product.seoDescription || product.shortDescription
  const image = imageUrl(product.cardImage, 1200)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: image ? [{ url: image }] : undefined,
    },
  }
}

export default async function ProductPage({ params }) {
  const { slug } = await params

  const [product, settings, related, testimonials, trustLogos] = await Promise.all([
    getProductBySlug(slug),
    getSiteSettings(),
    getRelatedProducts(slug),
    getTestimonials(),
    getTrustLogos(),
  ])

  if (!product) notFound()

  // Templates picked in Studio ("More templates" field) win, in the editor's
  // order. With none picked - or placeholder content, which has no picks - it
  // falls back to the 3 newest other templates, as before.
  const moreTemplates = product.relatedProducts?.length ? product.relatedProducts : related

  // The tag marquee only scrolls (and fills the row) when its content overflows
  // the track. A handful of short tags doesn't, so Splide centres them and
  // leaves a gap. Repeat the list to guarantee overflow at any width.
  const tags = product.tags || []
  const marqueeTags = tags.length
    ? Array.from({ length: Math.ceil(16 / tags.length) }).flatMap(() => tags)
    : []

  return (
    <>
      <section className="section_product_hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="product_wrapper">
              <div className="breadcrumb_wrapper" data-animate="fade-up" data-animate-on="load">
                <Link href="/" className="breadcrumb_link">
                  Home
                </Link>
                <ChevronRightIcon />
                <Link href="/products" className="breadcrumb_link">
                  {product.category?.title || 'Templates'}
                </Link>
                <ChevronRightIcon />
                <div className="breadcrumb_block">
                  <div>{product.title}</div>
                </div>
              </div>

              <div className="product_card_wrapper">
                <ProductGallery
                  gallery={product.gallery}
                  title={product.title}
                  data-animate="fade-up"
                />

                <div className="product_card_content_wrap">
                  <div className="product_content_wrap">
                    <div className="product_content_fp">
                      {product.badge ? (
                        <div className="product_tag" data-animate="fade-up" data-animate-on="load" data-animate-delay="0">
                          <div>{product.badge}</div>
                        </div>
                      ) : null}

                      <div className="product_review_wrap" data-animate="fade-up" data-animate-on="load" data-animate-delay="40">
                        <StarRatingIcon />
                        <div>{product.reviewCount} reviews</div>
                        {product.satisfactionNote ? (
                          <div className="letter_space">| {product.satisfactionNote}</div>
                        ) : null}
                      </div>

                      <h1
                        className="heading-style-h2 is-small-size"
                        data-animate="words"
                        data-animate-on="load"
                        data-animate-delay="80"
                        style={{ fontFamily: 'Satoshi, Arial, sans-serif' }}
                      >
                        {product.title}
                      </h1>
                      <div data-animate="fade-up" data-animate-on="load" data-animate-delay="110">
                        {product.shortDescription}
                      </div>

                      {marqueeTags.length > 0 ? (
                        <div data-animate="fade-up" data-animate-on="load" data-animate-delay="130">
                          <Marquee speed={0.35}>
                            {marqueeTags.map((tag, index) => (
                              <div className="splide__slide" key={`${tag}-${index}`}>
                                <div className="product_marquee_wrap">
                                  <div className="product_marquee_dot" />
                                  <div>{tag}</div>
                                </div>
                              </div>
                            ))}
                          </Marquee>
                        </div>
                      ) : null}

                      <ProductPurchase
                        licenses={product.licenses || []}
                        addOns={product.addOns || []}
                      />

                      {(product.benefits || []).length > 0 ? (
                        <div className="benifit_wrap" data-animate="stagger" data-animate-delay="400">
                          {product.benefits.map((benefit) => {
                            const icon = imageUrl(benefit.icon, 64)
                            return (
                              <div className="benifit_block" key={benefit._key}>
                                {icon ? (
                                  /* eslint-disable-next-line @next/next/no-img-element */
                                  <img
                                    src={icon}
                                    loading="lazy"
                                    alt={imageAlt(benefit.icon, '')}
                                  />
                                ) : null}
                                <div>{benefit.label}</div>
                              </div>
                            )
                          })}
                        </div>
                      ) : null}

                      <ProductFaq faqs={product.faqs || []} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid heading="Recent Launched" products={moreTemplates} layout="recent" />
      <Testimonials settings={settings} testimonials={testimonials} />
      <TrustMarquee settings={settings} logos={trustLogos} />
      <LaunchCta settings={settings} />
    </>
  )
}
