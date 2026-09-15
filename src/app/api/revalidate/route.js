import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

/**
 * Sanity webhook target. Point a webhook at POST /api/revalidate with the
 * secret below and publishing in the Studio refreshes the affected pages
 * without a redeploy.
 *
 * Sanity Studio -> Manage -> API -> Webhooks
 *   URL:     https://your-site.com/api/revalidate
 *   Dataset: production
 *   Trigger on: create, update, delete
 *   Secret:  same value as SANITY_REVALIDATE_SECRET
 */
export async function POST(req) {
  try {
    const { isValidSignature, body } = await parseBody(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    )

    if (!isValidSignature) {
      return new NextResponse('Invalid signature', { status: 401 })
    }

    if (!body?._type) {
      return new NextResponse('Bad request: missing _type', { status: 400 })
    }

    // Every query is tagged 'sanity' plus its document type, so this busts the
    // broad tag and the specific one.
    revalidateTag('sanity')
    revalidateTag(body._type)

    return NextResponse.json({
      revalidated: true,
      type: body._type,
      now: Date.now(),
    })
  } catch (error) {
    console.error('[revalidate]', error)
    return new NextResponse(error.message, { status: 500 })
  }
}
