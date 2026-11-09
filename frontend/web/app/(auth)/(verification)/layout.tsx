import type { Metadata } from "next";
import { AuthenticationLayoutOtpComponent } from "@/features/auth/otp";
import { env } from "@/shared/schema/env-schema";

// Managing page metadata
export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL || "https://tgame1store.ir"),
    title: {
        default: "ورود و ثبت نام",
        template: "%s | تی گیم",
        absolute: "تی گیم | ورود و ثبت‌نام",
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

export default async function AuthenticationOtpLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthenticationLayoutOtpComponent>
            {children}
        </AuthenticationLayoutOtpComponent>
    );
}
