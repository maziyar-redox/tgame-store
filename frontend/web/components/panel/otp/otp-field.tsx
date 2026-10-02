"use client";

// Importing patterns from lib
import { REGEXP_ONLY_DIGITS } from "input-otp";
// Importing nextjs utils
import Link from "next/link";
import { Button } from "@/components/ui/button";
// Importing components from global ui
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

export function OtpField() {
    return (
        <form className="flex flex-col justify-center items-center w-full gap-y-5">
            <InputOTP
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS}
                className="w-full flex-row"
                dir="ltr"
            >
                <InputOTPGroup className="mx-2 w-full">
                    <InputOTPSlot index={0} className="size-12" />
                </InputOTPGroup>
                <InputOTPGroup className="mx-2 w-full">
                    <InputOTPSlot index={1} className="size-12" />
                </InputOTPGroup>
                <InputOTPGroup className="mx-2 w-full">
                    <InputOTPSlot index={2} className="size-12" />
                </InputOTPGroup>
                <InputOTPGroup className="mx-2 w-full">
                    <InputOTPSlot index={3} className="size-12" />
                </InputOTPGroup>
                <InputOTPGroup className="mx-2 w-full">
                    <InputOTPSlot index={4} className="size-12" />
                </InputOTPGroup>
                <InputOTPGroup className="mx-2 w-full">
                    <InputOTPSlot index={5} className="size-12" />
                </InputOTPGroup>
            </InputOTP>
            <p className="text-xs text-slate-400 text-center">
                ارسال مجدد کد تا <b className="text-primary">۰۱:۴۸</b>
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
