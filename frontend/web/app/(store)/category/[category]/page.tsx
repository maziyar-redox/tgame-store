// Next.js will invalidate the cache when a
// request comes in, at most once every 1 hour seconds.
// Also this route use ISR rendering strategy and have webhooks for revalidating caching pattern
export const revalidate = 3600;

import { CategoryLayoutWrapper } from "@/features/store/category";
import { AsideFilterSection } from "@/features/store/category/aside-filter";
import { Count } from "@/features/store/category/count";
import { PaginationContainer } from "@/features/store/category/pagination";
import { ProductCard } from "@/features/store/category/product-card";
import { SearchSection } from "@/features/store/category/search";
// import { SearchState } from "@/features/store/category/search-state";

export default async function CategorySlugPage({
    params,
}: {
    params: Promise<{ category: string }>;
}) {
    const { category } = await params;
    console.log(category);
    return (
        <CategoryLayoutWrapper>
            <SearchSection />
            <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
                <aside className="hidden h-fit rounded-2xl border border-slate-100 bg-white p-5 lg:block">
                    <AsideFilterSection />
                </aside>
                <div>
                    <Count />
                    {/* <SearchState /> */}
                    <ProductCard />
                    <PaginationContainer />
                </div>
            </div>
        </CategoryLayoutWrapper>
    );
}
