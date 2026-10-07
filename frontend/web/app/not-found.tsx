// Importing metadata from nextjs
import type { Metadata } from "next";
// Added not found component
import { NotFoundComponent } from "@/components/error/notfound/not-found";

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

export default function NotFound() {
    return <NotFoundComponent />;
}
