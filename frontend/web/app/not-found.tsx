import type { Metadata } from "next";
import { NotFoundWrapper } from "@/shared/components/not-found";
import { NotFoundItems } from "@/shared/components/not-found/items";
import { env } from "@/shared/schema/env-schema";

// Managing metadata
export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL || "https://tgame1store.ir"),
    title: {
        default: "صفحه پیدا نشد",
        template: "%s | تی گیم",
        absolute: "تی گیم | صفحه پیدا نشد",
    },
    description:
        "صفحه درخواست شده وجود ندارد لطفا دوباره تلاش کنید یا اینکه به آدرس دیگر بروید",
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

export default async function NotFound() {
    return (
        <NotFoundWrapper>
            <NotFoundItems />
        </NotFoundWrapper>
    );
}
