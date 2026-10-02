// Importing Zod
import * as z from "zod";

export const loginFormSchema = z.object({
    phone_number: z
        .string()
        .refine(
            (value) => /^(?:\+98|0)?9\d{9}$/.test(value.replace(/\D/g, "")),
            { message: "شماره وارد شده صحیح نمیباشد" },
        ),
});
