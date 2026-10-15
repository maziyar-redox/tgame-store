// Importing createEnvObject
import { createEnv } from "@t3-oss/env-nextjs";
// Importing z object
import { z } from "zod";

export const env = createEnv({
    // Server-side variables (never exposed to the browser)
    server: {
        BASE_API_URL: z.url(),
        MAIN_PAGE_BANNER: z.string(),
        MAIN_PAGE_TERMS: z.string(),
        S3_BUCKET_URL: z.string(),
    },
    // Client-side variables (must start with NEXT_PUBLIC_)
    client: {
        NEXT_PUBLIC_MAIN_PAGE_BANNER: z.string(),
        NEXT_PUBLIC_MAIN_PAGE_TERMS: z.string(),
        NEXT_PUBLIC_S3_BUCKET_URL: z.string(),
    },
    // Next.js requires you to manually pass the runtime env values
    runtimeEnv: {
        MAIN_PAGE_BANNER: process.env.MAIN_PAGE_BANNER,
        MAIN_PAGE_TERMS: process.env.MAIN_PAGE_TERMS,
        BASE_API_URL: process.env.BASE_API_URL,
        S3_BUCKET_URL: process.env.S3_BUCKET_URL,
        NEXT_PUBLIC_MAIN_PAGE_BANNER: process.env.NEXT_PUBLIC_MAIN_PAGE_BANNER,
        NEXT_PUBLIC_MAIN_PAGE_TERMS: process.env.NEXT_PUBLIC_MAIN_PAGE_TERMS,
        NEXT_PUBLIC_S3_BUCKET_URL: process.env.NEXT_PUBLIC_S3_BUCKET_URL,
    },
});
