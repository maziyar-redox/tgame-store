"use client";

// Importing components from local ui
import { BreadcrumbSection } from "@/components/public/category/breadcrumb";
import { IntroductionSection } from "@/components/public/category/introduction";

export function CategoryPageComponent() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-9 lg:px-8">
            <BreadcrumbSection />
            <IntroductionSection />
        </section>
    );
}
