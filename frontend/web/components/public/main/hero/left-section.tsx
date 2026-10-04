"use client";

// Importing Icons
import { ArrowRightIcon } from "@phosphor-icons/react";
// Importing tailwindMerge utils
import { cn } from "cn";
// Importing nextjs utils
import Link from "next/link";
// Importing button variants from global ui
import { buttonVariants } from "@/components/ui/button";

export function LeftSection() {
    return (
        <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-primary ring-1 ring-blue-100">
                <span className="size-1.5 rounded-full bg-primary relative">
                    <span className="size-1.5 rounded-full bg-primary absolute top-0 left-0 right-0 bottom-0 transition-all animate-ping" />
                </span>
                تکنولوژی، یک قدم جلوتر
            </span>
            <h1 className="mt-5 text-[36px] font-black leading-[1.3] tracking-[-0.04em] text-brand-navy sm:text-5xl lg:text-[58px]">
                دنیای تکنولوژی
                <br />
                <span className="text-primary">در دستان شماست</span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                جدیدترین محصولات دیجیتال از برترین برندهای جهان، با ضمانت اصالت
                و ارسال سریع به سراسر ایران.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                    href="#latest"
                    className={cn(
                        buttonVariants({ variant: "empty", size: "empty" }),
                        "inline-flex items-center gap-3 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-300 transition hover:-translate-y-0.5 hover:bg-blue-700",
                    )}
                >
                    مشاهده محصولات
                    <ArrowRightIcon
                        name="arrow"
                        className="size-4 rotate-180"
                    />
                </Link>
                <Link
                    href="#categories"
                    className={cn(
                        buttonVariants({ variant: "empty", size: "empty" }),
                        "rounded-xl bg-white/70 px-5 py-3 text-sm font-bold text-slate-700 ring-1 ring-slate-200 transition hover:bg-white",
                    )}
                >
                    دسته‌بندی‌ها
                </Link>
            </div>
        </div>
    );
}
