// Importing metadata from nextjs
import type { Metadata } from "next";
// Added not found components
import { NotFoundComponent } from "@/components/global/error/notfound";
import { NotFoundPageItems } from "@/components/global/error/notfound/items";

// Managing metadata
export const metadata: Metadata = {
    title: "تی گیم | صفحه پیدا نشد!",
    description:
        "صفحه درخواست شده وجود ندارد لطفا دوباره تلاش کنید یا اینکه به آدرس دیگر بروید",
    robots: {
        index: false,
        follow: false,
    },
};

export default async function NotFound() {
    return (
        <NotFoundComponent>
            <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                <NotFoundPageItems />
            </div>
        </NotFoundComponent>
    );
}
