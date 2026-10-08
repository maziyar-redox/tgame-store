// IMPORT: Importing metadata from next for managing page metadata
import type { Metadata } from "next";

// Creating main page metadata
export const metadata: Metadata = {
    title: "تی گیم | خرید آنلاین محصولات تکنولوژی، گیم و لوازم جانبی",
    description:
        "خرید آنلاین جدیدترین محصولات تکنولوژی، کنسول و بازیهای ویدیویی، لوازم جانبی و گجتهای هوشمند با قیمت مناسب، ضمانت اصالت کالا و ارسال سریع به سراسر ایران.",
};

export default function CategoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}
