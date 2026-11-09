// Next.js will invalidate the cache when a
// request comes in, at most once every 1 hour seconds.
// Also this route use ISR rendering strategy and have webhooks for revalidating caching pattern
export const revalidate = 3600;

import { CategoryLayoutWrapper } from "@/features/store/category";
import { AsideFilterSection } from "@/features/store/category/aside-filter";
import { SearchSection } from "@/features/store/category/search";

export default async function CategoryPage() {
    return (
        <CategoryLayoutWrapper>
            <SearchSection />
            <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
                <aside className="hidden h-fit rounded-2xl border border-slate-100 bg-white p-5 lg:block">
                    <AsideFilterSection />
                </aside>
            </div>
        </CategoryLayoutWrapper>
    );
}
