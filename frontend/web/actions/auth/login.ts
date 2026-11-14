"use server";

import { digitsFaToEn } from "@persian-tools/persian-tools";
import { isAPIError } from "better-auth/api";

import type * as z from "zod";
import { auth } from "@/shared/lib/auth/auth";
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

        const loginUser = await auth.api.signInPhoneNumber({
            body: {
                phone_number: digitsFaToEn(data.phone_number),
            },
        });

        if (loginUser.success === true) {
            return {
                message: "کد ارسال شد.",
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
