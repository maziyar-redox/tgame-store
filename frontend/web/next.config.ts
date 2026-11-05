// Importing next config

// Importing mdx utils
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

// Importing env
import { env } from "@/schema/env-schema";

const nextConfig: NextConfig = {
    reactCompiler: true,
    images: {
        remotePatterns: [new URL(`${env.S3_BUCKET_URL}/*`)],
        minimumCacheTTL: 86400,
        qualities: [25, 50, 75, 100],
    },
    experimental: {
        imgOptTimeoutInSeconds: 30,
    },
    allowedDevOrigins: ["192.168.100.*"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
