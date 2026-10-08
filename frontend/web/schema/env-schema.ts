// Importing createEnvObject
import { createEnv } from "@t3-oss/env-nextjs";
// Importing z object
import { z } from "zod";

export const env = createEnv({
    // Server-side variables (never exposed to the browser)
    server: {
        BASE_API_URL: z.url(),
    },
    // Client-side variables (must start with NEXT_PUBLIC_)
    /* client: {
        NEXT_PUBLIC_API_URL: z.string().url(),
    }, */
    // Next.js requires you to manually pass the runtime env values
    runtimeEnv: {
        BASE_API_URL: process.env.BASE_API_URL,
    },
});
