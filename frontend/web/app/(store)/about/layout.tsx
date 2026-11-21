import type { Metadata } from "next";

import { env } from "@/shared/schema/env-schema";

type Prefetch = "auto" | "partial" | "force-disabled";
type InstantConfig =
    | true
    | false
    | {
          level?: "warning";
      };
type EnsureStatic = "auto" | "shell" | "prefetch" | "navigation" | false;

export const maxDuration: number = 5;
export const prefetch: Prefetch = "force-disabled";
export const instant: InstantConfig = true;
export const ensureStatic: EnsureStatic = "navigation";

// Creating category page metadata
export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL || "https://tgame1store.ir"),
    title: {
        default: "درباره ما",
        template: "%s | تی گیم",
        absolute: "تی گیم | درباره ما",
    },
    description:
        "با تیم پشت فروشگاه آشنا شوید. ما تجهیزات فناوری، لایسنس اورجینال و لوازم جانبی با ضمانت اصالت و پشتیبانی واقعی ارائه می‌دهیم.",
    keywords: [
        "درباره ما",
        "فروشگاه محصولات فناوری",
        "لایسنس اورجینال",
        "تیم پشتیبانی",
    ],
    alternates: {
        canonical: "/about",
    },
    twitter: {
        card: "summary_large_image",
        title: "تی گیم | درباره ما",
        description:
            "با تیم پشت فروشگاه آشنا شوید. ما تجهیزات فناوری، لایسنس اورجینال و لوازم جانبی با ضمانت اصالت و پشتیبانی واقعی ارائه می‌دهیم.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default async function AboutLayout(props: LayoutProps<"/about">) {
    return <div>{props.children}</div>;
}
