"use client";

export function CardCount() {
    return (
        <div className="mb-7 flex items-end justify-between">
            <div>
                <p className="mb-1 text-xs font-bold text-primary">خرید شما</p>
                <h1 className="text-2xl font-black text--brand-navy sm:text-3xl">
                    سبد خرید
                </h1>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-primary">
                ۳ کالا
            </span>
        </div>
    );
}
