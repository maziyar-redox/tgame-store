// Importing converting tools
import { digitsFaToEn } from "@persian-tools/persian-tools";
// Importing Zod
import * as z from "zod";

export const discountFormSchema = z.object({
    code: z
        .string()
        .refine(
            (value) =>
                /^T-[A-Za-z0-9]{2}-[A-Za-z0-9]{2}$/.test(
                    digitsFaToEn(value).replace(/\D/g, ""),
                ),
            {
                message: "کد وارد شده صحیح نمیباشد",
            },
        )
        .optional(),
});
