import { BreadcrumbSection } from "@/features/store/product/breadcrumb";

export function ProductPageWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-9 lg:px-8">
            <BreadcrumbSection />
            {children}
        </main>
    );
}
