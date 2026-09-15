'use client'

import { useState } from 'react'

/**
 * Footer subscribe form. The export posted to Webflow's form endpoint, which
 * does not exist outside Webflow hosting, so this keeps the markup and validates
 * locally. Wire `onSubmit` to your provider (Mailchimp, Loops, Resend, ...) when
 * you have one.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email) return
    setStatus('done')
    setEmail('')
  }

  return (
    <form className="newsletter-input" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        aria-label="Email address"
        className="input"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit" className="newsletter-button">
        {status === 'done' ? 'Subscribed' : 'Subscribe'}
      </button>
    </form>
  )
}
