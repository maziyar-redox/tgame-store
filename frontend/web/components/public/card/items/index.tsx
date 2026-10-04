"use client";

/* import { EmptyCard } from "@/components/public/card/items/empty-card"; */
// Importing arrow icon
import { ArrowRightIcon } from "@phosphor-icons/react";
// Importing next utils
import Link from "next/link";
// Importing local ui components
import { CardCount } from "@/components/public/card/items/card-count";
import { Items } from "@/components/public/card/items/items";
import { Status } from "@/components/public/card/items/status";

export function CardPageComponent() {
    return (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-9 lg:px-8">
            <CardCount />
            {/* <EmptyCard /> */}
            <div className="grid items-start gap-6 lg:grid-cols-[1fr_360px]">
                <section className="space-y-3">
                    <Items />
                    <Items />
                    <Items />
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
