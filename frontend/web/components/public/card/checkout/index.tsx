"use client";

// Importing icons
import { ArrowRightIcon, CheckIcon } from "@phosphor-icons/react";
// Importing nextjs utils
import Link from "next/link";

export function CheckoutPageComponent() {
    return (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-9 lg:px-8">
            <div className="mb-7">
                <Link
                    href="/card"
                    className="mb-4 flex items-center gap-2 text-xs font-bold text-slate-500"
                >
                    <ArrowRightIcon name="arrow" className="size-4" />
                    بازگشت به سبد خرید
                </Link>
                <h1 className="text-2xl font-black text-brand-navy sm:text-3xl">
                    تکمیل سفارش
                </h1>
                <div className="mt-5 flex max-w-lg items-center">
                    {[
                        ["check", "سبد خرید"],
                        ["location", "اطلاعات ارسال"],
                        ["credit", "پرداخت"],
                    ].map(([_icon, label], index) => (
                        <div key={label} className="contents">
                            <div className="flex shrink-0 flex-col items-center gap-1.5">
                                <span
                                    className={`grid size-8 place-items-center rounded-full ${index < 2 ? "bg-[#0866ff] text-white" : "bg-blue-50 text-[#0866ff]"}`}
                                >
                                    <CheckIcon className="size-4" />
                                </span>
                                <span className="text-[9px] font-bold text-slate-500 sm:text-[10px]">
                                    {label}
                                </span>
                            </div>
                            {index < 2 && (
                                <span className="mb-4 h-px flex-1 bg-blue-200" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
