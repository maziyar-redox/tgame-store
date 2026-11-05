import { digitsFaToEn, isPhoneNumberValid } from "@persian-tools/persian-tools";

import * as z from "zod";

// Register schema for user registration
export const registerFormSchema = z.object({
    first_name: z
        .string()
        .min(4, "نام باید حداقل چهار کاراکتر باشد")
        .max(64, "نام حداکثر باید شصت و چهار کاراکتر باشد"),
    last_name: z
        .string()
        .min(4, "نام خانوداگی باید حداقل چهار کاراکتر باشد")
        .max(64, "نام خانوداگی حداکثر باید شصت و چهار کاراکتر باشد"),
    phone_number: z
        .string()
        .refine((value) => isPhoneNumberValid(digitsFaToEn(value)), {
            error: "شماره وارد شده صحیح نمیباشد",
        }),
    terms: z.boolean().refine((val) => val === true, {
        error: "شما باید با شرایط و قوانین موافقت کنید",
    }),
});
