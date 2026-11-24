// Legal pages (privacy, license, terms) always open in a new tab/window, so
// visitors don't lose their place on a product page or checkout.
const LEGAL_PATHS = ['/privacy-policy', '/license-agreement', '/terms-and-conditions']

export function isLegalHref(href = '') {
  const path = String(href).split(/[?#]/)[0].replace(/\/+$/, '')
  return LEGAL_PATHS.includes(path)
}

// Spread onto a <Link>/<a>: {...newTabProps(href)}
export function newTabProps(href) {
  return isLegalHref(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}
