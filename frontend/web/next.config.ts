import path from "node:path";

import createMDX from "@next/mdx";
import type { NextConfig } from "next";

import { env } from "@/shared/schema/env-schema";

const nextConfig: NextConfig = {
    output: "standalone",
    reactCompiler: true,
    outputFileTracingRoot: path.join(import.meta.dirname, "../.."),
    images: {
        remotePatterns: [new URL(`${env.S3_BUCKET_URL}/*`)],
        minimumCacheTTL: 86400,
        qualities: [25, 50, 75, 100],
    },
    experimental: {
        imgOptTimeoutInSeconds: 30,
        optimizePackageImports: ["@phosphor-icons/react"],
    },
    allowedDevOrigins: ["192.168.100.*"]
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
