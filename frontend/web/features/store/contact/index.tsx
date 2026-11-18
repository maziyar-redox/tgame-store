"use client";

import { BreadcrumbSection } from "@/features/store/contact/breadcrumb";
import { Main } from "@/features/store/contact/main";
import { Ways } from "./ways";

export function ContactPageWrapper() {
    return (
        <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pt-9 lg:px-8">
            <BreadcrumbSection />
            <Main />
            <Ways />
        </main>
    );
}
