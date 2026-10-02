"use client";

import { cn } from "cn";
import { usePathname } from "next/navigation";

export function Footer() {
    const pathname = usePathname();
    return (
        <footer
            className={cn(
                "bg-white px-4 py-7 text-center text-xs text-slate-400",
                pathname === "/" ? "rounded-none" : "rounded-4xl",
            )}
        >
            © ۱۴۰۶ فروشگاه تی گیم — تمامی حقوق مادی و معنوی این وب‌سایت محفوظ و
            متعلق به تی گیم شاپ می‌باشد.
        </footer>
    );
}
