"use client";

import { ArrowLeftIcon, HeartIcon } from "@phosphor-icons/react";
import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/shared/components/ui/button";

export function MainSection() {
    return (
        <div className="grid items-stretch gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <div className="flex flex-col justify-center rounded-[28px] bg-[#092253] p-7 text-white sm:p-10 lg:p-12">
                <span className="w-fit rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1.5 text-xs font-bold text-blue-200">
                    قصهٔ تی گیم از سال ۱۳۹۸
                </span>
                <h1 className="mt-6 text-3xl font-black leading-normal sm:text-4xl lg:text-5xl">
                    تکنولوژی را
                    <br />
                    <span className="text-blue-400">ساده‌تر انتخاب کنید.</span>
                </h1>
                <p className="mt-5 max-w-xl text-sm leading-8 text-blue-100/75 sm:text-base">
                    تکنو از یک ایدهٔ ساده شروع شد: خرید کالای دیجیتال نباید
                    پیچیده باشد. ما محصولات معتبر را با اطلاعات دقیق، مشاورهٔ
                    تخصصی و تجربه‌ای شفاف کنار هم آورده‌ایم تا با خیال راحت،
                    انتخاب درست‌تری داشته باشید.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                        href="/category"
                        className={cn(
                            buttonVariants({ size: "empty", variant: "empty" }),
                            "inline-flex items-center gap-3 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 w-48 sm:w-fit",
                        )}
                    >
                        دیدن محصولات{" "}
                        <ArrowLeftIcon name="arrow" className="size-4" />
                    </Link>
                    <Button
                        type="button"
                        size="empty"
                        variant="empty"
                        className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                    >
                        تماس با تیم تکنو
                    </Button>
                </div>
            </div>
            <div className="relative min-h-90 overflow-hidden rounded-[28px] bg-slate-200 lg:min-h-135">
                <Image
                    width={600}
                    height={600}
                    src="https://tgame-test.s3.ir-central1.arvanstorage.ir/MAIN.jpg"
                    alt="اعضای تیم تکنو در حال همکاری"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#092253]/70 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur sm:inset-x-7 sm:bottom-7">
                    <div>
                        <b className="block text-sm text-slate-900">
                            یک تیم، یک هدف
                        </b>
                        <span className="mt-1 block text-xs text-slate-500">
                            ساختن تجربه‌ای که خودمان دوست داریم
                        </span>
                    </div>
                    <span className="grid size-11 place-items-center rounded-xl bg-blue-50 text-primary">
                        <HeartIcon name="heart" className="size-5" />
                    </span>
                </div>
            </div>
        </div>
    );
}
