"use client";

import { BagIcon, CaretLeftIcon, ShieldCheckIcon } from "@phosphor-icons/react";

export function InternalErrorItems() {
    return (
        <section className="mx-auto grid max-w-3xl gap-3 border-t border-slate-200/70 pt-8 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 text-right sm:p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                    <ShieldCheckIcon name="shield" className="size-5" />
                </span>
                <span>
                    <b className="block text-sm text-slate-700">
                        اطلاعات شما امن است
                    </b>
                    <span className="mt-1 block text-xs leading-5 text-slate-400">
                        سبد خرید و سفارش‌های شما تغییری نکرده‌اند.
                    </span>
                </span>
            </div>
            <button
                type="button"
                className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 text-right transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 focus-visible:outline-2 focus-visible:outline-primary sm:p-5"
            >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <BagIcon name="bag" className="size-5" />
                </span>
                <span className="flex-1">
                    <b className="block text-sm text-slate-700">
                        مشاهدهٔ محصولات
                    </b>
                    <span className="mt-1 block text-xs leading-5 text-slate-400">
                        تا رفع مشکل، تازه‌های تکنو را ببینید.
                    </span>
                </span>
                <CaretLeftIcon
                    name="chevron"
                    className="size-3 text-slate-300 group-hover:text-primary"
                />
            </button>
        </section>
    );
}
