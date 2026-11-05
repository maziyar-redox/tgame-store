import type { Metadata } from "next";

import { NotFoundComponent } from "@/shared/components/not-found";
import { NotFoundPageItems } from "@/shared/components/not-found/items";

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
