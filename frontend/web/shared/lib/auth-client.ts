import { createAuthClient } from "better-auth/react";

import { env } from "@/shared/schema/env-schema";

export const { signIn, signUp, useSession } = createAuthClient({
    baseURL: env.NEXT_PUBLIC_SITE_URL,
});
