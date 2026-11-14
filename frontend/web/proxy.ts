import { headers } from "next/headers";
import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { auth } from "@/shared/lib/auth/auth";

const authRoutes = ["/login", "/register", "/otp"];

export async function proxy(request: NextRequest, _event: NextFetchEvent) {
    const { pathname } = request.nextUrl;

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const isAuthRoute = authRoutes.some((prefix: string) =>
        pathname.startsWith(prefix),
    );

    if (session && isAuthRoute) {
        return NextResponse.redirect(new URL("/panel", request.url));
    }

    if (!session && !isAuthRoute) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/panel/:path*", "/login", "/register", "/otp"],
};
