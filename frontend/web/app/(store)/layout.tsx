import type { Metadata } from "next";
import { Navigation } from "@/features/store/navigation";
import { Banner } from "@/shared/components/banner";
import { Footer } from "@/shared/components/footer";
import { NavigationStoreProvider } from "@/shared/provider/navigation-provider";
import { env } from "@/shared/schema/env-schema";

// Creating main page metadata
export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL || "https://tgame1store.ir"),
    title: {
        default: "خرید آنلاین محصولات تکنولوژی، گیم و لوازم جانبی",
        template: "%s | تی گیم",
        absolute: "تی گیم | خرید آنلاین محصولات تکنولوژی، گیم و لوازم جانبی",
    },
    description:
        "خرید آنلاین جدیدترین محصولات تکنولوژی، کنسول و بازیهای ویدیویی، لوازم جانبی و گجتهای هوشمند با قیمت مناسب، ضمانت اصالت کالا و ارسال سریع به سراسر ایران.",
    keywords: [
        "خرید لایسنس اورجینال",
        "لوازم جانبی کامپیوتر",
        "تجهیزات فناوری",
        "لایسنس ویندوز",
        "هدست گیمینگ",
    ],
    alternates: {
        canonical: "/",
    },
    twitter: {
        card: "summary_large_image",
        title: "تی گیم | خرید آنلاین محصولات تکنولوژی، گیم و لوازم جانبی",
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

export default function StoreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Banner />
            <NavigationStoreProvider>
                <Navigation />
            </NavigationStoreProvider>
            {children}
            <Footer />
        </div>
    );
}
