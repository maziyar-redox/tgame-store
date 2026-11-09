"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import type * as z from "zod";
import { BreadcrumbSection } from "@/features/store/category/breadcrumb";
import { IntroductionSection } from "@/features/store/category/introduction";
import { Button } from "@/shared/components/ui/button";
import { categoryFormSchema } from "@/shared/schema/category-schema";

export function CategoryLayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const categoryForm = useForm<z.infer<typeof categoryFormSchema>>({
        resolver: zodResolver(categoryFormSchema),
        defaultValues: {
            term: "",
            sort: "POPULAR",
            priceRange: [100_000, 1_000_000_000],
            brand: [],
            quantity: true,
        },
    });

    function onSubmit(data: z.infer<typeof categoryFormSchema>) {
        console.log(data);
    }

    return (
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-9 lg:px-8">
            <BreadcrumbSection />
            <IntroductionSection />
            <FormProvider {...categoryForm}>
                <form
                    onSubmit={categoryForm.handleSubmit(onSubmit)}
                    id="category-form"
                >
                    <Button type="submit" className="sr-only">
                        اعمال فیلترها
                    </Button>
                    {children}
                </form>
            </FormProvider>
        </div>
    );
}
