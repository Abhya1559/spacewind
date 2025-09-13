import { NextResponse, NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";
import path from "path";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const user = token ? await verifyToken(token) : null;

  const { pathname } = request.nextUrl;

  const isAuthRoute = ["/login", "/register"].includes(pathname);
  const isPublicRoute = ["/", "/login", "/register"].includes(pathname);

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
