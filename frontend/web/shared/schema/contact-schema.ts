import { digitsFaToEn, isPhoneNumberValid } from "@persian-tools/persian-tools";

import * as z from "zod";

// Contact schema for contacting user
export const contactFormSchema = z.object({
    full_name: z
        .string()
        .min(4, "نام کامل باید حداقل چهار کاراکتر باشد")
        .max(32, "نام کامل حداکثر باید شصت و چهار کاراکتر باشد"),
    phone_number: z
        .string()
        .refine((value) => isPhoneNumberValid(digitsFaToEn(value)), {
            error: "شماره وارد شده صحیح نمیباشد",
        }),
    subject: z.enum(["URGENT", "DEVELOPMENT", "SUPPORT", "TRACKING"]),
    text: z
        .string()
        .min(16, "حداقل پیام باید شانزده کاراکتر باشد")
        .max(256, "حداکثر پیام باید دویست و پنجاه و شش کاراکتر باشد"),
});
