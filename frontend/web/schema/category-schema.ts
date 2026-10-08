// Importing Zod
import * as z from "zod";

export const categoryFormSchema = z.object({
    term: z
        .string()
        .min(4, "عبارت جستجو باید حداقل چهار کاراکتر باشد")
        .max(128, "عبارت جستجو باید حداکثر صد و بیست و هشت کاراکتر باشد"),
    sort: z.enum(["POPULAR", "NEW", "CHEAP", "HIGH"]),
    priceMin: z.number(),
    priceMax: z.number(),
    brand: z.string(),
    quantity: z.boolean(),
});
