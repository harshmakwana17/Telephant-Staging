/**
 * Categories for the templates page filter tabs (after "All"), in tab order.
 *
 * Shared by the product schema (the "Filter categories" checkboxes in Studio)
 * and TemplateFilter, so the two can't drift apart. To add a category, add it
 * here; `value` is what gets stored on the product, so don't rename an
 * existing one or products tagged with it will drop out of that tab.
 */
export const FILTER_CATEGORIES = [
  { value: 'weight-loss', title: 'Weight Loss' },
  { value: 'lab-diagnostic', title: 'Lab & Diagnostic' },
  { value: 'd2c-ecommerce', title: 'D2C E-commerce' },
]
