"use client";

import { Skeleton } from "@/shared/components/ui/skeleton";

export function SkeletonCard() {
    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_8px_30px_rgba(15,46,100,.04)] sm:rounded-3xl sm:p-3 select-none h-full">
            <div className="relative aspect-[1/1.02] overflow-hidden rounded-xl bg-media-surface sm:rounded-2xl">
                <Skeleton className="h-full w-full object-cover" />
            </div>
            <div className="px-1 pb-2 pt-3 sm:px-2 sm:pt-4">
                <Skeleton className="w-10 h-2" />
                <Skeleton className="mt-2.5 block w-full h-2.5" />
                <div className="mt-4 flex items-end justify-between gap-1">
                    <Skeleton className="mt-2.5 block w-14 h-2.5" />
                </div>
            </div>
        </article>
    );
}
