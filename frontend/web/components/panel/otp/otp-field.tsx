"use client";

// Importing shcema validation utils
import { zodResolver } from "@hookform/resolvers/zod";
// Importing digits to fa function
import { digitsEnToFa, digitsFaToEn } from "@persian-tools/persian-tools";
// Importing icons
/* import { ArrowLeftIcon } from "@phosphor-icons/react";
// Importing patterns from lib
import { REGEXP_ONLY_DIGITS } from "input-otp"; */
// Importing nextjs utils
import Link from "next/link";
/* import { useRouter } from "next/navigation";
import { useEffect } from "react"; */
import { Controller, useForm } from "react-hook-form";
import type * as z from "zod";
import { Button } from "@/components/ui/button";
// Importing global ui components
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
// Importing components from global ui
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
// Importing login schema util
import { otpFormSchema } from "@/schema/otp-schema";

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
                href="/auth/register"
                className="text-base text-center font-semibold text-slate-500"
            >
                ویرایش شماره موبایل
            </Link>
        </form>
    );
}
