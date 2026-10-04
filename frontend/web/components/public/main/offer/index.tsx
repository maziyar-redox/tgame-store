"use client";

// Importing tailwindMerge utils
import { cn } from "cn";
import Image from "next/image";
// Importing next utils
import Link from "next/link";
// Importing global ui utils
import { buttonVariants } from "@/components/ui/button";

export function Offer() {
    return (
        <section
            id="offers"
            className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:pb-16"
        >
            <div className="grid overflow-hidden rounded-[28px] bg-brand-navy sm:grid-cols-[1.1fr_.9fr]">
                <div className="relative z-10 p-9 text-white md:p-10 lg:p-12">
                    <p className="text-xs font-bold text-blue-300">
                        فرصت محدود
                    </p>
                    <h2 className="mt-2 text-2xl font-black leading-relaxed lg:text-3xl">
                        پیشنهادهای ویژه گیمینگ
                    </h2>
                    <p className="mt-2 max-w-md text-sm leading-7 text-blue-100/75 mb-10">
                        تجهیزات حرفه‌ای برای تجربه‌ای فراتر از بازی؛ تا ۲۰٪ تخفیف
                        فقط تا پایان هفته.
                    </p>
                    <Link
                        href="/"
                        type="button"
                        className={cn(
                            buttonVariants({ variant: "empty", size: "empty" }),
                            "rounded-xl bg-white px-5 py-3 text-sm font-bold text-brand-navy transition hover:bg-blue-50",
                        )}
                    >
                        خرید تجهیزات گیمینگ
                    </Link>
                </div>
                <div className="relative min-h-56 overflow-hidden sm:min-h-full">
                    <Image
                        width={900}
                        height={900}
                        src="/2.jpg"
                        alt="دسته بازی در نور آبی"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="hidden sm:block absolute inset-0 bg-linear-to-l from-transparent to-brand-navy sm:bg-linear-to-r" />
                    <div className="block sm:hidden absolute inset-0 bg-linear-to-t from-transparent to-brand-navy sm:bg-linear-to-r" />
                </div>
            </div>
        </section>
    );
}
