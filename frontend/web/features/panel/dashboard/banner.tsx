"use client";

// Importing merging utils
import { cn } from "cn";
// Importing next utils
import Link from "next/link";
// Importing buttons from local ui
import { buttonVariants } from "@/shared/components/ui/button";

export function Banner() {
    return (
        <div className="rounded-3xl bg-brand-navy p-6 text-white sm:flex sm:items-center sm:justify-between sm:p-8">
            <div>
                <p className="text-xs text-blue-200">سلام، خوش آمدید</p>
                <h1 className="mt-2 text-2xl font-black">مازیار عیسی نژاد</h1>
                <p className="mt-2 text-xs text-blue-100/60">
                    آخرین ورود: امروز، ساعت ۱۰:۴۵
                </p>
            </div>
            <Link
                href="/panel/account"
                className={cn(
                    buttonVariants({ variant: "empty", size: "empty" }),
                    "mt-5 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-bold ring-1 ring-white/20 sm:mt-0",
                )}
            >
                ویرایش اطلاعات
            </Link>
        </div>
    );
}
