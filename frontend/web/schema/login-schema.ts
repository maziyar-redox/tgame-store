// Importing digits to fa function
import { digitsFaToEn, isPhoneNumberValid } from "@persian-tools/persian-tools";
// Importing Zod
import * as z from "zod";

// User login schema
export const loginFormSchema = z.object({
    phone_number: z
        .string()
        .refine((value) => isPhoneNumberValid(digitsFaToEn(value)), {
            message: "شماره وارد شده صحیح نمیباشد",
        }),
});
