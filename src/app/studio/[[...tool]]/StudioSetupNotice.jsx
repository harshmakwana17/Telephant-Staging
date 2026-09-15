/**
 * Shown at /studio when no Sanity project is configured yet, instead of letting
 * the Studio throw its raw "Configuration must contain `projectId`" error.
 */
export function StudioSetupNotice() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
        background: '#f6f6f8',
        color: '#141414',
      }}
    >
      <div style={{ maxWidth: 560, lineHeight: 1.6 }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
          Sanity Studio is not connected yet
        </h1>
        <p style={{ marginBottom: '1.25rem', color: '#494949' }}>
          The site is running on the placeholder content in{' '}
          <code>src/lib/fallback.js</code>. To turn the CMS on:
        </p>
        <ol style={{ paddingLeft: '1.25rem', color: '#494949' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            Create a project at{' '}
            <a href="https://sanity.io/manage" target="_blank" rel="noreferrer">
              sanity.io/manage
            </a>
            .
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Put its ID in <code>.env.local</code> as{' '}
            <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code>.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Add <code>http://localhost:3000</code> as a CORS origin (with
            credentials) in that project&apos;s API settings.
          </li>
          <li>
            Restart <code>npm run dev</code> and reload this page.
          </li>
        </ol>
      </div>
    </div>
  )
}
