import {
    digitsFaToEn,
    isPhoneNumberValid,
    verifyCardNumber,
    verifyIranianNationalId,
} from "@persian-tools/persian-tools";

import * as z from "zod";

// Account schema for user registration
export const accountFormSchema = z.object({
    avatar: z
        .file()
        .max(2 * 1024 * 1024, "حجم عکس آپلود شده باید حداکثر دو مگابایت باشد")
        .mime(["image/jpeg", "image/png", "image/webp"], {
            error: "تصویر باید با فرمت های JPEG یا PNG یا webp باشد",
        })
        .optional(),
    first_name: z
        .string()
        .min(4, "نام باید حداقل چهار کاراکتر باشد")
        .max(64, "نام حداکثر باید شصت و چهار کاراکتر باشد")
        .optional(),
    last_name: z
        .string()
        .min(4, "نام خانوداگی باید حداقل چهار کاراکتر باشد")
        .max(64, "نام خانوداگی حداکثر باید شصت و چهار کاراکتر باشد")
        .optional(),
    phone_number: z
        .string()
        .refine((value) => isPhoneNumberValid(digitsFaToEn(value)), {
            error: "شماره وارد شده صحیح نمیباشد",
        })
        .optional(),
    email: z
        .email({
            error: "آدرس ایمیل باید معتبر باشد",
        })
        .optional(),
    national_code: z
        .string()
        .refine((value) => verifyIranianNationalId(digitsFaToEn(value)), {
            error: "شماره ملی باید معتبر باشد",
        })
        .optional(),
    bank_number: z
        .string()
        .refine((value) => verifyCardNumber(parseInt(value, 10)), {
            error: "شماره کارت نا معتبر میباشد",
        })
        .optional(),
});
