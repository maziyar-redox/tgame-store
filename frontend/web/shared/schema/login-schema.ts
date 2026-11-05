import { digitsFaToEn, isPhoneNumberValid } from "@persian-tools/persian-tools";

import * as z from "zod";

// User login schema in auth page
export const loginFormSchema = z.object({
    phone_number: z
        .string()
        .refine((value) => isPhoneNumberValid(digitsFaToEn(value)), {
            error: "شماره وارد شده صحیح نمیباشد",
        }),
});
