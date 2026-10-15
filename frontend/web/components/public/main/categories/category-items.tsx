"use client";

// Importing tailwindmerge utils
import { cn } from "cn";
// Importing nextjs utils
import Link from "next/link";
// Importing category props
import type { MainCategoriesProps } from "@/types/main/categories";

export function CategoryItems({
    title,
    link,
    color,
    Icon,
}: MainCategoriesProps) {
    return (
        <Link
            href={link}
            className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 text-right shadow-[0_8px_30px_rgba(15,46,100,.04)] transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_14px_35px_rgba(8,102,255,.1)] sm:p-4"
        >
            <span
                className={cn(
                    "grid size-11 shrink-0 place-items-center rounded-xl",
                    color,
                )}
            >
                <Icon />
            </span>
            <span className="font-bold text-slate-700">{title}</span>
        </Link>
    );
}
