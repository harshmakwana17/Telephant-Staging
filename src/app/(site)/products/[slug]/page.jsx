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

  return (
    <>
      <section className="section_product_hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="product_wrapper">
              <div className="breadcrumb_wrapper" data-aos="fade-up">
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
                <div data-aos="fade-up">
                  <ProductGallery gallery={product.gallery} title={product.title} />
                </div>

                <div className="product_card_content_wrap">
                  <div className="product_content_wrap">
                    <div className="product_content_fp">
                      {product.badge ? (
                        <div className="product_tag" data-aos="fade-up" data-aos-delay="0">
                          <div>{product.badge}</div>
                        </div>
                      ) : null}

                      <div className="product_review_wrap" data-aos="fade-up" data-aos-delay="50">
                        <StarRatingIcon />
                        <div>{product.reviewCount} reviews</div>
                        {product.satisfactionNote ? (
                          <div className="letter_space">| {product.satisfactionNote}</div>
                        ) : null}
                      </div>

                      <h1 className="heading-style-h2 is-small-size" data-aos="fade-up" data-aos-delay="100">
                        {product.title}
                      </h1>
                      <div data-aos="fade-up" data-aos-delay="150">{product.shortDescription}</div>

                      {(product.tags || []).length > 0 ? (
                        <div data-aos="fade-up" data-aos-delay="200">
                          <Marquee speed={0.35}>
                            {product.tags.map((tag) => (
                              <div className="splide__slide" key={tag}>
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
                        <div className="benifit_wrap" data-aos="fade-up" data-aos-delay="400">
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

      <ProductGrid heading="Recent Launched" products={related} layout="recent" />
      <Testimonials settings={settings} testimonials={testimonials} />
      <TrustMarquee settings={settings} logos={trustLogos} />
      <LaunchCta settings={settings} />
    </>
  )
}
