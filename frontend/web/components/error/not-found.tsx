"use client";

// Importing icons
import {
    ArrowLeftIcon,
    BasketIcon,
    CaretLeftIcon,
    DeviceMobileIcon,
    ShieldCheckIcon,
} from "@phosphor-icons/react";
// Importing utils
import Link from "next/link";

export function NotFoundComponent() {
    return (
        <main className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
            <section
                aria-labelledby="not-found-title"
                className="relative isolate flex flex-col items-center pb-12 pt-8 text-center sm:pt-10"
            >
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-12 -z-10 h-64 w-full max-w-2xl rounded-full bg-blue-100/50 blur-3xl"
                />
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-medium text-primary">
                    <span className="size-1.5 rounded-full bg-primary" />
                    یک توقف کوتاه در مسیر
                </span>
                <div
                    aria-hidden="true"
                    className="relative mt-4 px-5 sm:w-sm md:w-xl lg:w-2xl"
                >
                    <svg
                        viewBox="0 0 560 250"
                        fill="none"
                        className="w-full overflow-visible"
                        aria-label="img"
                    >
                        <defs>
                            <linearGradient
                                id="not-found-blue"
                                x1="100"
                                y1="35"
                                x2="430"
                                y2="220"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="var(--color-primary)" />
                                <stop
                                    offset="1"
                                    stopColor="var(--color-blue-400)"
                                />
                            </linearGradient>
                            <pattern
                                id="not-found-dots"
                                width="18"
                                height="18"
                                patternUnits="userSpaceOnUse"
                            >
                                <circle
                                    cx="2"
                                    cy="2"
                                    r="1"
                                    fill="var(--color-blue-200)"
                                />
                            </pattern>
                        </defs>
                        <ellipse
                            cx="280"
                            cy="225"
                            rx="188"
                            ry="10"
                            fill="var(--color-blue-100)"
                            opacity=".55"
                        />
                        <rect
                            x="70"
                            y="20"
                            width="420"
                            height="180"
                            rx="90"
                            fill="url(#not-found-dots)"
                            opacity=".65"
                        />
                        <g
                            stroke="url(#not-found-blue)"
                            strokeWidth="29"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M154 55 93 151h91M165 107v91" />
                            <path d="M420 55 359 151h91M431 107v91" />
                            <rect
                                x="222"
                                y="48"
                                width="97"
                                height="153"
                                rx="48.5"
                            />
                        </g>
                        <g
                            stroke="var(--color-primary)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M270 203v-33q0-12-12-12h-6" />
                            <path d="M272 48V77q0 12 12 12h8" />
                            <g transform="translate(242 135) rotate(-12)">
                                <rect
                                    width="20"
                                    height="31"
                                    rx="5"
                                    fill="var(--color-white)"
                                />
                                <path d="M5 0v-9M15 0v-9M6 25h8" />
                            </g>
                            <g transform="translate(283 85) rotate(12)">
                                <rect
                                    width="20"
                                    height="25"
                                    rx="5"
                                    fill="var(--color-white)"
                                />
                                <path d="M7 8v5M13 8v5" />
                            </g>
                            <path
                                d="m272 119-4 5m13 0 3 5m-16 6-6 1"
                                strokeWidth="2"
                            />
                        </g>
                        <g
                            stroke="var(--color-blue-300)"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <path d="M69 78v10m-5-5h10M479 157v10m-5-5h10M372 26v6m-3-3h6" />
                            <circle cx="456" cy="66" r="5" />
                            <circle cx="111" cy="197" r="4" />
                            <path d="m191 28 4-5m-4 5-4-5" />
                        </g>
                    </svg>
                    <span
                        dir="ltr"
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-lg border border-slate-100 bg-white px-3 py-1 font-mono text-xs tracking-widest text-slate-400 shadow-sm"
                    >
                        ERROR 404
                    </span>
                </div>
                <h1
                    id="not-found-title"
                    className="mt-5 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl"
                >
                    این صفحه از مدار خارج شده!
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                    شاید آدرس را اشتباه وارد کرده‌اید، یا این صفحه جابه‌جا شده
                    است.
                    <br className="hidden sm:block" /> نگران نباشید؛ دنیای
                    تکنولوژی هنوز همین‌جاست.
                </p>
                <div className="mt-7 flex w-full max-w-md flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                        بازگشت به خانه
                        <ArrowLeftIcon name="arrow" className="size-4" />
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                        <BasketIcon name="bag" className="size-4" /> مشاهدهٔ
                        محصولات
                    </Link>
                </div>
            </section>
            <section
                aria-labelledby="shortcut-title"
                className="mx-auto max-w-5xl border-t border-slate-200/70 pt-8"
            >
                <div className="text-center">
                    <h2
                        id="shortcut-title"
                        className="text-sm font-bold text-slate-700"
                    >
                        شاید مسیر بعدی شما اینجا باشد
                    </h2>
                    <p className="mt-2 text-xs text-slate-400">
                        از دسته‌بندی‌های محبوب، دوباره شروع کنید
                    </p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    <Link
                        href="/"
                        className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-right transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 focus-visible:outline-2 focus-visible:outline-primary sm:p-5"
                    >
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                            <DeviceMobileIcon
                                name="mobile"
                                className="size-5"
                            />
                        </span>
                        <span className="min-w-0 flex-1">
                            <span className="block text-xs font-bold text-slate-700 sm:text-sm">
                                موبایل و تبلت
                            </span>
                            <span className="mt-1.5 hidden text-xs text-slate-400 sm:block">
                                همراه هرروز شما
                            </span>
                        </span>
                        <CaretLeftIcon
                            name="chevron"
                            className="hidden size-3 shrink-0 text-slate-300 group-hover:text-primary xl:block"
                        />
                    </Link>
                    <Link
                        href="/"
                        className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-right transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 focus-visible:outline-2 focus-visible:outline-primary sm:p-5"
                    >
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                            <DeviceMobileIcon
                                name="mobile"
                                className="size-5"
                            />
                        </span>
                        <span className="min-w-0 flex-1">
                            <span className="block text-xs font-bold text-slate-700 sm:text-sm">
                                موبایل و تبلت
                            </span>
                            <span className="mt-1.5 hidden text-xs text-slate-400 sm:block">
                                همراه هرروز شما
                            </span>
                        </span>
                        <CaretLeftIcon
                            name="chevron"
                            className="hidden size-3 shrink-0 text-slate-300 group-hover:text-primary xl:block"
                        />
                    </Link>
                    <Link
                        href="/"
                        className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-right transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 focus-visible:outline-2 focus-visible:outline-primary sm:p-5"
                    >
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                            <DeviceMobileIcon
                                name="mobile"
                                className="size-5"
                            />
                        </span>
                        <span className="min-w-0 flex-1">
                            <span className="block text-xs font-bold text-slate-700 sm:text-sm">
                                موبایل و تبلت
                            </span>
                            <span className="mt-1.5 hidden text-xs text-slate-400 sm:block">
                                همراه هرروز شما
                            </span>
                        </span>
                        <CaretLeftIcon
                            name="chevron"
                            className="hidden size-3 shrink-0 text-slate-300 group-hover:text-primary xl:block"
                        />
                    </Link>
                    <Link
                        href="/"
                        className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-right transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 focus-visible:outline-2 focus-visible:outline-primary sm:p-5"
                    >
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                            <DeviceMobileIcon
                                name="mobile"
                                className="size-5"
                            />
                        </span>
                        <span className="min-w-0 flex-1">
                            <span className="block text-xs font-bold text-slate-700 sm:text-sm">
                                موبایل و تبلت
                            </span>
                            <span className="mt-1.5 hidden text-xs text-slate-400 sm:block">
                                همراه هرروز شما
                            </span>
                        </span>
                        <CaretLeftIcon
                            name="chevron"
                            className="hidden size-3 shrink-0 text-slate-300 group-hover:text-primary xl:block"
                        />
                    </Link>
                </div>
            </section>
            <p className="mt-9 flex items-center justify-center gap-2 text-center text-xs leading-6 text-slate-400">
                <ShieldCheckIcon name="shield" className="size-4" />
                مسیر عوض شده، خیال راحتِ خرید نه.
            </p>
        </main>
    );
}
