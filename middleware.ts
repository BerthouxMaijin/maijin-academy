import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // TODO: When auth is configured, check session here
  // import { auth } from '@/lib/auth'
  // const session = await auth()
  // if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
