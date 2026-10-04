// Importing digits to fa function
import { digitsFaToEn } from "@persian-tools/persian-tools";
// Importing Zod
import * as z from "zod";

// User login schema
export const loginFormSchema = z.object({
    phone_number: z
        .string()
        .refine(
            (value) =>
                /^(?:\+98|0)?9\d{9}$/.test(
                    digitsFaToEn(value).replace(/\D/g, ""),
                ),
            { message: "شماره وارد شده صحیح نمیباشد" },
        ),
});
