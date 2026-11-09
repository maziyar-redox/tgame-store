import type { Metadata } from "next";

import { Sidebar } from "@/features/panel/sidebar";

import { env } from "@/shared/schema/env-schema";

// Managing page metadata
export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL || "https://tgame1store.ir"),
    title: {
        default: "پنل کاربری",
        template: "%s | تی گیم",
        absolute: "تی گیم | پنل کاربری",
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

export default async function PanelDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="mx-auto w-[90%] px-4 py-6 sm:px-6 sm:py-9 lg:px-8">
            <div className="grid items-start gap-6 lg:grid-cols-[220px_1fr]">
                <Sidebar />
                <section className="min-w-0">{children}</section>
            </div>
        </main>
    );
}
