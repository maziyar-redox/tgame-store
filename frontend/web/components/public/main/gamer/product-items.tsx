"use client";

// Importing persian tools
import { digitsEnToFa } from "@persian-tools/persian-tools";
// Importing Icon
import { BasketIcon, HeartIcon } from "@phosphor-icons/react";
// Importing merging util
import { cn } from "cn";
// Importing nextjs utils
import Image from "next/image";
import Link from "next/link";
// Importing react hook
import { useState } from "react";
// Importing button component
import { Button } from "@/components/ui/button";
// Importing currency and discount calc
import { currencyFormmater, discountCalculator } from "@/lib/currency";
// Import typing for main page product
import type { MainProductProps } from "@/types/main/product";

export function ProductItems({
    id,
    title,
    model,
    image,
    price,
    discount,
    isAvailable,
    isFavorite,
}: MainProductProps) {
    const [isLiked, setIsLiked] = useState(isFavorite);

    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_8px_30px_rgba(15,46,100,.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,46,100,.1)] sm:rounded-3xl sm:p-3 select-none h-full">
            <div className="relative aspect-[1/1.02] overflow-hidden rounded-xl bg-media-surface sm:rounded-2xl">
                <Link
                    href={`/products/${id}`}
                    className="h-full w-full"
                    aria-label="مشاهده محصول"
                >
                    <Image
                        src={image}
                        width={500}
                        height={500}
                        alt={title}
                        className={cn(
                            "h-full w-full object-cover transition duration-500 group-hover:scale-105",
                            isAvailable ? "" : "grayscale-100",
                        )}
                    />
                </Link>
                <span
                    className={cn(
                        Number(discount) === 0 || !isAvailable
                            ? "hidden"
                            : "absolute right-2 top-2 rounded-lg bg-primary px-2 py-1 text-[10px] font-bold text-white",
                    )}
                >
                    ٪ {digitsEnToFa(discount)}
                </span>
                <button
                    type="button"
                    onClick={() => setIsLiked(!isLiked)}
                    className={cn(
                        "absolute left-2 top-2 grid size-8 place-items-center rounded-full bg-white/90 shadow-sm transition-all ease-in-out duration-200",
                        isLiked
                            ? "[&_svg:not([class*='fill-'])]:fill-rose-500"
                            : "[&_svg:not([class*='fill-'])]:fill-slate-500 [&_svg:not([class*='fill-'])]:hover:fill-rose-500",
                    )}
                    aria-label="افزودن به علاقه‌مندی‌ها"
                >
                    <HeartIcon
                        name="heart"
                        className="size-4 transition-all ease-in-out duration-200"
                        weight={isLiked ? "fill" : "regular"}
                    />
                </button>
            </div>
            {isAvailable ? (
                <div className="px-1 pb-2 pt-3 sm:px-2 sm:pt-4">
                    <span className="text-[10px] font-medium text-slate-400">
                        {model}
                    </span>
                    <Link
                        href={`/products/${id}`}
                        className="mt-1 block w-full truncate text-right text-xs font-bold text-slate-800 hover:text-primary sm:text-sm transition-all ease-in-out duration-200"
                    >
                        {title}
                    </Link>
                    <div className="mt-4 flex items-end justify-between gap-1">
                        <div>
                            <span
                                className={cn(
                                    Number(discount) === 0
                                        ? "hidden"
                                        : "block text-[10px] sm:text-sm text-slate-400 line-through",
                                )}
                            >
                                {currencyFormmater(Number(price))}
                            </span>
                            <span className="text-xs sm:text-base font-black text-primary">
                                {currencyFormmater(
                                    discountCalculator(
                                        Number(price),
                                        Number(discount),
                                    ),
                                )}
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
            ) : (
                <div className="px-1 pb-2 pt-3 sm:px-2 sm:pt-4">
                    <span className="text-[10px] font-medium text-slate-400">
                        {model}
                    </span>
                    <Link
                        href={`/products/${id}`}
                        className="mt-1 block w-full truncate text-right text-xs font-bold text-slate-800 hover:text-primary sm:text-sm transition-all ease-in-out duration-200"
                    >
                        {title}
                    </Link>
                    <div className="mt-8 flex items-center justify-center gap-1">
                        <span className="font-bold text-rose-500">ناموجود</span>
                    </div>
                </div>
            )}
        </article>
    );
}
