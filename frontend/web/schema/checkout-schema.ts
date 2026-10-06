// Importing digits to fa function

// Importing cities util
import { searchCities, searchProvinces } from "@code-plate/iran-cities";
import { digitsFaToEn } from "@persian-tools/persian-tools";
// Importing Zod
import * as z from "zod";

// Checkout schema
export const checkoutFormSchema = z
    .object({
        terms: z.boolean().refine((val) => val === true, {
            message: "شما باید با شرایط و قوانین موافقت کنید",
        }),
        full_name: z
            .string()
            .min(4, "نام کامل باید حداقل چهار کاراکتر باشد")
            .max(64, "نام کامل حداکثر باید شصت و چهار کاراکتر باشد"),
        phone_number: z
            .string()
            .refine(
                (value) =>
                    /^(?:\+98|0)?9\d{9}$/.test(
                        digitsFaToEn(value).replace(/\D/g, ""),
                    ),
                { message: "شماره وارد شده صحیح نمیباشد" },
            ),
        city: z
            .string()
            .min(2, "نام شهر کامل باید حداقل دو کاراکتر باشد")
            .max(32, "نام شهر کامل حداکثر باید سی و دو کاراکتر باشد")
            .refine(
                (value) => {
                    const foundedCities = searchCities(value);

                    if (foundedCities.length === 0) {
                        return false;
                    }

                    if (foundedCities[0].fa && foundedCities[0].fa !== value) {
                        return false;
                    }

                    return true;
                },
                { message: "شهر وارد شده صحیح نمیباشد" },
            ),
        province: z
            .string()
            .min(2, "نام استان کامل باید حداقل دو کاراکتر باشد")
            .max(32, "نام استان کامل حداکثر باید سی و دو کاراکتر باشد")
            .refine(
                (value) => {
                    const foundedProvinces = searchProvinces(value);

                    if (foundedProvinces.length === 0) {
                        return false;
                    }

                    if (
                        foundedProvinces[0].fa &&
                        foundedProvinces[0].fa !== value
                    ) {
                        return false;
                    }

                    return true;
                },
                { message: "استان وارد شده صحیح نمیباشد" },
            ),
        address: z
            .string()
            .min(16, "نام کامل باید حداقل شانزده کاراکتر باشد")
            .max(256, "نام کامل حداکثر باید دویست و پنجاه و شش کاراکتر باشد"),
        postal_code: z
            .string()
            .refine(
                (value) =>
                    /^[1-9][0-9]{9}$/.test(
                        digitsFaToEn(value).replace(/\D/g, ""),
                    ),
                { message: "کد پستی وارد شده صحیح نمیباشد" },
            ),
        sending_method: z.enum(["EXPRESS", "POST"]),
        payment_method: z.enum(["ONLINE", "SNAPPAY", "DIGIPAY", "WALLET"]),
    })
    .superRefine((data, ctx) => {
        const { province, city } = data;

        const foundedProvinces = searchProvinces(province)[0];

        const foundedProvinceCity = foundedProvinces.cities.filter(
            (Items) => Items.fa === city,
        );

        if (foundedProvinceCity.length === 0) {
            ctx.addIssue({
                code: "custom",
                path: ["city"],
                message: "این شهر در استان مورد نظر وجود ندارد",
            });
        }
    });
