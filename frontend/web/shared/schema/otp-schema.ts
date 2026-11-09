import { digitsFaToEn } from "@persian-tools/persian-tools";

import * as z from "zod";

// User otp schema for otp code verification
export const otpFormSchema = z.object({
    code: z
        .string()
        .refine(
            (value) => /^\d{6}$/.test(digitsFaToEn(value).replace(/\D/g, "")),
            { error: "کد وارد شده صحیح نمیباشد" },
        ),
});
