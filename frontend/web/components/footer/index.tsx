"use client";

// Importing digits to fa function
import { digitsEnToFa } from "@persian-tools/persian-tools";
// Importing tailwindMerge utils
import { cn } from "cn";
// Importing nextjs utils
import { usePathname } from "next/navigation";

export function Footer() {
    const pathname = usePathname();
    const footerText =
        "© ۱۴۰۶ فروشگاه تی گیم — تمامی حقوق مادی و معنوی این وب‌سایت محفوظ و متعلق به تی گیم شاپ می‌باشد.";
    return (
        <footer
            className={cn(
                "bg-white px-4 py-7 text-center text-xs text-slate-400",
                pathname === "/" ? "rounded-none" : "rounded-4xl",
            )}
        >
            {digitsEnToFa(footerText)}
        </footer>
    );
}
