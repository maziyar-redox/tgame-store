// Next.js will invalidate the cache when a
// request comes in, at most once every 1 hour seconds.

import { ProductPageWrapper } from "@/features/store/product";
import { ProductMetaData } from "@/features/store/product/product-metadata";
import { ProductOverView } from "@/features/store/product/product-overview";
import { ProductSections } from "@/features/store/product/product-sections";

// Also this route use ISR rendering strategy and have webhooks for revalidating caching pattern
export const revalidate = 3600;

export default async function ProductPage() {
    return (
        <ProductPageWrapper>
            <ProductOverView />
            <ProductSections />
            <ProductMetaData />
        </ProductPageWrapper>
    );
}
