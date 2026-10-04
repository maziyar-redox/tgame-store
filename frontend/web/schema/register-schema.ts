// Importing Zod

// Importing digits to fa function
import { digitsFaToEn } from "@persian-tools/persian-tools";
import * as z from "zod";

// Register schema for user registration
export const registerFormSchema = z.object({
    full_name: z
        .string()
        .min(4, "نام کامل باید حداقل چهار کاراکتر باشد")
        .max(64, "نام کامل حداکثر باید شصت و چهار کاراکتر باشد"),
    phone_number: z
        .string()
        .refine(
            (value) =>
                /^(?:\+98|0)?9\d{9}$/.test(
                    digitsFaToEn(value).replace(/\D/g, ""),
                ),
            { message: "شماره وارد شده صحیح نمیباشد" },
        ),
    terms: z.boolean().refine((val) => val === true, {
        message: "شما باید با شرایط و قوانین موافقت کنید",
    }),
});
