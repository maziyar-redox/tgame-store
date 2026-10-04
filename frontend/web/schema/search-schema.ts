// Importing Zod
import * as z from "zod";

// Search Schema on the navigation for searching among products
export const searchFormSchema = z.object({
    searchTerm: z
        .string()
        .min(4, "عبارت جستجو شده حداقل باید چهار کاراکتر باشد")
        .max(64, "عبارت جستجو شده حداکثر باید شصت و چهار کاراکتر باشد"),
});
