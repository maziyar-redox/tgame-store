"use client";

import { digitsEnToFa } from "@persian-tools/persian-tools";
import { cn } from "cn";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@/shared/components/ui/skeleton";

function ImageComponent() {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    return (
        <>
            <Image
                src="https://tgame-test.s3.ir-central1.arvanstorage.ir/3.jpg"
                alt=""
                loading="eager"
                className={cn(
                    "size-14 rounded-xl border-2 border-white object-cover",
                    isLoaded ? "block" : "hidden",
                )}
                width={400}
                height={400}
                onLoad={() => setIsLoaded(true)}
                onError={() => setIsLoaded(false)}
            />
            <Skeleton
                className={cn(
                    "size-14 rounded-xl border-2 border-white object-cover",
                    isLoaded ? "hidden" : "block",
                )}
            />
        </>
    );
}

export function Orders() {
    return (
        <div className="space-y-4">
            <article className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                        {/* <span className={`rounded-full px-3 py-1 text-[10px] font-bold ${status === "در حال ارسال" ? "bg-blue-50 text-[#0866ff]" : "bg-emerald-50 text-emerald-600"}`}>{status as string}</span> */}
                        <span className="rounded-full px-3 py-1 text-xs font-bold bg-blue-50 text-primary">
                            درحال ارسال{" "}
                        </span>
                        <span className="mr-3 text-xs text-slate-400">
                            شماره سفارش: RTX-3123
                        </span>
                    </div>
                    <b className="text-sm">{digitsEnToFa(2000)} تومان</b>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-3 space-x-reverse">
                        <ImageComponent />
                        <ImageComponent />
                    </div>
                    <button
                        type="button"
                        className="text-xs font-bold text-primary"
                    >
                        جزئیات سفارش
                    </button>
                </div>
            </article>
            <article className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                        {/* <span className={`rounded-full px-3 py-1 text-[10px] font-bold ${status === "در حال ارسال" ? "bg-blue-50 text-[#0866ff]" : "bg-emerald-50 text-emerald-600"}`}>{status as string}</span> */}
                        <span className="rounded-full px-3 py-1 text-xs font-bold bg-blue-50 text-primary">
                            درحال ارسال{" "}
                        </span>
                        <span className="mr-3 text-xs text-slate-400">
                            شماره سفارش: RTX-3123
                        </span>
                    </div>
                    <b className="text-sm">{digitsEnToFa(2000)} تومان</b>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-3 space-x-reverse">
                        <ImageComponent />
                        <ImageComponent />
                    </div>
                    <button
                        type="button"
                        className="text-xs font-bold text-primary"
                    >
                        جزئیات سفارش
                    </button>
                </div>
            </article>
        </div>
    );
}
