import { NextResponse } from "next/server";
import { auth } from "@/auth";

const STAFF_ROLES = new Set(["STAFF", "ADMIN", "OWNER"]);

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const user = req.auth?.user;

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

  // Painel administrativo: apenas STAFF/ADMIN/OWNER.
  if (pathname.startsWith("/admin") && !isStaff) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
