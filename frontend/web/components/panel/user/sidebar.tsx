"use client";

// Importing icons
import { SignOutIcon } from "@phosphor-icons/react";
// Importing merge util
import { cn } from "cn";
// Importing nextjs utils
import Link from "next/link";
import { usePathname } from "next/navigation";
// Importing global ui
import { Button, buttonVariants } from "@/components/ui/button";
// Importing constant data
import { sidebarLinks } from "@/constants/sidebar";

export function Sidebar() {
    const pathname = usePathname();
    return (
        <aside className="overflow-hidden rounded-2xl border border-slate-100 bg-white lg:sticky lg:top-28">
            <div className="hidden border-b border-slate-100 p-5 lg:flex lg:items-center lg:gap-3">
                <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-blue-50 font-black text-[#0866ff]">
                    ع
                </span>
                <div className="min-w-0">
                    <b className="block truncate text-sm">مازیار عیسی نژاد</b>
                    <span className="text-xs text-slate-400">کاربر تی گیم</span>
                </div>
            </div>
            <nav className="flex gap-1 overflow-x-auto p-2 lg:block">
                {sidebarLinks.map((val) => (
                    <Link
                        key={val.id}
                        href={val.link}
                        className={cn(
                            buttonVariants({ variant: "empty", size: "empty" }),
                            "flex shrink-0 items-center justify-start gap-3 rounded-xl px-3 py-3 text-xs font-bold transition lg:mb-1 lg:w-full",
                            val.link === pathname
                                ? "bg-blue-50 text-primary"
                                : "text-slate-500 hover:bg-slate-50",
                        )}
                    >
                        <val.Icon name={val.text} className="size-4" />
                        {val.text}
                    </Link>
                ))}
            </nav>
            <Button
                variant="empty"
                size="empty"
                className="m-2 hidden w-[calc(100%-16px)] items-center gap-3 rounded-xl px-3 py-3 text-xs font-bold text-rose-500 hover:bg-rose-50 lg:flex"
            >
                <SignOutIcon name="logout" className="size-4" />
                خروج از حساب
            </Button>
        </aside>
    );
}
