import type { Metadata } from "next";

import { env } from "@/shared/schema/env-schema";

// Managing page metadata
export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL || "https://tgame1store.ir"),
    title: {
        default: "ویرایش حساب کاربری",
        template: "%s | تی گیم",
        absolute: "تی گیم | ویرایش حساب کاربری",
    },
    description: "از این صفحه میتوانید اطلاعات مربوط به حساب را مشاهده نمایید",
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

export default async function PanelAccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}
