"use client";

// Importing zod provider
import { zodResolver } from "@hookform/resolvers/zod";
// Importing icons
import { ArrowRightIcon } from "@phosphor-icons/react";
// Importing nextjs utils
import Link from "next/link";
// Importing form provider for registering methods under hood
import { FormProvider, useForm } from "react-hook-form";
import type * as z from "zod";
import { Payment } from "@/components/public/card/checkout/payment";
import { PersonalInformation } from "@/components/public/card/checkout/personal-info";
import { Posting } from "@/components/public/card/checkout/posting";
import { Summary } from "@/components/public/card/checkout/summary";
// Importing from local ui components
import { Timeline } from "@/components/public/card/checkout/timeline";
// Importing Checkout form schema
import { checkoutFormSchema } from "@/schema/checkout-schema";

export function CheckoutPageComponent() {
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
                    <Summary />
                </form>
            </FormProvider>
        </main>
    );
}
