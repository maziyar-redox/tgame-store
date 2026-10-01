"use client";

// Importing Icons
import { ArrowRightIcon, ShieldCheckIcon } from "@phosphor-icons/react";
// Importing nextjs utils
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 pb-8 pt-5 sm:px-6 sm:pt-8 lg:px-8 lg:pb-12">
            <div className="relative min-h-122.5 overflow-hidden rounded-[28px] bg-brand-surface px-6 py-9 sm:min-h-110 sm:px-10 lg:min-h-125 lg:px-16 lg:py-14">
                <div className="absolute -left-24 -top-24 size-80 rounded-full bg-blue-300/25 blur-3xl" />
                <div className="absolute bottom-0 right-1/3 size-56 rounded-full bg-white/60 blur-3xl" />
                <div className="relative z-10 max-w-xl">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-primary ring-1 ring-blue-100">
                        <span className="size-1.5 rounded-full bg-primary" />
                        تکنولوژی، یک قدم جلوتر
                    </span>
                    <h1 className="mt-5 text-[36px] font-black leading-[1.3] tracking-[-0.04em] text-brand-navy sm:text-5xl lg:text-[58px]">
                        دنیای تکنولوژی
                        <br />
                        <span className="text-primary">در دستان شماست</span>
                    </h1>
                    <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                        جدیدترین محصولات دیجیتال از برترین برندهای جهان، با
                        ضمانت اصالت و ارسال سریع به سراسر ایران.
                    </p>
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                        <Link
                            href="#latest"
                            className="inline-flex items-center gap-3 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-300 transition hover:-translate-y-0.5 hover:bg-blue-700"
                        >
                            مشاهده محصولات
                            <ArrowRightIcon
                                name="arrow"
                                className="size-4 rotate-180"
                            />
                        </Link>
                        <Link
                            href="#categories"
                            className="rounded-xl bg-white/70 px-5 py-3 text-sm font-bold text-slate-700 ring-1 ring-slate-200 transition hover:bg-white"
                        >
                            دسته‌بندی‌ها
                        </Link>
                    </div>
                </div>

                <div className="absolute -bottom-10 -left-10 h-62.5 w-[56%] overflow-hidden rounded-tl-[50px] rounded-tr-[120px] border-10 border-white/40 bg-slate-200 shadow-2xl shadow-blue-300/40 sm:-bottom-16 sm:left-6 sm:h-82.5 sm:w-[43%] lg:-bottom-20 lg:left-12 lg:h-107.5 lg:w-[45%]">
                    <Image
                        width={500}
                        height={500}
                        className="h-full w-full object-cover"
                        src="/4.jpg"
                        alt="مجموعه‌ای از محصولات دیجیتال مدرن"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brand-blue-dark/35 via-transparent to-white/5" />
                </div>
                <div className="absolute bottom-5 left-4 z-10 hidden items-center gap-3 rounded-2xl bg-white/95 p-3 shadow-xl backdrop-blur sm:flex lg:bottom-8 lg:left-10">
                    <span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                        <ShieldCheckIcon name="shield" className="size-6" />
                    </span>
                    <span>
                        <b className="block text-xs">ضمانت اصالت کالا</b>
                        <small className="text-[10px] text-slate-400">
                            خرید مطمئن و امن
                        </small>
                    </span>
                </div>
            </div>
        </section>
    );
}
