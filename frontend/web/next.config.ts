// Importing next config
import type { NextConfig } from "next";
// Importing env
import { env } from "@/schema/env-schema";

const nextConfig: NextConfig = {
    reactCompiler: true,
    images: {
        remotePatterns: [new URL(`${env.S3_BUCKET_URL}/*`)],
        minimumCacheTTL: 86400,
        qualities: [25, 50, 75],
    },
    experimental: {
        imgOptTimeoutInSeconds: 30,
    },
};

export default nextConfig;
