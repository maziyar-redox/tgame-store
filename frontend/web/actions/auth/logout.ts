"use server";

import { isAPIError } from "better-auth/api";
import { headers } from "next/headers";
import { auth } from "@/shared/lib/auth/auth";

type LogoutProps = {
    message: string;
    success: boolean;
};

export async function Logout(): Promise<LogoutProps> {
    try {
        const logoutUser = await auth.api.signOutPhoneNumber({
            headers: await headers(),
        });

        if (logoutUser.success === true) {
            return {
                message: "با موفقیت لاگ اوت شدید.",
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
