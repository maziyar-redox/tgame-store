import type { Metadata } from "next";

import { env } from "@/shared/schema/env-schema";

// Creating category page metadata
export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL || "https://tgame1store.ir"),
    title: "تی گیم | خرید آنلاین محصولات تکنولوژی، گیم و لوازم جانبی",
    description:
        "خرید آنلاین جدیدترین محصولات تکنولوژی، کنسول و بازیهای ویدیویی، لوازم جانبی و گجتهای هوشمند با قیمت مناسب، ضمانت اصالت کالا و ارسال سریع به سراسر ایران.",
};

export default async function CategoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}
