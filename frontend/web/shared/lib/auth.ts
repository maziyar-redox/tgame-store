import { betterAuth } from "better-auth";
import { APIError } from "better-auth/api";
import { phoneNumber } from "better-auth/plugins";

import { client } from "@/shared/lib/api-client";

export const auth = betterAuth({
    plugins: [
        phoneNumber({
            sendOTP: async ({ phoneNumber }, _ctx) => {
                const { data, error, response } = await client.POST(
                    "/api/auth/login",
                    {
                        body: {
                            phone_number: phoneNumber,
                        },
                    },
                );

                if (error && response.status === 401) {
                    throw new APIError("UNAUTHORIZED", {
                        message: "این شماره تلفن وجود ندارد.",
                    });
                }

                if (error && response.status === 422) {
                    throw new APIError("NOT_ACCEPTABLE", {
                        message:
                            "داده وارد شده اشتباه میباشد. لطفا شماره تلفن صحیح وارد کنید.",
                    });
                }

                if (error && response.status === 429) {
                    throw new APIError("TOO_MANY_REQUESTS", {
                        message:
                            "پردازش درخواست در این لحظه امکان پذیر نمیباشد. لطفا بعدا تلاش کنید.",
                    });
                }

                if (error && response.status === 500) {
                    throw new APIError("INTERNAL_SERVER_ERROR", {
                        message:
                            "مشکلی برای سرور پیش آمده. لطفا بعدا تلاش کنید.",
                    });
                }

                if (!data) {
                    throw new APIError("REQUEST_TIMEOUT", {
                        message:
                            "درخواست به سرور ارسال نشد. لطفا بعدا تلاش کنید.",
                    });
                }

                return;
            },
        }),
    ],
});
