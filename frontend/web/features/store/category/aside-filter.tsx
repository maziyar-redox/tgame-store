"use client";

// import { useState } from "react";

import { Button } from "@/shared/components/ui/button";

export function AsideFilterSection() {
    /* const [priceValue, setPriceValue] = useState<number[]>([
        100_000, 1_000_000_000,
    ]); */
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="font-black">فیلترها</h3>
                <Button
                    variant="empty"
                    size="empty"
                    className="text-xs font-bold text-primary"
                >
                    پاک کردن همه
                </Button>
            </div>
            {/* <div className="border-t border-slate-100 pt-5">
                <h4 className="mb-4 text-sm font-bold">محدوده قیمت</h4>
                <div className="relative mb-5 h-1.5 rounded-full bg-slate-100">
                <div className="absolute inset-y-0 right-[12%] left-[22%] rounded-full bg-primary" />
                <span className="absolute right-[10%] top-1/2 size-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white" />
                <span className="absolute left-[20%] top-1/2 size-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-slate-200 px-3 py-2"><span className="block text-[9px] text-slate-400">از قیمت</span><b className="text-xs">۳,۰۰۰,۰۰۰</b></div>
                <div className="rounded-xl border border-slate-200 px-3 py-2"><span className="block text-[9px] text-slate-400">تا قیمت</span><b className="text-xs">۸۰,۰۰۰,۰۰۰</b></div>
                </div>
            </div>
            <div className="border-t border-slate-100 pt-5">
                <h4 className="mb-3 text-sm font-bold">برند</h4>
                <div className="space-y-3">
                {["اپل", "سامسونگ", "سونی", "ایسوس", "لنوو"].map((brand, index) => (
                    <label key={brand} className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
                    <input checked={selectedBrands.includes(brand)} onChange={() => toggleBrand(brand)} type="checkbox" className="size-4 accent-[#0866ff]" />
                    <span>{brand}</span><span className="mr-auto text-[10px] text-slate-400">{[18, 24, 11, 9, 16][index]}</span>
                    </label>
                ))}
                </div>
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                <div><h4 className="text-sm font-bold">فقط کالاهای موجود</h4><p className="mt-1 text-[10px] text-slate-400">نمایش محصولات آماده ارسال</p></div>
                <button onClick={() => setInStock(!inStock)} className={`relative h-6 w-11 rounded-full transition ${inStock ? "bg-[#0866ff]" : "bg-slate-200"}`} aria-label="فقط کالاهای موجود">
                <span className={`absolute top-1 size-4 rounded-full bg-white shadow transition ${inStock ? "left-1" : "left-6"}`} />
                </button>
            </div>
            <button onClick={() => setFiltersOpen(false)} className="w-full rounded-xl bg-[#0866ff] py-3 text-sm font-bold text-white lg:hidden">نمایش نتایج</button> */}
        </div>
    );
}
