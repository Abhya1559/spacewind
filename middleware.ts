import { NextResponse, NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";
import path from "path";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  let user = null;
  if (token) {
    try {
      user = await verifyToken(token);
    } catch {
      user = null; // handle invalid/expired token
    }
  }

  const { pathname } = request.nextUrl;

  const authRoutes = ["/login", "/register"];
  const publicRoutes = ["/"];

  const isAuthRoute = authRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.includes(pathname) || isAuthRoute;

  if (!user && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (user && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon\\.ico|api/).*)"],
};
