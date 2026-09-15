import Link from 'next/link'

/**
 * Webflow's `.button` block. The export always wrapped the label in a plain
 * div inside the anchor, and the CSS targets that structure, so it is kept.
 *
 * variant: 'default' | 'primary' | 'secondary'
 */
export function Button({ href = '#', variant = 'default', size, className = '', children }) {
  const classes = [
    'button',
    variant === 'primary' && 'is-primary',
    variant === 'secondary' && 'is-secondary',
    size === 'large' && 'is-size',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const isText = typeof children === 'string' || typeof children === 'number'

  return (
    <Link href={href} className={`${classes} w-inline-block`}>
      {isText ? (
        <span className="btn_roll_wrapper">
          <span className="btn_roll_ghost" aria-hidden="true">
            {children}
          </span>
          <span className="btn_roll_default">{children}</span>
          <span className="btn_roll_hover">{children}</span>
        </span>
      ) : (
        <div>{children}</div>
      )}
    </Link>
  )
}
