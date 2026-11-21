"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export function SearchState() {
    return (
        <div className="grid min-h-80 place-items-center rounded-3xl border border-dashed border-slate-200 bg-white text-center">
            <div>
                <MagnifyingGlassIcon
                    name="search"
                    className="mx-auto size-8 text-slate-300"
                />
                <h3 className="mt-3 font-bold">محصولی پیدا نشد</h3>
                <p className="mt-1 text-xs text-slate-400">
                    عبارت دیگری را جستجو کنید
                </p>
            </div>
        </div>
    );
}
