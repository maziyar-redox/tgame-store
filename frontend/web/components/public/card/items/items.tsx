"use client";

// Importing trash icon
import {
    CheckIcon,
    MinusIcon,
    PlusIcon,
    TrashIcon,
} from "@phosphor-icons/react";
// Importing nextjs utils
import Image from "next/image";

export function Items() {
    return (
        <article className="grid grid-cols-[92px_1fr] gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_8px_30px_rgba(15,46,100,.04)] sm:grid-cols-[130px_1fr] sm:gap-5 sm:p-4">
            <div className="aspect-square overflow-hidden rounded-xl bg-slate-50 sm:rounded-2xl">
                <Image
                    width={500}
                    height={500}
                    src="/2.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="min-w-0">
                <div className="flex items-start gap-2">
                    <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-semibold text-slate-400">
                            WH-1000XM5
                        </p>
                        <h2 className="mt-1 truncate text-sm font-black sm:text-base">
                            هدفون بلوتوثی سونی
                        </h2>
                    </div>
                    <button
                        type="button"
                        className="grid size-8 shrink-0 place-items-center rounded-lg text-slate-400 hover:bg-rose-50 hover:text-rose-500"
                        aria-label="حذف محصول"
                    >
                        <TrashIcon name="trash" className="size-4" />
                    </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-slate-500 sm:mt-3 sm:text-xs">
                    <span className="flex items-center gap-1.5">
                        <span className="size-3 rounded-full bg-brand-navy" />
                        رنگ : آبی تیره
                    </span>
                    <span className="flex items-center gap-1 text-emerald-600">
                        <CheckIcon name="check" className="size-3" />
                        موجود در انبار
                    </span>
                </div>
                <div className="mt-4 flex items-end justify-between gap-2">
                    <div className="flex items-center rounded-xl border border-slate-200">
                        <button
                            type="button"
                            className="grid size-8 place-items-center text-primary sm:size-9"
                        >
                            <PlusIcon name="plus" className="size-3.5" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold">
                            ۴
                        </span>
                        <button
                            type="button"
                            className="grid size-8 place-items-center text-slate-500 sm:size-9"
                        >
                            <MinusIcon name="minus" className="size-3.5" />
                        </button>
                    </div>
                    <div className="text-left">
                        <del className="block text-[9px] text-slate-400">
                            ۲۵۰۰۰
                        </del>
                        <b className="text-xs text-primary sm:text-sm">۲۵۰۰۰</b>
                        <span className="mr-1 text-[8px] text-slate-500">
                            تومان
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
}
