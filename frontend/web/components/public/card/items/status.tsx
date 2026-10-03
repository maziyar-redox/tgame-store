"use client";

// Importing icons
import { ArrowLeftIcon, LockIcon } from "@phosphor-icons/react";

export function Status() {
    return (
        <aside className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_12px_45px_rgba(15,46,100,.07)] lg:sticky lg:top-28">
            <h2 className="text-lg font-black">خلاصه سفارش</h2>
            <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between text-slate-500">
                    <span>قیمت کالاها (۴)</span>
                    <span>۹۷,۴۴۴۴,۴۴۴ تومان</span>
                </div>
                <div className="flex justify-between text-slate-500">
                    <span>هزینه ارسال</span>
                    <span className="font-bold text-emerald-600">رایگان</span>
                </div>
                <div className="flex justify-between text-slate-500">
                    <span>تخفیف کالاها</span>
                    <span className="font-bold text-rose-500">
                        ۸,۴۴۴۴۴۴- تومان
                    </span>
                </div>
                <div className="flex justify-between text-slate-500">
                    <span>کد تخفیف</span>
                    <span className="font-bold text-rose-500">-۳۱۲۳ تومان</span>
                </div>
            </div>
            <div className="my-5 h-px bg-slate-100" />
            <div className="flex items-end justify-between">
                <span className="font-bold">مبلغ قابل پرداخت</span>
                <div className="text-left">
                    <b className="text-xl font-black text-brand-navy">
                        ۸۸,۴۰۰,۴۴۴
                    </b>
                    <span className="mr-1 text-[10px] text-slate-500">
                        تومان
                    </span>
                </div>
            </div>
            <div className="mt-5 flex gap-2">
                <input
                    className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 text-xs outline-none focus:border-primary"
                    placeholder="کد تخفیف"
                />
                <button
                    type="button"
                    className="rounded-xl bg-slate-100 px-4 py-3 text-xs font-bold hover:bg-slate-200"
                >
                    اعمال شد
                </button>
            </div>
            <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
            >
                تکمیل و ثبت سفارش
                <ArrowLeftIcon name="arrow" className="size-4" />
            </button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                <LockIcon name="lock" className="size-3" />
                پرداخت امن و رمزنگاری‌شده
            </p>
        </aside>
    );
}
