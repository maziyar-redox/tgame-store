import type { Metadata } from "next";

import { env } from "@/shared/schema/env-schema";

// Creating category page metadata
export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL || "https://tgame1store.ir"),
    title: {
        default: "دسته بندی محصولات",
        template: "%s | تی گیم",
        absolute: "تی گیم | دسته بندی محصولات",
    },
    description:
        "خرید آنلاین جدیدترین محصولات تکنولوژی، کنسول و بازیهای ویدیویی، لوازم جانبی و گجتهای هوشمند با قیمت مناسب، ضمانت اصالت کالا و ارسال سریع به سراسر ایران.",
    keywords: [
        "خرید محصولات فناوری",
        "لایسنس اورجینال",
        "لوازم جانبی کامپیوتر",
        "تجهیزات سخت‌افزاری",
    ],
    alternates: {
        canonical: "/category",
    },
    twitter: {
        card: "summary_large_image",
        title: "تی گیم | دسته بندی محصولات",
        description:
            "خرید آنلاین جدیدترین محصولات تکنولوژی، کنسول و بازیهای ویدیویی، لوازم جانبی و گجتهای هوشمند با قیمت مناسب، ضمانت اصالت کالا و ارسال سریع به سراسر ایران.",
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

export default async function CategoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}
