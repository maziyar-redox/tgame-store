import { BreadcrumbSection } from "@/features/store/about/breadcrumb";
import { Statics } from "@/features/store/about/statics";
import { Trust } from "@/features/store/about/trust";
import { Values } from "@/features/store/about/values";

export function AboutPagegWrapper({
    children,
}: {
    readonly children: React.ReactNode;
}) {
    return (
        <main>
            <section className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 sm:pt-9 lg:px-8 lg:pb-16">
                <BreadcrumbSection />
                {children}
            </section>
            <Statics />
            <Values />
            <Trust />
        </main>
    );
}
