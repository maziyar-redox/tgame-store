"use client";

import { digitsEnToFa } from "@persian-tools/persian-tools";
import { BagIcon, HeartIcon, StarIcon } from "@phosphor-icons/react";
import { nanoid } from "nanoid";
import Image from "next/image";

export function ProductCard() {
    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
            {Array.from({ length: 10 }).map((_item) => {
                const id = nanoid();
                return (
                    <article
                        key={id}
                        className="group overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_8px_30px_rgba(15,46,100,.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,46,100,.1)] sm:rounded-3xl sm:p-3"
                    >
                        <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-50 sm:rounded-2xl">
                            <button
                                type="button"
                                className="h-full w-full"
                                aria-label={`مشاهده ${"lp"}`}
                            >
                                <Image
                                    width={500}
                                    height={500}
                                    src={
                                        "https://tgame-test.s3.ir-central1.arvanstorage.ir/MAIN.jpg"
                                    }
                                    alt={"ff"}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </button>
                            <span className="absolute right-2 top-2 rounded-lg bg-primary px-2 py-1 text-[10px] font-bold text-white">
                                {digitsEnToFa(6)} %
                            </span>
                            <button
                                type="button"
                                className="absolute left-2 top-2 grid size-8 place-items-center rounded-full bg-white/90 shadow-sm text-slate-500 //text-rose-500"
                            >
                                <HeartIcon
                                    name="heart"
                                    className="size-4 //fill-current"
                                />
                            </button>
                        </div>
                        <div className="px-1 pb-2 pt-3 sm:px-2">
                            <div className="flex items-center gap-1 text-[9px] text-amber-500">
                                <StarIcon
                                    name="star"
                                    className="size-3 mb-1"
                                    weight="fill"
                                />
                                <b>{digitsEnToFa(4.6)}</b>
                                <span className="text-slate-400">(۱۲ نظر)</span>
                            </div>
                            <button
                                type="button"
                                className="mt-2 block w-full truncate text-right text-xs font-bold hover:text-primary sm:text-sm"
                            >
                                کنسول بازی ps5
                            </button>
                            <p className="mt-1 text-xs text-slate-400">
                                WB-33000
                            </p>
                            <div className="mt-4 flex items-end justify-between gap-1">
                                <div>
                                    <del className="block text-[9px] text-slate-400">
                                        {digitsEnToFa(40000)}
                                    </del>
                                    <b className="text-xs text-primary sm:text-sm">
                                        {digitsEnToFa(50000)}
                                    </b>
                                    <span className="mr-1 text-[8px] text-slate-500">
                                        تومان
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    className="grid size-8 place-items-center rounded-lg bg-slate-950 text-white hover:bg-primary"
                                >
                                    <BagIcon name="bag" className="size-4" />
                                </button>
                            </div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}
