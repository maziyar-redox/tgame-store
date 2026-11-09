import * as z from "zod";

// Category schema for filtering items in category page
export const categoryFormSchema = z.object({
    term: z
        .string()
        .min(4, "عبارت جستجو باید حداقل چهار کاراکتر باشد")
        .max(128, "عبارت جستجو باید حداکثر صد و بیست و هشت کاراکتر باشد"),
    sort: z.enum(["POPULAR", "NEW", "CHEAP", "HIGH"]),
    priceRange: z.tuple([
        z.number().min(100_000, {
            error: "قیمت نباید کمتر از صد هزارتومان باشد",
        }),
        z.number().max(1_000_000_000, {
            error: "قیمت نباید بیشتر از یک میلیارد باشد",
        }),
    ]),
    brand: z.array(z.number()),
    quantity: z.boolean(),
});
