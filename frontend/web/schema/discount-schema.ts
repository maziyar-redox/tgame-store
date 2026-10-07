// Importing Zod
import * as z from "zod";

export const discountFormSchema = z.object({
    code: z
        .string()
        .regex(/^T-[A-Za-z0-9]{2}-[A-Za-z0-9]{2}$/, {
            message: "کد وارد شده صحیح نمیباشد",
        })
        .optional(),
});
