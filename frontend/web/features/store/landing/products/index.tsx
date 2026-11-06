"use client";

import { CaretLeftIcon } from "@phosphor-icons/react";

import Link from "next/link";

export function Products({ children }: { children: React.ReactNode }) {
    return (
        <section
            id="latest"
            className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6"
        >
            <div className="mb-6 flex items-end justify-between">
                <div>
                    <p className="mb-1 text-xs font-bold text-primary">
                        تازه از راه رسیده
                    </p>
                    <h2 className="text-xl font-black sm:text-2xl">
                        پرفروش ترین محصولات
                    </h2>
                </div>
                <Link
                    href="#"
                    className="hidden items-center gap-1 text-xs font-bold text-slate-500 hover:text-primary transition-all sm:flex"
                >
                    مشاهده همه
                    <CaretLeftIcon name="chevron" className="size-4" />
                </Link>
            </div>
            {children}
        </section>
    );
}
