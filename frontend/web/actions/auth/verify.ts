"use server";

import { digitsFaToEn } from "@persian-tools/persian-tools";
import { isAPIError } from "better-auth/api";

import type * as z from "zod";
import { auth } from "@/shared/lib/auth/auth";
import { loginFormSchema } from "@/shared/schema/login-schema";
import { otpFormSchema } from "@/shared/schema/otp-schema";

type VerifyProps = {
    message: string;
    success: boolean;
};

const extendedOtpBase = otpFormSchema.extend(loginFormSchema.shape);

export async function Verify(
    otpData: z.infer<typeof extendedOtpBase>,
): Promise<VerifyProps> {
    try {
        const { data, error, success } =
            await extendedOtpBase.safeParseAsync(otpData);

        if (error) {
            return {
                message: error.message,
                success: success,
            };
        }

        const verifyUser = await auth.api.verifyPhoneNumber({
            body: {
                phone_number: digitsFaToEn(data.phone_number),
                code: digitsFaToEn(data.code),
            },
        });

        if (verifyUser.success === true) {
            return {
                message: "با موفقیت وارد شدید.",
                success: true,
            };
        }

        return {
            message: "مشکلی پیش آمده. لطفا بعدا تلاش کنید.",
            success: false,
        };
    } catch (error) {
        if (isAPIError(error)) {
            return {
                message: error.message,
                success: false,
            };
        }

        return {
            message: "مشکلی پیش آمده. لطفا بعدا تلاش کنید.",
            success: false,
        };
    }
}
