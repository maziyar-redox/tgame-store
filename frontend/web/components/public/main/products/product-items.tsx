"use client";

// Importing Icon
import { BasketIcon, HeartIcon } from "@phosphor-icons/react";
// Importing nextjs utils
import Image from "next/image";
import Link from "next/link";
// Importing button component
import { Button } from "@/components/ui/button";

export function ProductItems() {
    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_8px_30px_rgba(15,46,100,.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,46,100,.1)] sm:rounded-3xl sm:p-3 select-none">
            <div className="relative aspect-[1/1.02] overflow-hidden rounded-xl bg-media-surface sm:rounded-2xl">
                <Link
                    href="/"
                    className="h-full w-full"
                    aria-label="مشاهده محصول"
                >
                    <Image
                        src="/3.jpg"
                        width={500}
                        height={500}
                        alt=""
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                </Link>
                <span className="absolute right-2 top-2 rounded-lg bg-primary px-2 py-1 text-[10px] font-bold text-white">
                    ۱۰٪
                </span>
                <button
                    type="button"
                    className="absolute left-2 top-2 grid size-8 place-items-center rounded-full bg-white/90 shadow-sm [&_svg:not([class*='fill-'])]:fill-slate-500 [&_svg:not([class*='fill-'])]:hover:fill-rose-500 transition-all ease-in-out duration-200"
                    aria-label="افزودن به علاقه‌مندی‌ها"
                >
                    <HeartIcon
                        name="heart"
                        className="size-4 transition-all ease-in-out duration-200"
                    />
                </button>
            </div>
            <div className="px-1 pb-2 pt-3 sm:px-2 sm:pt-4">
                <span className="text-[10px] font-medium text-slate-400">
                    PS5 Slim
                </span>
                <Link
                    href="/"
                    className="mt-1 block w-full truncate text-right text-xs font-bold text-slate-800 hover:text-primary sm:text-sm transition-all ease-in-out duration-200"
                >
                    دسته بازی کنسول پلی استیشن
                </Link>
                <div className="mt-4 flex items-end justify-between gap-1">
                    <div>
                        <span className="block text-[14px] text-slate-400 sm:text-[15px] line-through">
                            ۴۰۰۰۰۰
                        </span>
                        <span className="text-base font-black text-primary sm:text-lg">
                            ۵۰۰۰۰۰
                        </span>
                        <span className="mr-1 text-[9px] text-slate-500">
                            تومان
                        </span>
                    </div>
                    <Button
                        type="button"
                        variant="empty"
                        size="empty"
                        className="grid size-8 shrink-0 place-items-center rounded-lg bg-slate-950 text-white transition-all ease-in-out duration-200 hover:bg-primary sm:size-9"
                        aria-label="افزودن به سبد"
                    >
                        <BasketIcon name="bag" className="size-4" />
                    </Button>
                </div>
            </div>
        </article>
    );
}
