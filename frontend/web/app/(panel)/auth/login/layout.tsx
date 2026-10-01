// IMPORT: Importing metadata from next for managing page metadata
import type { Metadata } from "next";

// Managing page metadata
export const metadata: Metadata = {
    title: "تی گیم | ورود و ثبت‌نام",
    description:
        "وارد حساب کاربری خود شوید یا حساب جدیدی ایجاد کنید و خرید، سفارش‌ها و اطلاعات حساب خود را مدیریت کنید.",
};

export default function AuthenticationLoginLayout({
    children,
}: LayoutProps<"/panel">) {
    return <main>{children}</main>;
}
