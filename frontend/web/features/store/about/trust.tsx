"use client";

import { CheckIcon } from "@phosphor-icons/react";

function EnamadBadge() {
    return (
        <a
            href="https://enamad.ir"
            target="_blank"
            rel="noreferrer"
            aria-label="نشان اعتماد الکترونیکی"
            className="relative mx-auto grid aspect-4/5 w-32 place-items-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_12px_35px_rgba(15,46,100,.08)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(8,102,255,.15)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
            <svg
                viewBox="0 0 120 138"
                fill="none"
                className="w-full"
                role="img"
                aria-label="enamad"
            >
                <path
                    d="M22 75c7-34 25-53 55-58-15 13-22 27-20 43 2 14 12 21 29 22-14 14-32 18-50 12"
                    stroke="#0866ff"
                    strokeWidth="11"
                    strokeLinecap="round"
                />
                <path
                    d="M34 92c14 15 31 21 51 17M76 35c11 8 17 20 17 35"
                    stroke="#f6b81b"
                    strokeWidth="7"
                    strokeLinecap="round"
                />
                <path
                    d="m93 22 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.5 2.9 1.1-6.1-4.5-4.3 6.2-.9L93 22Z"
                    fill="#f6b81b"
                />
                <text
                    x="60"
                    y="125"
                    textAnchor="middle"
                    fill="#1e293b"
                    fontSize="12"
                    fontWeight="800"
                >
                    ENAMAD
                </text>
            </svg>
            <span className="absolute inset-x-0 bottom-1.5 text-center text-[8px] font-bold text-slate-400">
                نماد اعتماد الکترونیکی
            </span>
        </a>
    );
}

export function Trust() {
    return (
        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
            <div className="grid items-center gap-7 overflow-hidden rounded-[28px] border border-blue-100 bg-[#eaf3ff] p-6 sm:p-9 lg:grid-cols-[1fr_220px] lg:p-12">
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs font-bold text-primary">
                        <CheckIcon name="check" className="size-4" /> خرید امن و
                        قابل پیگیری
                    </span>
                    <h2 className="mt-5 text-2xl font-black text-[#092253] sm:text-3xl">
                        اعتماد شما، معتبرترین نشان ماست
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600">
                        فروشگاه تکنو دارای نماد اعتماد الکترونیکی است. تمامی
                        پرداخت‌ها از درگاه‌های امن بانکی انجام می‌شوند و سفارش شما
                        از لحظهٔ ثبت تا تحویل، قابل پیگیری خواهد بود.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-slate-600">
                        {[
                            "پرداخت امن",
                            "ضمانت اصالت",
                            "۷ روز بازگشت",
                            "حفظ حریم خصوصی",
                        ].map((item) => (
                            <span
                                key={item}
                                className="flex items-center gap-2"
                            >
                                <span className="grid size-5 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                                    <CheckIcon
                                        name="check"
                                        className="size-3"
                                    />
                                </span>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="rounded-3xl border border-white/80 bg-white/60 p-5 text-center">
                    <EnamadBadge />
                    <p className="mt-4 text-[10px] leading-5 text-slate-400">
                        برای بررسی اعتبار، روی نشان کلیک کنید
                    </p>
                </div>
            </div>
        </section>
    );
}
