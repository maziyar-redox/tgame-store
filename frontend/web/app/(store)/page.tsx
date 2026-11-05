// Next.js will invalidate the cache when a
// request comes in, at most once every 1 hour seconds.
// Also this route use ISR rendering strategy and have webhooks for revalidating caching pattern
export const revalidate = 3600;

// Importing Main page items
import { AnimationWrapper } from "@/features/store/landing/animation";
import { Categories } from "@/features/store/landing/categories";
import { Favorite } from "@/features/store/landing/favorite";
import { Gamer } from "@/features/store/landing/gamer";
import { HeroSection } from "@/features/store/landing/hero";
import { Offer } from "@/features/store/landing/offer";
import { ProductCarousel } from "@/features/store/landing/product-card";
import { Products } from "@/features/store/landing/products";
import { Terms } from "@/features/store/landing/terms";
// Importing main product mock
import { mainProducts } from "@/shared/constants/mock";

export default async function Root() {
    return (
        <>
            <AnimationWrapper>
                <HeroSection />
                <Categories />
            </AnimationWrapper>
            <AnimationWrapper>
                <Products>
                    <ProductCarousel products={mainProducts} />
                </Products>
            </AnimationWrapper>
            <AnimationWrapper>
                <Favorite>
                    <ProductCarousel products={mainProducts} />
                </Favorite>
            </AnimationWrapper>
            <AnimationWrapper>
                <Gamer>
                    <ProductCarousel products={mainProducts} />
                </Gamer>
            </AnimationWrapper>
            <AnimationWrapper>
                <Offer />
            </AnimationWrapper>
            <Terms />
        </>
    );
}
