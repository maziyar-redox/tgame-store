"use client";

// Importing icons
import { TruckIcon } from "@phosphor-icons/react";
// Importing useFormContext for using form in chckout page
import { Controller, useFormContext } from "react-hook-form";
// Importing shadcn ui utils
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const postingTypes = [
    {
        value: "EXPRESS",
        title: "ارسال سریع تی گیم",
        description: "تحویل فردا صبح ساعت ۹ تا ۱۵",
        price: "رایگان",
    },
    {
        value: "POST",
        title: "ارسال زمان بندی شده",
        description: "انتخاب روز و بازه دلخواه",
        price: "۱۴۴۴",
    },
] as const;

export function Posting() {
    const checkoutForm = useFormContext();

    return (
        <section className="rounded-3xl border border-slate-100 bg-white p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-blue-50 text-primary">
                    <TruckIcon name="truck" className="size-4" />
                </span>
                <div>
                    <h2 className="font-black">روش ارسال</h2>
                    <p className="text-[10px] text-slate-400">
                        زمان و روش ارسال را انتخاب کنید
                    </p>
                </div>
            </div>
            <FieldGroup>
                <Controller
                    name="sending_method"
                    control={checkoutForm.control}
                    render={({ field }) => (
                        <RadioGroup
                            value={field.value}
                            onValueChange={field.onChange}
                            className="grid gap-3 sm:grid-cols-2"
                            defaultValue="EXPRESS"
                        >
                            {postingTypes.map((items) => {
                                const _selected = field.value === items.value;
                                return (
                                    <FieldLabel
                                        key={items.value}
                                        htmlFor={items.value}
                                        className="has-[>[data-slot=field]]:rounded-2xl border-2 p-2 transition-colors"
                                    >
                                        <Field orientation="horizontal">
                                            <FieldContent>
                                                <FieldTitle className="font-bold text-black mb-2">
                                                    {items.title}
                                                </FieldTitle>
                                                <FieldDescription>
                                                    {items.description}
                                                </FieldDescription>
                                                <span className="mt-3 block text-xs font-bold text-primary">
                                                    {items.price}
                                                </span>
                                            </FieldContent>
                                            <RadioGroupItem
                                                value={items.value}
                                                id={items.value}
                                            />
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
