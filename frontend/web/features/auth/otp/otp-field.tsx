"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { digitsEnToFa, digitsFaToEn } from "@persian-tools/persian-tools";
/* import { ArrowLeftIcon } from "@phosphor-icons/react";
import { REGEXP_ONLY_DIGITS } from "input-otp"; */
import Link from "next/link";
/* import { useRouter } from "next/navigation";
import { useEffect } from "react"; */
import { Controller, useForm } from "react-hook-form";
import type * as z from "zod";

import { Button } from "@/shared/components/ui/button";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/shared/components/ui/field";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/shared/components/ui/input-otp";
import { otpFormSchema } from "@/shared/schema/otp-schema";

export function OtpField() {
    const {
        control,
        /* formState: { isValid }, */
    } = useForm<z.infer<typeof otpFormSchema>>({
        resolver: zodResolver(otpFormSchema),
        defaultValues: {
            code: "",
        },
    });
    /* const router = useRouter(); */

    // const firstName = useWatch({ control: otpForm.control, name: "code" });

    /* useEffect(() => {
        if (isValid) {
            router.push("/");
        };
    }, [isValid]); */

    function onSubmit(data: z.infer<typeof otpFormSchema>) {
        console.log(digitsFaToEn(data.code));
    }

    return (
        <form
            className="flex flex-col justify-center items-center w-full gap-y-5"
            onSubmit={control.handleSubmit(onSubmit)}
        >
            <FieldGroup>
                <Controller
                    name="code"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel
                                className="text-slate-600 block text-xs font-bold text-right"
                                htmlFor="otp_form"
                            >
                                کد یکبار مصرف
                            </FieldLabel>
                            <InputOTP
                                id="opt_form"
                                maxLength={6}
                                className="w-full"
                                dir="ltr"
                                {...field}
                                value={digitsEnToFa(field.value)}
                            >
                                <InputOTPGroup className="w-full mr-2">
                                    <InputOTPSlot
                                        index={0}
                                        className="size-12 w-full"
                                    />
                                </InputOTPGroup>
                                <InputOTPGroup className="w-full mx-2">
                                    <InputOTPSlot
                                        index={1}
                                        className="size-12 w-full"
                                    />
                                </InputOTPGroup>
                                <InputOTPGroup className="w-full mx-2">
                                    <InputOTPSlot
                                        index={2}
                                        className="size-12 w-full"
                                    />
                                </InputOTPGroup>
                                <InputOTPGroup className="w-full mx-2">
                                    <InputOTPSlot
                                        index={3}
                                        className="size-12 w-full"
                                    />
                                </InputOTPGroup>
                                <InputOTPGroup className="w-full mx-2">
                                    <InputOTPSlot
                                        index={4}
                                        className="size-12 w-full"
                                    />
                                </InputOTPGroup>
                                <InputOTPGroup className="w-full ml-2">
                                    <InputOTPSlot
                                        index={5}
                                        className="size-12 w-full"
                                    />
                                </InputOTPGroup>
                            </InputOTP>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </FieldGroup>
            <p className="text-xs text-slate-400 text-center">
                ارسال مجدد کد تا
                <b className="text-primary"> {digitsEnToFa("1:48")} </b>
            </p>
            <Button
                type="submit"
                size="xl"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-white shadow-lg shadow-blue-200"
            >
                تایید و ورود
            </Button>
            <Link
                href="/register"
                className="text-base text-center font-semibold text-slate-500"
            >
                ویرایش شماره موبایل
            </Link>
        </form>
    );
}
