import type { Metadata } from "next";

import { env } from "@/shared/schema/env-schema";

// Managing page metadata
export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL || "https://tgame1store.ir"),
    title: {
        default: "ورود و ثبت نام",
        template: "%s | تی گیم",
        absolute: "تی گیم | ورود و ثبت‌نام",
    },
    description:
        "وارد حساب کاربری خود شوید یا حساب جدیدی ایجاد کنید و خرید، سفارش‌ها و اطلاعات حساب خود را مدیریت کنید.",
    keywords: [
        "خرید لایسنس اورجینال",
        "لوازم جانبی کامپیوتر",
        "تجهیزات فناوری",
        "لایسنس ویندوز",
        "هدست گیمینگ",
        "ورود به حساب کاربری",
        "ثبت نام در تی گیم",
    ],
    alternates: {
        canonical: "/",
    },
    twitter: {
        card: "summary_large_image",
        title: "تی گیم | ورود و ثبت‌نام",
        description:
            "وارد حساب کاربری خود شوید یا حساب جدیدی ایجاد کنید و خرید، سفارش‌ها و اطلاعات حساب خود را مدیریت کنید.",
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

export default async function AuthenticationRegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main>{children}</main>;
}
