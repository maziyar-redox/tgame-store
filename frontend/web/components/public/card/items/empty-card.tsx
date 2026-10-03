"use client";

// Importing icons
import { BasketIcon } from "@phosphor-icons/react";

export function EmptyCard() {
    return (
        <div className="grid min-h-120 place-items-center rounded-3xl border border-dashed border-slate-200 bg-white text-center">
            <div>
                <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-blue-50 text-primary">
                    <BasketIcon name="bag" className="size-8" />
                </span>
                <h2 className="mt-4 text-xl font-black">
                    سبد خرید شما خالی است
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                    محصولات مورد علاقه‌تان را به سبد اضافه کنید.
                </p>
                <button
                    type="button"
                    className="mt-5 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white"
                >
                    مشاهده محصولات
                </button>
            </div>
        </div>
    );
}
