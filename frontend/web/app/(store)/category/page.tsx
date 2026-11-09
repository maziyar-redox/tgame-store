// Next.js will invalidate the cache when a
// request comes in, at most once every 1 hour seconds.
// Also this route use ISR rendering strategy and have webhooks for revalidating caching pattern
export const revalidate = 3600;

import { CategoryPageComponent } from "@/features/store/category";

export default async function CategoryPage() {
    return <CategoryPageComponent />;
}
