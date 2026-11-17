"use client";

import { digitsEnToFa } from "@persian-tools/persian-tools";
import {
    BagIcon,
    HeartIcon,
    MinusIcon,
    PlusIcon,
    ShareNetworkIcon,
    ShieldIcon,
    StarIcon,
} from "@phosphor-icons/react";
import Image from "next/image";

export function ProductOverView() {
    return (
        <section className="grid gap-7 rounded-3xl border border-slate-100 bg-white p-4 shadow-[0_12px_50px_rgba(15,46,100,.05)] sm:p-6 lg:grid-cols-[1fr_1.08fr] lg:gap-12 lg:p-8">
            <div className="flex flex-col-reverse gap-3 sm:flex-row">
                <div className="flex gap-2 sm:w-20 sm:flex-col">
                    <button
                        type="button"
                        className="aspect-square w-16 overflow-hidden rounded-xl border-2 bg-slate-50 p-1 sm:w-full border-primary"
                    >
                        <Image
                            width={600}
                            height={600}
                            src="https://tgame-test.s3.ir-central1.arvanstorage.ir/MAIN.jpg"
                            alt="ff"
                            className="h-full w-full rounded-lg object-cover"
                        />
                    </button>
                    <button
                        type="button"
                        className="aspect-square w-16 overflow-hidden rounded-xl border-2 bg-slate-50 p-1 sm:w-full border-transparent hover:border-slate-200"
                    >
                        <Image
                            width={600}
                            height={600}
                            src="https://tgame-test.s3.ir-central1.arvanstorage.ir/MAIN.jpg"
                            alt="ff"
                            className="h-full w-full rounded-lg object-cover"
                        />
                    </button>
                    <button
                        type="button"
                        className="aspect-square w-16 overflow-hidden rounded-xl border-2 bg-slate-50 p-1 sm:w-full border-transparent hover:border-slate-200"
                    >
                        <Image
                            width={600}
                            height={600}
                            src="https://tgame-test.s3.ir-central1.arvanstorage.ir/MAIN.jpg"
                            alt="ff"
                            className="h-full w-full rounded-lg object-cover"
                        />
                    </button>
                </div>
                <div className="relative aspect-square flex-1 overflow-hidden rounded-2xl bg-[#f3f6fa] sm:rounded-3xl">
                    <Image
                        width={600}
                        height={600}
                        src="https://tgame-test.s3.ir-central1.arvanstorage.ir/MAIN.jpg"
                        alt="ff"
                        className="h-full w-full object-cover"
                    />
                    <span className="absolute right-3 top-3 rounded-xl bg-[#0866ff] px-3 py-1.5 text-xs font-bold text-white">
                        {digitsEnToFa(55)} % تخفیف
                    </span>
                    <div className="absolute left-3 top-3 flex gap-2">
                        <button
                            type="button"
                            className="grid size-9 place-items-center rounded-full bg-white/90 shadow //text-rose-500 text-slate-600"
                            aria-label="علاقه‌مندی"
                        >
                            <HeartIcon name="heart" className="size-4" />
                        </button>
                        <button
                            type="button"
                            className="grid size-9 place-items-center rounded-full bg-white/90 text-slate-600 shadow"
                            aria-label="اشتراک‌گذاری"
                        >
                            <ShareNetworkIcon name="share" className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold text-[#0866ff]">
                        پرفروش
                    </span>
                    <span className="text-xs text-slate-400">
                        کد محصول: TK-2048
                    </span>
                </div>
                <p className="mt-4 text-xs font-semibold tracking-wide text-slate-400">
                    WP-4000
                </p>
                <h1 className="mt-2 text-2xl font-black leading-relaxed text-[#092253] sm:text-3xl">
                    هدفون بلوتوثی سونی
                </h1>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 font-bold text-amber-500">
                        <StarIcon
                            name="star"
                            className="size-4"
                            weight="fill"
                        />{" "}
                        {digitsEnToFa(4.7)}
                    </span>
                    <span className="text-slate-400">از ۱۲۸ دیدگاه</span>
                    <span className="h-4 w-px bg-slate-200" />
                    <span className="flex items-center gap-1.5 font-semibold text-emerald-600">
                        <span className="size-2 rounded-full bg-emerald-500" />{" "}
                        موجود در انبار
                    </span>
                </div>
                <div className="my-6 h-px bg-slate-100" />
                <div>
                    <p className="mb-3 text-sm font-bold">
                        انتخاب رنگ:{" "}
                        <span className="text-slate-500">آبی تیره</span>
                    </p>
                    <div className="flex gap-3">
                        {[
                            ["#092253", "آبی تیره"],
                            ["#d9dde3", "نقره‌ای"],
                            ["#171717", "مشکی"],
                        ].map(([hex, label]) => (
                            <button
                                type="button"
                                key={label}
                                title={label}
                                className={`grid size-9 place-items-center rounded-full border-2 border-[#0866ff] //border-transparent`}
                            >
                                <span
                                    style={{ background: hex }}
                                    className="size-6 rounded-full ring-1 ring-slate-200"
                                />
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <del className="text-xs text-slate-400">
                                {digitsEnToFa(50000)} تومان
                            </del>
                            <div className="mt-1">
                                <b className="text-xl font-black text-[#0866ff] sm:text-2xl">
                                    {digitsEnToFa(50000)}
                                </b>
                                <span className="mr-1 text-xs text-slate-500">
                                    تومان
                                </span>
                            </div>
                        </div>
                        <span className="rounded-lg bg-rose-50 px-2 py-1 text-xs font-bold text-rose-500">
                            {digitsEnToFa(50)} %
                        </span>
                    </div>
                    <div className="mt-4 flex gap-3">
                        <div className="flex items-center rounded-xl border border-slate-200 bg-white">
                            <button
                                type="button"
                                className="grid size-11 place-items-center text-[#0866ff]"
                            >
                                <PlusIcon name="plus" className="size-4" />
                            </button>
                            <span className="w-7 text-center text-sm font-bold">
                                {digitsEnToFa(1)}
                            </span>
                            <button
                                type="button"
                                className="grid size-11 place-items-center text-slate-500"
                            >
                                <MinusIcon name="minus" className="size-4" />
                            </button>
                        </div>
                        <button
                            type="button"
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0866ff] px-4 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
                        >
                            <BagIcon name="bag" className="size-5" /> افزودن به
                            سبد خرید
                        </button>
                    </div>
                </div>
                <div className="mt-5 grid grid-cols-3 divide-x divide-slate-100 rounded-2xl border border-slate-100 py-3">
                    <div className="flex flex-col items-center gap-1 text-center text-[9px] font-semibold text-slate-500 sm:flex-row sm:justify-center sm:text-[10px]">
                        <ShieldIcon className="size-4 text-[#0866ff]" /> ضمانت
                        اصالت کالا
                    </div>
                    <div className="flex flex-col items-center gap-1 text-center text-[9px] font-semibold text-slate-500 sm:flex-row sm:justify-center sm:text-[10px]">
                        <ShieldIcon className="size-4 text-[#0866ff]" /> ضمانت
                        اصالت کالا
                    </div>
                    <div className="flex flex-col items-center gap-1 text-center text-[9px] font-semibold text-slate-500 sm:flex-row sm:justify-center sm:text-[10px]">
                        <ShieldIcon className="size-4 text-[#0866ff]" /> ضمانت
                        اصالت کالا
                    </div>
                </div>
            </div>
        </section>
    );
}
