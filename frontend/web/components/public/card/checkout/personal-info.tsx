"use client";

// Importing persian tools
import { digitsEnToFa } from "@persian-tools/persian-tools";
// Importing icon
import { UserIcon } from "@phosphor-icons/react";
// Importing useFormContext for using form in chckout page
import { Controller, useFormContext } from "react-hook-form";
// importing shadcn ui global ui items
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function PersonalInformation() {
    const checkoutForm = useFormContext();

    return (
        <section className="rounded-3xl border border-slate-100 bg-white p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-blue-50 text-primary">
                    <UserIcon name="user" className="size-4" />
                </span>
                <div>
                    <h2 className="font-black">اطلاعات گیرنده</h2>
                    <p className="text-[10px] text-slate-400">
                        اطلاعات تماس و آدرس تحویل سفارش
                    </p>
                </div>
            </div>
            <FieldGroup className="grid gap-4 sm:grid-cols-2">
                <Controller
                    name="full_name"
                    control={checkoutForm.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel
                                className="text-slate-600 block text-xs font-bold"
                                htmlFor="full_name_form"
                            >
                                نام و نام خانوادگی
                            </FieldLabel>
                            <Input
                                {...field}
                                id="full_name_form"
                                aria-invalid={fieldState.invalid}
                                placeholder="نام و نام خانوادگی"
                                autoComplete="off"
                                dir="rtl"
                                className="border border-slate-200 px-4 py-5 text-right text-sm font-normal outline-none focus:border-primary"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                <Controller
                    name="phone_number"
                    control={checkoutForm.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel
                                className="text-slate-600 block text-xs font-bold"
                                htmlFor="phone_number_form"
                            >
                                شماره موبایل
                            </FieldLabel>
                            <Input
                                {...field}
                                id="phone_number_form"
                                aria-invalid={fieldState.invalid}
                                value={digitsEnToFa(field.value)}
                                placeholder={digitsEnToFa("09121234567")}
                                autoComplete="off"
                                dir="ltr"
                                className="border border-slate-200 px-4 py-5 text-left text-sm font-normal outline-none focus:border-primary"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                <Controller
                    name="province"
                    control={checkoutForm.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel
                                className="text-slate-600 block text-xs font-bold"
                                htmlFor="province_form"
                            >
                                استان
                            </FieldLabel>
                            <Input
                                {...field}
                                id="province_form"
                                aria-invalid={fieldState.invalid}
                                placeholder="تهران"
                                autoComplete="off"
                                dir="rtl"
                                className="border border-slate-200 px-4 py-5 text-right text-sm font-normal outline-none focus:border-primary"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                <Controller
                    name="city"
                    control={checkoutForm.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel
                                className="text-slate-600 block text-xs font-bold"
                                htmlFor="city_form"
                            >
                                شهر
                            </FieldLabel>
                            <Input
                                {...field}
                                id="city_form"
                                aria-invalid={fieldState.invalid}
                                placeholder="تهران"
                                autoComplete="off"
                                dir="rtl"
                                className="border border-slate-200 px-4 py-5 text-right text-sm font-normal outline-none focus:border-primary"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                <div className="w-full sm:col-span-2">
                    <Controller
                        name="address"
                        control={checkoutForm.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel
                                    className="text-slate-600 block text-xs font-bold"
                                    htmlFor="address_form"
                                >
                                    آدرس کامل
                                </FieldLabel>
                                <Textarea
                                    {...field}
                                    id="address_form"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="تهران"
                                    autoComplete="off"
                                    rows={2}
                                    dir="rtl"
                                    className="border min-h-20 resize-none border-slate-200 px-4 text-right text-sm font-normal outline-none focus:border-primary"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </div>
                <Controller
                    name="postal_code"
                    control={checkoutForm.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel
                                className="text-slate-600 block text-xs font-bold"
                                htmlFor="postal_code_form"
                            >
                                کد پستی
                            </FieldLabel>
                            <Input
                                {...field}
                                id="postal_code_form"
                                aria-invalid={fieldState.invalid}
                                value={digitsEnToFa(field.value)}
                                placeholder={digitsEnToFa("1234567890")}
                                autoComplete="off"
                                dir="ltr"
                                className="border border-slate-200 px-4 py-5 text-left text-sm font-normal outline-none focus:border-primary"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </FieldGroup>
        </section>
    );
}
