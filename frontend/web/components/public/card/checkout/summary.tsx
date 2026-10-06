"use client";

// Importing phosphor icons
import { LockSimpleIcon } from "@phosphor-icons/react";
// Importing tailwindMerge
import { cn } from "cn";
// Importing next utils image
import Image from "next/image";
import { Controller, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
// Importing shadcn ui utils
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
// Importing Cnotroller option

export function Summary() {
    const checkoutForm = useFormContext();

    return (
        <aside className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_12px_45px_rgba(15,46,100,.07)] lg:sticky lg:top-28">
            <h2 className="font-black">مرور سفارش</h2>
            <div className="my-5 space-y-3">
                <div className="flex gap-3">
                    <div className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-slate-50">
                        <Image
                            src="/3.jpg"
                            width={500}
                            height={500}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                        <span className="absolute bottom-0 right-0 grid size-5 place-items-center rounded-tl-lg bg-brand-navy text-[9px] text-white">
                            ۲
                        </span>
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-bold">
                            هدفون بلوتوث سونی
                        </p>
                        <p className="mt-1 text-[9px] text-slate-400">
                            WH-1000XM5
                        </p>
                    </div>
                    <b className="shrink-0 text-[10px]">۷۲,۳۳۳,۳۳۳</b>
                </div>
            </div>
            <div className="space-y-3 border-t border-slate-100 pt-5 text-xs text-slate-500">
                <div className="flex justify-between">
                    <span>مجموع کالاها</span>
                    <span>۹۷,۱۴۳۴ تومان</span>
                </div>
                <div className="flex justify-between">
                    <span>ارسال</span>
                    <span className="font-bold text-emerald-600">رایگان</span>
                </div>
                <div className="flex justify-between">
                    <span>تخفیف</span>
                    <span className="font-bold text-rose-500">
                        ۸,۷۳۲۳۴۲- تومان
                    </span>
                </div>
            </div>
            <div className="my-5 h-px bg-slate-100" />
            <div className="flex items-end justify-between">
                <span className="text-sm font-bold">قابل پرداخت</span>
                <div>
                    <b className="text-lg font-black text-brand-navy">
                        ۸۸,۴۰۰,۵۴۵
                    </b>
                    <span className="mr-1 text-[9px]">تومان</span>
                </div>
            </div>
            <FieldGroup className="my-7">
                <Controller
                    name="terms"
                    control={checkoutForm.control}
                    render={({ field, fieldState }) => (
                        <Field
                            orientation="horizontal"
                            data-invalid={fieldState.invalid}
                        >
                            <Checkbox
                                id="terms_checkbox"
                                name={field.name}
                                aria-invalid={fieldState.invalid}
                                checked={field.value}
                                onCheckedChange={(checked) => {
                                    field.onChange(checked);
                                }}
                            />
                            <FieldLabel
                                htmlFor="terms_checkbox"
                                className={cn(
                                    "font-normal text-xs",
                                    fieldState.invalid ? "" : "text-slate-500",
                                )}
                            >
                                شرایط و قوانین خرید و بازگشت کالا را مطالعه کرده
                                و می‌پذیرم.
                            </FieldLabel>
                        </Field>
                    )}
                />
            </FieldGroup>
            <Button
                type="submit"
                variant="empty"
                size="empty"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
            >
                <LockSimpleIcon name="lock" className="size-4" />
                پرداخت و ثبت سفارش
            </Button>
        </aside>
    );
}
