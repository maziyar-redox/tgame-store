import type { Metadata } from "next";

import { env } from "@/shared/schema/env-schema";

// Creating checkout page metadata
export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL || "https://tgame1store.ir"),
    title: {
        default: "سبد خرید",
        template: "%s | تی گیم",
        absolute: "تی گیم | سبد خرید",
    },
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default async function CheckoutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}
