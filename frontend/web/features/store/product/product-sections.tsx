"use client";

import { CheckIcon, StarIcon } from "@phosphor-icons/react";
import { useState } from "react";

export function ProductSections() {
    const [tab, setTab] = useState<string>("description");
    return (
        <section className="mt-7 overflow-hidden rounded-3xl border border-slate-100 bg-white">
            <div className="flex gap-1 overflow-x-auto border-b border-slate-100 px-4 sm:px-7">
                {(
                    [
                        ["description", "معرفی محصول"],
                        ["specs", "مشخصات فنی"],
                        ["reviews", "دیدگاه کاربران (۱۲۸)"],
                    ] as const
                ).map(([key, label]) => (
                    <button
                        type="button"
                        key={key}
                        onClick={() => setTab(key)}
                        className={`relative shrink-0 px-4 py-5 text-sm font-bold ${tab === key ? "text-[#0866ff]" : "text-slate-500"}`}
                    >
                        {label}
                        {tab === key && (
                            <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-[#0866ff]" />
                        )}
                    </button>
                ))}
            </div>
            <div className="p-5 sm:p-8">
                {tab === "description" && (
                    <div className="max-w-4xl">
                        <h2 className="text-lg font-black">
                            بررسی و معرفی هدفون بلوتوثی
                        </h2>
                        <p className="mt-4 text-sm leading-8 text-slate-600">
                            این محصول با ترکیبی از طراحی مدرن، کیفیت ساخت بالا و
                            عملکرد قدرتمند، برای کاربرانی ساخته شده که به
                            تجربه‌ای سریع و مطمئن اهمیت می‌دهند. استفاده از
                            فناوری‌های روز در کنار رابط کاربری ساده، آن را به
                            انتخابی مناسب برای استفاده روزمره و حرفه‌ای تبدیل
                            کرده است.
                        </p>
                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                            {[
                                ["عملکرد قدرتمند", "پردازش سریع و روان"],
                                ["طراحی مینیمال", "ساخت دقیق و باکیفیت"],
                                ["باتری بهینه", "همراه شما در تمام روز"],
                            ].map(([title, text]) => (
                                <div
                                    key={title}
                                    className="rounded-2xl bg-slate-50 p-4"
                                >
                                    <span className="mb-3 grid size-8 place-items-center rounded-lg bg-blue-50 text-[#0866ff]">
                                        <CheckIcon
                                            name="check"
                                            className="size-4"
                                        />
                                    </span>
                                    <b className="text-sm">{title}</b>
                                    <p className="mt-1 text-xs text-slate-400">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {tab === "specs" && (
                    <div className="max-w-3xl">
                        <h2 className="mb-5 text-lg font-black">مشخصات فنی</h2>
                        {[
                            ["برند", "هدفون"],
                            ["مدل", "WP-4824"],
                            ["رنگ", "آبی"],
                            ["نوع اتصال", "بی‌سیم و باسیم"],
                            ["گارانتی", "۱۸ ماه ضمانت رسمی"],
                            ["کشور سازنده", "چین"],
                        ].map(([label, value], index) => (
                            <div
                                key={label}
                                className={`grid grid-cols-[120px_1fr] gap-4 px-4 py-3 text-sm sm:grid-cols-[200px_1fr] ${index % 2 === 0 ? "bg-slate-50" : ""}`}
                            >
                                <span className="text-slate-500">{label}</span>
                                <b>{value}</b>
                            </div>
                        ))}
                    </div>
                )}
                {tab === "reviews" && (
                    <div>
                        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
                            <div className="rounded-2xl bg-slate-50 p-5 text-center">
                                <b className="text-4xl font-black">۴.۸</b>
                                <div className="my-2 flex justify-center gap-1 text-amber-500">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <StarIcon
                                            key={item}
                                            name="star"
                                            className="size-4 fill-current"
                                        />
                                    ))}
                                </div>
                                <p className="text-xs text-slate-400">
                                    از مجموع ۱۲۸ امتیاز
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold">
                                    ارزش خرید بالایی دارد
                                </h3>
                                <p className="mt-2 text-sm leading-7 text-slate-600">
                                    کیفیت ساخت خیلی خوب است و بسته‌بندی سالم و
                                    سریع به دستم رسید. تجربه استفاده تا الان
                                    کاملاً رضایت‌بخش بوده.
                                </p>
                                <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-400">
                                    <span>خریدار محصول</span>
                                    <span>•</span>
                                    <span>۲۵ اردیبهشت ۱۴۰۴</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-7 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 sm:p-5">
                            <h3 className="font-black">
                                نظر شما درباره این محصول
                            </h3>
                            <p className="mt-1 text-[10px] text-slate-400">
                                تجربه شما به انتخاب بهتر دیگران کمک می‌کند.
                            </p>
                            <div className="mt-4 flex gap-1 text-slate-300">
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <button
                                        type="button"
                                        key={item}
                                        className="hover:text-amber-500"
                                    >
                                        <StarIcon
                                            name="star"
                                            className="size-6 hover:fill-current"
                                        />
                                    </button>
                                ))}
                            </div>
                            <textarea
                                rows={4}
                                className="mt-4 w-full resize-none rounded-xl border border-slate-200 bg-white p-3 text-sm outline-none focus:border-[#0866ff]"
                                placeholder="دیدگاه خود را بنویسید..."
                            />
                            <button
                                type="button"
                                className="mt-3 rounded-xl bg-[#0866ff] px-5 py-2.5 text-xs font-bold text-white"
                            >
                                "دیدگاه ثبت شد"
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
