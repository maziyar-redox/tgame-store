"use client";

import { ArrowLeftIcon, RepeatIcon } from "@phosphor-icons/react";
import { cn } from "cn";
import Link from "next/link";
import { Button, buttonVariants } from "@/shared/components/ui/button";

export function InternalErrorWrapper({
    retryFunc,
    children,
}: {
    retryFunc: () => void;
    readonly children: React.ReactNode;
}) {
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
                    <span className="size-1.5 rounded-full bg-primary relative">
                        <span className="size-1.5 absolute top-0 left-0 bottom-0 right-0 animate-ping bg-primary rounded-full" />
                    </span>
                    اختلال موقت در سیستم
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
                                id="internal-error-blue"
                                x1="95"
                                y1="35"
                                x2="455"
                                y2="218"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="var(--color-primary)" />
                                <stop
                                    offset="1"
                                    stopColor="var(--color-blue-400)"
                                />
                            </linearGradient>
                            <pattern
                                id="internal-error-dots"
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
                            <filter
                                id="chip-shadow"
                                x="180"
                                y="28"
                                width="200"
                                height="205"
                                filterUnits="userSpaceOnUse"
                            >
                                <feDropShadow
                                    dx="0"
                                    dy="10"
                                    stdDeviation="10"
                                    floodColor="#0866ff"
                                    floodOpacity=".14"
                                />
                            </filter>
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
                            fill="url(#internal-error-dots)"
                            opacity=".65"
                        />
                        <g
                            stroke="url(#internal-error-blue)"
                            strokeWidth="29"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M181 54h-79l-8 62h53a39 39 0 0 1 0 78H87" />
                            <rect
                                x="382"
                                y="47"
                                width="84"
                                height="151"
                                rx="42"
                            />
                        </g>
                        <g filter="url(#chip-shadow)">
                            <rect
                                x="222"
                                y="48"
                                width="116"
                                height="153"
                                rx="30"
                                fill="white"
                                stroke="var(--color-primary)"
                                strokeWidth="4"
                            />
                            <rect
                                x="240"
                                y="67"
                                width="80"
                                height="91"
                                rx="18"
                                fill="var(--color-blue-50)"
                                stroke="var(--color-blue-200)"
                                strokeWidth="2"
                            />
                            <path
                                d="M250 84h60M250 98h42"
                                stroke="var(--color-blue-300)"
                                strokeWidth="5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M280 113v14m0 11v1"
                                stroke="var(--color-primary)"
                                strokeWidth="7"
                                strokeLinecap="round"
                            />
                            <path
                                d="M245 48V35m23 13V35m24 13V35m23 13V35M245 214v-13m23 13v-13m24 13v-13m23 13v-13"
                                stroke="var(--color-primary)"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <circle
                                cx="252"
                                cy="178"
                                r="5"
                                fill="var(--color-green-400)"
                            />
                            <circle
                                cx="270"
                                cy="178"
                                r="5"
                                fill="var(--color-amber-400)"
                            />
                            <circle
                                cx="288"
                                cy="178"
                                r="5"
                                fill="var(--color-rose-400)"
                            />
                        </g>
                        <g
                            stroke="var(--color-blue-300)"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <path d="M69 78v10m-5-5h10M479 157v10m-5-5h10M372 26v6m-3-3h6" />
                            <circle cx="456" cy="66" r="5" />
                            <circle cx="111" cy="211" r="4" />
                            <path d="m191 28 4-5m-4 5-4-5" />
                        </g>
                    </svg>
                    <span
                        dir="ltr"
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-lg border border-slate-100 bg-white px-3 py-1 font-mono text-xs tracking-widest text-slate-400 shadow-sm"
                    >
                        ERROR 500
                    </span>
                </div>
                <h1
                    id="not-found-title"
                    className="mt-5 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl"
                >
                    یک اتصال داخلی قطع شده!
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                    مشکلی موقت در پردازش درخواست شما پیش آمده است.
                    <br className="hidden sm:block" />
                    تیم فنی تی گیم درحال برقراری دوباره اتصال است.
                </p>
                <div className="mt-7 flex w-full max-w-md flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                    <Link
                        href="/"
                        className={cn(
                            buttonVariants({ variant: "default", size: "xl" }),
                            "gap-3 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
                        )}
                        replace
                    >
                        بازگشت به خانه
                        <ArrowLeftIcon
                            name="arrow"
                            className="size-4"
                            weight="regular"
                            color="currentColor"
                        />
                    </Link>
                    <Button
                        onClick={retryFunc}
                        variant="default"
                        size="xl"
                        className="gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                        <RepeatIcon
                            name="bag"
                            className="size-4"
                            weight="regular"
                            color="currentColor"
                        />{" "}
                        تلاش دوباره
                    </Button>
                </div>
            </section>
            {children}
        </main>
    );
}
