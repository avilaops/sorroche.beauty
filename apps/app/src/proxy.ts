import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/auth";

const STAFF_ROLES = new Set(["STAFF", "ADMIN", "OWNER"]);

/**
 * Checagem otimista de sessão. A autorização real acontece em cada
 * página e server action via `auth()`.
 */
export default async function proxy(req: NextRequest) {
  const session = await auth();
  const user = session?.user;
  const { pathname } = req.nextUrl;
  const isAuthRoute = pathname === "/entrar" || pathname === "/criar-conta";

  if (!user) {
    if (isAuthRoute) return NextResponse.next();
    const url = new URL("/entrar", req.nextUrl);
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  const isStaff = STAFF_ROLES.has(user.role);

  if (isAuthRoute) {
    return NextResponse.redirect(new URL(isStaff ? "/admin" : "/", req.nextUrl));
  }

  if (pathname.startsWith("/admin") && !isStaff) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  // Metadados públicos (manifest, ícones, robots) precisam responder sem
  // sessão — senão o navegador não consegue instalar o app.
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon/|apple-icon|manifest.webmanifest|robots.txt|sitemap.xml|.*\\.png$).*)",
  ],
};
