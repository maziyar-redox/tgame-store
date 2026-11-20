import { zodResolver } from "@hookform/resolvers/zod";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { CheckIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import type * as z from "zod";
import { Button } from "@/shared/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shared/components/ui/select";
import { Textarea } from "@/shared/components/ui/textarea";
import { contactFormSchema } from "@/shared/schema/contact-schema";

type SelectTypes = "URGENT" | "DEVELOPMENT" | "SUPPORT" | "TRACKING";

const selectRecords: Record<SelectTypes, string> = {
    URGENT: "فوری",
    DEVELOPMENT: "فنی",
    SUPPORT: "پشتیبانی پس از فروش",
    TRACKING: "پیگیری سفارش",
};

const items: {
    label: string;
    value: string;
}[] = [
    { label: "فوری", value: "URGENT" },
    { label: "فنی", value: "DEVELOPMENT" },
    { label: "پشتیبانی پس از فروش", value: "SUPPORT" },
    { label: "پیگیری سفارش", value: "TRACKING" },
];

export function ContactForm() {
    const [isSent, setIsSent] = useState<boolean>(false);
    const contactForm = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            full_name: "",
            phone_number: "",
            subject: "SUPPORT",
            text: "",
        },
    });

    function onContact(_data: z.infer<typeof contactFormSchema>) {
        console.log("OK");
        setIsSent(true);
    }

    return (
        <div className="rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_10px_40px_rgba(15,46,100,.04)] sm:p-8">
            <p className="text-xs font-bold text-primary">پیام شما</p>
            <h2 className="mt-2 text-2xl font-black text-[#092253]">
                چطور می‌توانیم کمک کنیم؟
            </h2>
            <p className="mt-3 text-xs leading-6 text-slate-400">
                فرم را کامل کنید؛ همکاران ما در اولین فرصت با شما تماس می‌گیرند.
            </p>
            {isSent && <SentStatus />}
            {!isSent && (
                <form
                    onSubmit={contactForm.handleSubmit(onContact)}
                    className="mt-7 space-y-4"
                >
                    <FieldGroup className="grid gap-4 sm:grid-cols-2">
                        <Controller
                            name="full_name"
                            control={contactForm.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel
                                        className="text-slate-600 block text-xs font-bold mt-2"
                                        htmlFor="contact_form_full_name"
                                    >
                                        نام کامل
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="contact_form_full_name"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="لظفا نام کامل خود را وارد کنید"
                                        autoComplete="name"
                                        type="text"
                                        required
                                        dir="rtl"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-5 text-right text-sm font-normal outline-none transition focus:border-primary focus:bg-white"
                                    />
                                </Field>
                            )}
                        />
                        <Controller
                            name="phone_number"
                            control={contactForm.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel
                                        className="text-slate-600 block text-xs font-bold mt-2"
                                        htmlFor="contact_form_phone_number"
                                    >
                                        شماره تماس
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="contact_form_phone_number"
                                        aria-invalid={fieldState.invalid}
                                        placeholder={digitsEnToFa(
                                            "09121234567",
                                        )}
                                        autoComplete="tel"
                                        type="tel"
                                        required
                                        dir="ltr"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-5 text-left text-sm font-normal outline-none transition focus:border-primary focus:bg-white"
                                    />
                                </Field>
                            )}
                        />
                        <Controller
                            name="subject"
                            control={contactForm.control}
                            render={({ field, fieldState }) => (
                                <Field
                                    data-invalid={fieldState.invalid}
                                    className="col-span-2"
                                >
                                    <FieldLabel
                                        className="text-slate-600 block text-xs font-bold mt-2"
                                        htmlFor="contact_form_subject"
                                    >
                                        موضوع
                                    </FieldLabel>
                                    <Select
                                        items={items}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger
                                            id="category"
                                            aria-invalid={fieldState.invalid}
                                            className="rounded-xl w-full border border-slate-200 bg-slate-50 px-4 py-5 outline-none transition focus:border-primary focus:bg-white"
                                        >
                                            <SelectValue
                                                placeholder={
                                                    selectRecords[
                                                        field.value as SelectTypes
                                                    ]
                                                }
                                            />
                                        </SelectTrigger>
                                        <SelectContent className="p-2">
                                            <SelectItem value="URGENT">
                                                فوری
                                            </SelectItem>
                                            <SelectItem value="DEVELOPMENT">
                                                فنی
                                            </SelectItem>
                                            <SelectItem value="SUPPORT">
                                                پشتیبانی پس از فروش
                                            </SelectItem>
                                            <SelectItem value="TRACKING">
                                                پیگیری سفارش
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </Field>
                            )}
                        />
                        <Controller
                            name="text"
                            control={contactForm.control}
                            render={({ field, fieldState }) => (
                                <Field
                                    data-invalid={fieldState.invalid}
                                    className="col-span-2"
                                >
                                    <FieldLabel
                                        className="text-slate-600 block text-xs font-bold mt-2"
                                        htmlFor="contact_form_text"
                                    >
                                        متن پیام
                                    </FieldLabel>
                                    <Textarea
                                        {...field}
                                        id="contact_form_text"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="پیام خود را اینجا بنویسید..."
                                        required
                                        dir="rtl"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-right text-sm font-normal outline-none transition focus:border-primary focus:bg-white h-28 lg:h-55"
                                    />
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </form>
            )}
        </div>
    );
}

function SentStatus() {
    return (
        <div className="mt-8 grid min-h-72 place-items-center rounded-2xl bg-emerald-50 p-6 text-center">
            <div>
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-emerald-500 text-white">
                    <CheckIcon name="check" className="size-7" />
                </span>
                <h3 className="mt-4 font-black text-emerald-900">
                    پیام شما دریافت شد
                </h3>
                <p className="mt-2 text-xs leading-6 text-emerald-700/70">
                    به‌زودی از طرف تیم تکنو با شما در ارتباط خواهیم بود.
                </p>
                <Button
                    variant="empty"
                    size="empty"
                    className="mt-5 text-xs font-bold text-emerald-700 underline underline-offset-4"
                >
                    ارسال پیام جدید
                </Button>
            </div>
        </div>
    );
}
