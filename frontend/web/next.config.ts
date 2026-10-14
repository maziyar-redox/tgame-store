// Importing next config
import type { NextConfig } from "next";
// Importing env
import { env } from "@/schema/env-schema";

const nextConfig: NextConfig = {
    reactCompiler: true,
    images: {
        remotePatterns: [new URL(`${env.S3_BUCKET_URL}/*`)],
    },
};

export default nextConfig;
