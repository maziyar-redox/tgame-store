// Next.js will invalidate the cache when a
// request comes in, at most once every 1 hour seconds.
// Also this route use ISR rendering strategy and have webhooks for revalidating caching pattern
export const revalidate = 3600;

// Importing Main page items
import { AnimationWrapper } from "@/components/public/main/animation";
import { Categories } from "@/components/public/main/categories";
import { Favorite } from "@/components/public/main/favorite";
import { Gamer } from "@/components/public/main/gamer";
import { HeroSection } from "@/components/public/main/hero";
import { Offer } from "@/components/public/main/offer";
import { ProductCarousel } from "@/components/public/main/product-card";
import { Products } from "@/components/public/main/products";
import { Terms } from "@/components/public/main/terms";
// Importing main product mock
import { mainProducts } from "@/constants/mock";

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
