"use client";

// Importing resolvers
import { zodResolver } from "@hookform/resolvers/zod";
// Importing persian tools
import { digitsFaToEn } from "@persian-tools/persian-tools";
// Importing icons
import { ArrowLeftIcon, LockIcon } from "@phosphor-icons/react";
// Importing next utils
import Link from "next/link";
import { useEffect } from "react";
// Importing react hook form utils
import { Controller, useForm, useFormState } from "react-hook-form";
// Importing toast from sonner package
import { toast } from "sonner";
// Importing zod utils
import type * as z from "zod";
// Importing global ui components
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
// Importing schema validation for discount
import { discountFormSchema } from "@/schema/discount-schema";

export function Status() {
    const discountForm = useForm<z.infer<typeof discountFormSchema>>({
        resolver: zodResolver(discountFormSchema),
        defaultValues: {
            code: "",
        },
    });

    const { errors } = useFormState({
        control: discountForm.control,
        name: "code",
    });

    useEffect(() => {
        if (errors.code) {
            toast.error("کد تخفیف وارد شده صحیح نمیباشد", {
                position: "top-center",
            });
        }
    }, [errors]);

    function onSubmit(data: z.infer<typeof discountFormSchema>) {
        console.log(digitsFaToEn(data.code as string));
    }

    return (
        <aside className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_12px_45px_rgba(15,46,100,.07)] lg:sticky lg:top-28">
            <h2 className="text-lg font-black">خلاصه سفارش</h2>
            <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between text-slate-500">
                    <span>قیمت کالاها (۴)</span>
                    <span>۹۷,۴۴۴۴,۴۴۴ تومان</span>
                </div>
                <div className="flex justify-between text-slate-500">
                    <span>هزینه ارسال</span>
                    <span className="font-bold text-emerald-600">رایگان</span>
                </div>
                <div className="flex justify-between text-slate-500">
                    <span>تخفیف کالاها</span>
                    <span className="font-bold text-rose-500">
                        ۸,۴۴۴۴۴۴- تومان
                    </span>
                </div>
                <div className="flex justify-between text-slate-500">
                    <span>کد تخفیف</span>
                    <span className="font-bold text-rose-500">-۳۱۲۳ تومان</span>
                </div>
            </div>
            <div className="my-5 h-px bg-slate-100" />
            <div className="flex items-end justify-between">
                <span className="font-bold">مبلغ قابل پرداخت</span>
                <div className="text-left">
                    <b className="text-xl font-black text-brand-navy">
                        ۸۸,۴۰۰,۴۴۴
                    </b>
                    <span className="mr-1 text-[10px] text-slate-500">
                        تومان
                    </span>
                </div>
            </div>
            <form
                className="mt-5 flex justify-center items-center gap-2"
                id="discount_form"
                onSubmit={discountForm.handleSubmit(onSubmit)}
            >
                <FieldGroup className="h-full">
                    <Controller
                        control={discountForm.control}
                        name="code"
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <Input
                                    {...field}
                                    className="min-w-0 h-10 py-4 border border-slate-200 px-3 text-xs outline-none focus:border-primary"
                                    placeholder="کد تخفیف"
                                    id="discount_form"
                                    name="discount"
                                    required={false}
                                    type="text"
                                    autoComplete="off"
                                />
                            </Field>
                        )}
                    />
                </FieldGroup>
                <Button
                    variant="empty"
                    size="empty"
                    type="submit"
                    className="rounded-xl bg-slate-100 px-4 py-3 text-xs font-bold hover:bg-slate-200"
                >
                    اعمال شد
                </Button>
            </form>
            <Link
                href="/card/checkout"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
            >
                تکمیل و ثبت سفارش
                <ArrowLeftIcon name="arrow" className="size-4" />
            </Link>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                <LockIcon name="lock" className="size-3" />
                پرداخت امن و رمزنگاری‌شده
            </p>
        </aside>
    );
}
