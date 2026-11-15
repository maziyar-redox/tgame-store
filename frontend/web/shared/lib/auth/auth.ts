import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { phoneNumber } from "@/shared/lib/auth/plugins";
import { env } from "@/shared/schema/env-schema";

const auth = betterAuth({
    appName: "Tgame Shop",
    baseURL: {
        allowedHosts: ["tgame1store.ir", "www.tgame1store.ir"],
        protocol: "https",
        fallback: "https://tgame1store.ir",
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7,
        updateAge: 60 * 60 * 24,
        freshAge: 60 * 60 * 24,
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60,
            strategy: "jwe",
            refreshCache: true,
            version: "1",
        },
        deferSessionRefresh: true,
        storeSessionInDatabase: false,
    },
    account: {
        storeStateStrategy: "cookie",
        skipStateCookieCheck: false,
        storeAccountCookie: true,
        fields: {},
    },
    advanced: {
        cookiePrefix: "tgame-store",
        cookies: {
            session_token: {
                name: "tgame_session_token",
                attributes: {
                    domain: new URL(env.NEXT_PUBLIC_SITE_URL).hostname,
                    sameSite: "lax",
                    secure: process.env.NODE_ENV === "production",
                    httpOnly: process.env.NODE_ENV === "production",
                    path: "/",
                    maxAge: 604800,
                    partitioned: false,
                },
            },
        },
        useSecureCookies: process.env.NODE_ENV === "production",
        database: {
            validateSchema: true,
        },
    },
    plugins: [nextCookies(), phoneNumber()],
});

type Session = typeof auth.$Infer.Session;

export { auth, type Session };
