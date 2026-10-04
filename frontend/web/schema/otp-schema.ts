// Importing digits to fa function
import { digitsFaToEn } from "@persian-tools/persian-tools";
// Importing Zod
import * as z from "zod";

// User otp schema
export const otpFormSchema = z.object({
    code: z
        .string()
        .refine(
            (value) => /^\d{6}$/.test(digitsFaToEn(value).replace(/\D/g, "")),
            { message: "کد وارد شده صحیح نمیباشد" },
        ),
});
