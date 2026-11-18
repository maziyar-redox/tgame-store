"use client";

import { ShieldCheckIcon } from "@phosphor-icons/react";

export function Values() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-bold text-primary">
                    چیزی که به آن باور داریم
                </p>
                <h2 className="mt-2 text-2xl font-black text-[#092253] sm:text-3xl">
                    ارزش‌هایی که مسیر ما را می‌سازند
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                    برای ما فروش پایان یک رابطه نیست؛ شروع همراهی تکنو با شماست.
                </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
                <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_10px_35px_rgba(15,46,100,.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(15,46,100,.08)]">
                    <span className="grid size-12 place-items-center rounded-2xl bg-violet-50 text-violet-600">
                        <ShieldCheckIcon name="values" className="size-6" />
                    </span>
                    <h3 className="mt-5 font-black text-slate-800">
                        اعتماد، قبل از خرید
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                        اصالت کالا، قیمت‌گذاری شفاف و ضمانت بازگشت، پایهٔ هر تجربه
                        در تکنو است.
                    </p>
                </article>
                <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_10px_35px_rgba(15,46,100,.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(15,46,100,.08)]">
                    <span className="grid size-12 place-items-center rounded-2xl bg-violet-50 text-violet-600">
                        <ShieldCheckIcon name="values" className="size-6" />
                    </span>
                    <h3 className="mt-5 font-black text-slate-800">
                        اعتماد، قبل از خرید
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                        اصالت کالا، قیمت‌گذاری شفاف و ضمانت بازگشت، پایهٔ هر تجربه
                        در تکنو است.
                    </p>
                </article>
                <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_10px_35px_rgba(15,46,100,.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(15,46,100,.08)]">
                    <span className="grid size-12 place-items-center rounded-2xl bg-violet-50 text-violet-600">
                        <ShieldCheckIcon name="values" className="size-6" />
                    </span>
                    <h3 className="mt-5 font-black text-slate-800">
                        اعتماد، قبل از خرید
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                        اصالت کالا، قیمت‌گذاری شفاف و ضمانت بازگشت، پایهٔ هر تجربه
                        در تکنو است.
                    </p>
                </article>
            </div>
        </section>
    );
}
