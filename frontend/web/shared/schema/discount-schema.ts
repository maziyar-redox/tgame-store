import { digitsFaToEn } from "@persian-tools/persian-tools";

import * as z from "zod";

// Discount schema for applying discount code
export const discountFormSchema = z.object({
    code: z
        .string()
        .refine(
            (value) =>
                /^T-[A-Za-z0-9]{2}-[A-Za-z0-9]{2}$/.test(
                    digitsFaToEn(value).replace(/\D/g, ""),
                ),
            {
                error: "کد وارد شده صحیح نمیباشد",
            },
        )
        .optional(),
});
