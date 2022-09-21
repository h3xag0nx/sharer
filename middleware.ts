import { NextRequest, userAgent, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (!userAgent(request).isBot) {
    return NextResponse.redirect(new URL('https://level.fi'));
  }
}

export const config = {
  matcher: '/',
}