"use client";

import { digitsEnToFa } from "@persian-tools/persian-tools";
import { CaretLeftIcon } from "@phosphor-icons/react";

import Link from "next/link";

import { notFoundErrorItems } from "@/shared/constants/errors";

export function NotFoundItems() {
    return (
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {notFoundErrorItems.map((items) => (
                <Link
                    key={items.id}
                    href={items.link}
                    className="group flex items-center gap-3.5 rounded-2xl border border-slate-100 bg-white p-4 text-right transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 focus-visible:outline-2 focus-visible:outline-primary sm:p-5"
                >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                        <items.Icon name="mobile" className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                        <span className="block text-xs font-bold text-slate-700 sm:text-sm">
                            {digitsEnToFa(items.title)}
                        </span>
                        <span className="mt-1.5 hidden text-xs text-slate-400 sm:block">
                            {digitsEnToFa(items.desc)}
                        </span>
                    </span>
                    <CaretLeftIcon
                        name="chevron"
                        className="hidden size-3 shrink-0 text-slate-300 group-hover:text-primary xl:block"
                    />
                </Link>
            ))}
        </div>
    );
}
