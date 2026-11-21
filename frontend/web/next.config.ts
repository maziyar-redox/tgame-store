import path from "node:path";

import createMDX from "@next/mdx";
import type { NextConfig } from "next";

import { env } from "@/shared/schema/env-schema";

const nextConfig: NextConfig = {
    output: "standalone",
    reactCompiler: true,
    outputFileTracingRoot: path.join(import.meta.dirname, "../.."),
    cacheComponents: true,
    partialPrefetching: true,
    logging: {
        fetches: {
            fullUrl: true,
            hmrRefreshes: true,
        },
        serverFunctions: true,
        incomingRequests: true,
        browserToTerminal: true,
    },
    images: {
        remotePatterns: [new URL(`${env.S3_BUCKET_URL}/*`)],
        minimumCacheTTL: 86400,
        qualities: [25, 50, 75, 100],
    },
    experimental: {
        imgOptTimeoutInSeconds: 30,
        optimizePackageImports: ["@phosphor-icons/react"],
        instantInsights: {
            validationLevel: "warning",
        },
    },
    allowedDevOrigins: ["192.168.100.*", "172.20.10.*"],
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
