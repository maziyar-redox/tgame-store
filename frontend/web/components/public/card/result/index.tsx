"use client";

// Importing icons
import { CheckIcon, XIcon } from "@phosphor-icons/react";
// Importing tailwindMerge utils
import { cn } from "cn";
// Importing next utils
import Link from "next/link";
// Importing global ui utils
import { buttonVariants } from "@/components/ui/button";

export function SuccessPageComponent() {
    return (
        <main className="mx-auto grid min-h-[70vh] max-w-2xl place-items-center px-4 py-12 text-center">
            {/* <Success /> */}
            <Failure />
        </main>
    );
}

function _Success() {
    return (
        <div>
            <span className="mx-auto grid size-20 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckIcon name="check" className="size-10" />
            </span>
            <p className="mt-6 text-xs font-bold text-emerald-600">
                پرداخت موفق
            </p>
            <h1 className="mt-2 text-2xl font-black sm:text-3xl">
                سفارش شما ثبت شد
            </h1>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
                شماره سفارش TK-140421 برای شما پیامک شد. می‌توانید وضعیت ارسال را
                از حساب کاربری دنبال کنید.
            </p>
            <Link
                href="/"
                className={cn(
                    buttonVariants({ variant: "empty", size: "empty" }),
                    "mt-6 rounded-xl bg-primary px-7 py-3 text-sm font-bold text-white",
                )}
            >
                بازگشت به فروشگاه
            </Link>
        </div>
    );
}

function Failure() {
    return (
        <div>
            <span className="mx-auto grid size-20 place-items-center rounded-full bg-rose-50 text-rose-600">
                <XIcon name="check" className="size-10" />
            </span>
            <p className="mt-6 text-xs font-bold text-rose-600">
                پرداخت ناموفق
            </p>
            <h1 className="mt-2 text-2xl font-black sm:text-3xl">
                سفارش شما ثبت نشد
            </h1>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
                لطفا دوباره تلاش کنید و یا اگر پول از حساب شما کم شده تا هفتاد و
                دو ساعت دیگر به حساب باز میگردد
            </p>
            <Link
                href="/"
                className={cn(
                    buttonVariants({ variant: "empty", size: "empty" }),
                    "mt-6 rounded-xl bg-primary px-7 py-3 text-sm font-bold text-white",
                )}
            >
                بازگشت به فروشگاه
            </Link>
        </div>
    );
}
