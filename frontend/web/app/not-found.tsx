import type { Metadata } from "next";

import { NotFoundWrapper } from "@/shared/components/not-found";
import { NotFoundItems } from "@/shared/components/not-found/items";

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
        <NotFoundWrapper>
            <NotFoundItems />
        </NotFoundWrapper>
    );
}
