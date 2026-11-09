"use client";

// import { EmptyCard } from "@/features/store/card/items/empty-card";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

import { CardCount } from "@/features/store/card/items/card-count";
import { Status } from "@/features/store/card/items/status";

export function CardLayoutWrapper({ children }: { children: React.ReactNode }) {
    return (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-9 lg:px-8">
            <CardCount />
            {/* <EmptyCard /> */}
            <div className="grid items-start gap-6 lg:grid-cols-[1fr_360px]">
                <section className="space-y-3">
                    {children}
                    <Link
                        href="/categories"
                        className="mt-2 inline-flex items-center gap-2 rounded-xl px-2 py-3 text-sm font-bold text-primary"
                    >
                        <ArrowRightIcon name="arrow" className="size-4" />
                        ادامه خرید
                    </Link>
                </section>
                <Status />
            </div>
        </main>
    );
}
