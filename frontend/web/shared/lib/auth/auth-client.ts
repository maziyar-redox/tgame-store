import { createAuthClient } from "better-auth/react";
import { phoneNumberClient } from "@/shared/lib/auth/plugins/client";
import { env } from "@/shared/schema/env-schema";

export const { signIn, signUp, useSession, getSession } = createAuthClient({
    baseURL: env.NEXT_PUBLIC_SITE_URL,
    plugins: [phoneNumberClient()],
});
