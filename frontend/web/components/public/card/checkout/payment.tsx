"use client";

// Importing icons
import { CreditCardIcon } from "@phosphor-icons/react";
// Importing useFormContext for using form in chckout page
import { Controller, useFormContext } from "react-hook-form";
// Importing shadcn ui utils
import {
    Field,
    FieldContent,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const paymentTypes = [
    {
        value: "ONLINE",
        title: "پرداخت آنلاین",
        description: "انتقال امن به درگاه بانکی",
    },
    {
        value: "WALLET",
        title: "کیف پول تی گیم",
        description: "پرداخت با موجودی کیف پول تی گیم در لحظه",
    },
    {
        value: "SNAPPAY",
        title: "اسنپ پی",
        description: "پرداخت قسطی با اسنپ پی",
    },
    {
        value: "DIGIPAY",
        title: "دیجی پی",
        description: "پرداخت قسطی با دیجی پی",
    },
] as const;

export function Payment() {
    const checkoutForm = useFormContext();

    return (
        <section className="rounded-3xl border border-slate-100 bg-white p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-blue-50 text-primary">
                    <CreditCardIcon name="truck" className="size-4" />
                </span>
                <div>
                    <h2 className="font-black">روش پرداخت</h2>
                    <p className="text-[10px] text-slate-400">
                        تمامی پرداخت‌ها امن و رمزنگاری شده‌اند
                    </p>
                </div>
            </div>
            <FieldGroup>
                <Controller
                    name="payment_method"
                    control={checkoutForm.control}
                    render={({ field }) => (
                        <RadioGroup
                            value={field.value}
                            onValueChange={field.onChange}
                            className="space-y-3"
                            defaultValue="ONLINE"
                        >
                            {paymentTypes.map((items) => {
                                const _selected = field.value === items.value;
                                return (
                                    <FieldLabel
                                        key={items.value}
                                        htmlFor={items.value}
                                        className="has-[>[data-slot=field]]:rounded-2xl border-2 p-2 transition-colors"
                                    >
                                        <Field orientation="horizontal">
                                            <div className="flex justify-center items-center h-full data-checked:bg-black">
                                                <RadioGroupItem
                                                    value={items.value}
                                                    id={items.value}
                                                />
                                            </div>
                                            <FieldContent className="w-full justify-center items-start">
                                                <div className="cursor-pointer flex flex-col justify-center items-start">
                                                    <span className="block text-sm font-bold">
                                                        {items.title}
                                                    </span>

                                                    <span className="text-sm text-slate-400">
                                                        {items.description}
                                                    </span>
                                                </div>
                                            </FieldContent>
                                        </Field>
                                    </FieldLabel>
                                );
                            })}
                        </RadioGroup>
                    )}
                />
            </FieldGroup>
        </section>
    );
}
