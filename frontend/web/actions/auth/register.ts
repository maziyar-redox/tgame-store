"use server";

import { digitsFaToEn } from "@persian-tools/persian-tools";
import { isAPIError } from "better-auth/api";

import type * as z from "zod";
import { auth } from "@/shared/lib/auth/auth";
import { registerFormSchema } from "@/shared/schema/register-schema";

type RegisterProps = {
    message: string;
    success: boolean;
};

export async function Register(
    registerData: z.infer<typeof registerFormSchema>,
): Promise<RegisterProps> {
    try {
        const { data, error } =
            await registerFormSchema.safeParseAsync(registerData);

        if (error) {
            return {
                message: error.message,
                success: false,
            };
        }

        const registerUser = await auth.api.signUpPhoneNumber({
            body: {
                phone_number: digitsFaToEn(data.phone_number),
                first_name: data.first_name,
                last_name: data.last_name,
                terms: data.terms,
            },
        });

        if (registerUser.success === true) {
            return {
                message: "اکانت با موفقیت ایجاد شد.",
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
