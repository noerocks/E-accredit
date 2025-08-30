import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/action/session";
import { accessControl, hasPermission } from "./lib/access-control";
import { Role } from "./lib/generated/prisma";

const publicRoutes = ["/", "/login", "/register"];

export default async function middleware(req: NextRequest) {
  const pathName = req.nextUrl.pathname;
  const session = (await cookies()).get("session")?.value;
  const isPublicRoute = publicRoutes.includes(pathName);
  const payload = await decrypt(session);
  const role = payload?.role as Role;

  if (!session && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (session && isPublicRoute) {
    const authenticatedPath = accessControl[role][0];
    return NextResponse.redirect(new URL(authenticatedPath, req.nextUrl));
  }

  if (session && !hasPermission(role, pathName)) {
    const authorizedPath = accessControl[role][0];
    return NextResponse.redirect(new URL(authorizedPath, req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
