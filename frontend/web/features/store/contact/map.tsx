import { CalendarBlankIcon, MapPinIcon } from "@phosphor-icons/react";

export function MapSection() {
    return (
        <div className="overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_10px_40px_rgba(15,46,100,.04)]">
            <div className="relative h-105 bg-blue-50 lg:h-140">
                <iframe
                    title="موقعیت دفتر تکنو روی نقشه"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=51.391%2C35.747%2C51.425%2C35.769&layer=mapnik&marker=35.758%2C51.408"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full border-0"
                />
                <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur sm:inset-x-6 sm:bottom-6">
                    <div className="flex items-center gap-3">
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-white">
                            <MapPinIcon name="location" className="size-5" />
                        </span>
                        <div>
                            <b className="block text-sm text-slate-800">
                                دفتر مرکزی تکنو
                            </b>
                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                تهران، میدان ونک، خیابان ملاصدرا، پلاک ۴۲
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 border-t border-slate-100 p-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <span className="flex items-center gap-2">
                    <CalendarBlankIcon
                        name="calendar"
                        className="size-4 text-primary"
                    />{" "}
                    شنبه تا پنج‌شنبه، ساعت ۹ تا ۱۸
                </span>
                <a
                    href="https://www.openstreetmap.org/?mlat=35.758&mlon=51.408#map=16/35.758/51.408"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-primary"
                >
                    باز کردن نقشه بزرگ‌تر
                </a>
            </div>
        </div>
    );
}
