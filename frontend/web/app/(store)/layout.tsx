import type { Metadata } from "next";
import { Navigation } from "@/features/store/navigation";
import { Banner } from "@/shared/components/banner";
import { Footer } from "@/shared/components/footer";
import { NavigationStoreProvider } from "@/shared/provider/navigation-provider";

// Creating main page metadata
export const metadata: Metadata = {
    title: "تی گیم | خرید آنلاین محصولات تکنولوژی، گیم و لوازم جانبی",
    description:
        "خرید آنلاین جدیدترین محصولات تکنولوژی، کنسول و بازیهای ویدیویی، لوازم جانبی و گجتهای هوشمند با قیمت مناسب، ضمانت اصالت کالا و ارسال سریع به سراسر ایران.",
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
