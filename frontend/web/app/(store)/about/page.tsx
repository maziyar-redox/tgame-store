// Next.js will invalidate the cache when a
// request comes in, at most once every 1 hour seconds.
// Also this route use ISR rendering strategy and have webhooks for revalidating caching pattern

import { AboutPageWrapper } from "@/features/store/about";
import { MainSection } from "@/features/store/about/main";
import { StaticsSection } from "@/features/store/about/statics";
import { TrustSection } from "@/features/store/about/trust";
import { ValuesSection } from "@/features/store/about/values";

import { BreadcrumbMainSection } from "@/shared/components/breadcrumb";
import { BreadcrumbItemSection } from "@/shared/components/breadcrumb/items";

import type { BreadcrumbItemSectionProps } from "@/shared/types/breadcrumb";

const aboutPageBreadcrumb: BreadcrumbItemSectionProps[] = [
    {
        title: "درباره ما",
        link: "/about",
    },
];

type Prefetch = "auto" | "partial" | "force-disabled";
type InstantConfig =
    | true
    | false
    | {
          level?: "warning";
      };
type EnsureStatic = "auto" | "shell" | "prefetch" | "navigation" | false;

export const maxDuration: number = 5;
export const prefetch: Prefetch = "force-disabled";
export const instant: InstantConfig = true;
export const ensureStatic: EnsureStatic = "navigation";

export default async function AboutPage(_props: PageProps<"/about">) {
    return (
        <AboutPageWrapper>
            <section className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 sm:pt-9 lg:px-8 lg:pb-16">
                <BreadcrumbMainSection>
                    <BreadcrumbItemSection items={aboutPageBreadcrumb} />
                </BreadcrumbMainSection>
                <MainSection />
            </section>
            <StaticsSection />
            <ValuesSection />
            <TrustSection />
        </AboutPageWrapper>
    );
}
