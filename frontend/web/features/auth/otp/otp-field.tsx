"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { useCountdown } from "usehooks-ts";
import type * as z from "zod";
import { Verify } from "@/actions/auth/verify";
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
import { Skeleton } from "@/shared/components/ui/skeleton";
import { useAuthenticationStore } from "@/shared/provider/authentication-provider";
import { otpFormSchema } from "@/shared/schema/otp-schema";

export function OtpField() {
    const [isExpired, setIsExpired] = useState<boolean>(false);
    const { countDown, setCountDown, phoneNumber } = useAuthenticationStore(
        (store) => store,
    );
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const {
        control,
        formState: { isValid },
        setError,
    } = useForm<z.infer<typeof otpFormSchema>>({
        resolver: zodResolver(otpFormSchema),
        defaultValues: {
            code: "",
        },
    });

    const formatTime = (totalMinutes: number) => {
        const hours = Math.floor(totalMinutes / 60);
        const mins = totalMinutes % 60;
        return `${hours}:${String(mins).padStart(2, "0")}`;
    };

    const [count, { startCountdown }] = useCountdown({
        countStart: countDown || 0,
        intervalMs: 1000,
    });

    useEffect(() => {
        if (count === 0) {
            setIsExpired(true);
        }

        return () => {
            startCountdown();
            setCountDown(count - 1);
        };
    }, [count, setCountDown, startCountdown]);

    function onSubmit(data: z.infer<typeof otpFormSchema>) {
        try {
            if (count === 0) {
                return control.setError("code", {
                    message: "اعتبار کد تمام شده. لطفا دوباره درخواست بدهید.",
                });
            }

            if (!isValid) {
                return control.setError("code", {
                    message: "لطفا کد صحیح وارد کنید.",
                });
            }

            startTransition(async () => {
                const isVerify = await Verify({
                    phone_number: phoneNumber as string,
                    code: data.code,
                });

                if (isVerify.success === false) {
                    return setError("code", {
                        message: isVerify.message,
                    });
                }

                router.refresh();
            });
        } catch (_error) {
            setError("code", {
                message: "مشکلی پیش آمده. لطفا دوباره تلاش کنید",
            });
        }
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
                            <FieldLabel className="text-slate-600 block text-xs font-bold text-right">
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
                                <FieldError
                                    dir="rtl"
                                    errors={[fieldState.error]}
                                    className="text-right"
                                />
                            )}
                        </Field>
                    )}
                />
            </FieldGroup>
            {phoneNumber === null ? (
                <Skeleton className="w-full h-4" />
            ) : (
                <p className="text-xs text-slate-400 text-center">
                    ارسال مجدد کد تا
                    <b className="text-primary">
                        {" "}
                        {digitsEnToFa(formatTime(countDown))}{" "}
                    </b>
                </p>
            )}
            <Button
                disabled={isPending || isExpired || !phoneNumber}
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
