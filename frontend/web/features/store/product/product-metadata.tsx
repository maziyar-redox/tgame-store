"use client";

import { digitsEnToFa } from "@persian-tools/persian-tools";
import { CalendarBlankIcon } from "@phosphor-icons/react";

export function ProductMetaData() {
    return (
        <div className="mt-5 flex flex-wrap items-center gap-4 rounded-2xl border border-slate-100 bg-white px-5 py-4 text-xs text-slate-500">
            <span className="flex items-center gap-2">
                <CalendarBlankIcon
                    name="calendar"
                    className="size-4 text-[#0866ff]"
                />{" "}
                تاریخ افزودن: ۱۸ اردیبهشت ۱۴۰۴
            </span>
            <span className="hidden h-4 w-px bg-slate-200 sm:block" />
            <span>
                آخرین بروزرسانی قیمت: امروز، ساعت {digitsEnToFa("10:45")}
            </span>
        </div>
    );
}
