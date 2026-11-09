"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import type * as z from "zod";

import { Payment } from "@/features/store/card/checkout/payment";
import { PersonalInformation } from "@/features/store/card/checkout/personal-info";
import { Posting } from "@/features/store/card/checkout/posting";
import { Timeline } from "@/features/store/card/checkout/timeline";

import { checkoutFormSchema } from "@/shared/schema/checkout-schema";

export function CheckoutLayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const checkoutForm = useForm<z.infer<typeof checkoutFormSchema>>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            terms: false,
            full_name: "",
            city: "",
            province: "",
            phone_number: "",
            postal_code: "",
            sending_method: "EXPRESS",
            payment_method: "ONLINE",
        },
    });

    function onSubmit(data: z.infer<typeof checkoutFormSchema>) {
        console.log(data);
    }

    return (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-9 lg:px-8">
            <div className="mb-7">
                <Link
                    href="/card"
                    className="mb-4 flex items-center gap-2 text-xs font-bold text-slate-500"
                >
                    <ArrowRightIcon name="arrow" className="size-4" />
                    بازگشت به سبد خرید
                </Link>
                <h1 className="text-2xl font-black text-brand-navy sm:text-3xl">
                    تکمیل سفارش
                </h1>
                <div className="mt-5 flex w-full sm:max-w-lg items-center sm:justify-baseline justify-center">
                    <Timeline />
                </div>
            </div>
            <FormProvider {...checkoutForm}>
                <form
                    onSubmit={checkoutForm.handleSubmit(onSubmit)}
                    className="grid items-start gap-6 lg:grid-cols-[1fr_360px]"
                >
                    <div className="space-y-5">
                        <PersonalInformation />
                        <Posting />
                        <Payment />
                    </div>
                    {children}
                </form>
            </FormProvider>
        </main>
    );
}
