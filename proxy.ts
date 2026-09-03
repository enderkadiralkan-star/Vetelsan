import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Block common scanner / exploit probe paths (WordPress, PHP, env dumps).
 * Real app routes are unaffected.
 */
const BLOCKED_PATH =
  /^\/(?:\.env(?:\..*)?|wp-admin|wp-login\.php|xmlrpc\.php|phpmyadmin|admin\.php|wp-content|wp-includes|cgi-bin|\.git|\.svn|vendor\/phpunit|actuator|solr|owa|HNAP1|\.aws|\.docker)(?:\/|$)/i;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (BLOCKED_PATH.test(pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml)$).*)",
  ],
};
