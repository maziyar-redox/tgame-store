"use server";

import { digitsFaToEn } from "@persian-tools/persian-tools";
import { isAPIError } from "better-auth/api";

import type * as z from "zod";
import { auth } from "@/shared/lib/auth";
import { loginFormSchema } from "@/shared/schema/login-schema";

type LoginProps = {
    message: string;
    success: boolean;
};

export async function Login(
    loginData: z.infer<typeof loginFormSchema>,
): Promise<LoginProps> {
    try {
        const { data, error, success } =
            await loginFormSchema.safeParseAsync(loginData);

        if (error) {
            return {
                message: error.message,
                success: success,
            };
        }

        const sendOtp = await auth.api.sendPhoneNumberOTP({
            body: {
                phoneNumber: digitsFaToEn(data.phone_number),
            },
        });

        console.log(sendOtp);

        return {
            message: "ff",
            success: success,
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
