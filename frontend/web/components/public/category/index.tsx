"use client";

// Importing zod form resolver
import { zodResolver } from "@hookform/resolvers/zod";
// Importing hooks form react hook form
import { FormProvider, useForm } from "react-hook-form";
// Importing zod
import type * as z from "zod";
// Importing components from local ui
import { BreadcrumbSection } from "@/components/public/category/breadcrumb";
import { IntroductionSection } from "@/components/public/category/introduction";
import { SearchSection } from "@/components/public/category/search";
// Importing schema for validation
import { categoryFormSchema } from "@/schema/category-schema";

export function CategoryPageComponent() {
    const categoryForm = useForm<z.infer<typeof categoryFormSchema>>({
        resolver: zodResolver(categoryFormSchema),
        defaultValues: {
            term: "",
            sort: "POPULAR",
            priceMin: 0,
            priceMax: 1_000_000_000,
            brand: "",
            quantity: true,
        },
    });

    function onSubmit(data: z.infer<typeof categoryFormSchema>) {
        console.log(data);
    }

    return (
        <FormProvider {...categoryForm}>
            <form
                onSubmit={categoryForm.handleSubmit(onSubmit)}
                className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-9 lg:px-8"
            >
                <BreadcrumbSection />
                <IntroductionSection />
                <SearchSection />
            </form>
        </FormProvider>
    );
}
