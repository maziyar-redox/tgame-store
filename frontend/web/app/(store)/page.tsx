// Next.js will invalidate the cache when a
// request comes in, at most once every 1 hour seconds.
// Also this route use ISR rendering strategy and have webhooks for revalidating caching pattern
export const revalidate = 3600;

import { AnimationWrapper } from "@/features/store/landing/animation";
import { Categories } from "@/features/store/landing/categories";
import { Favorites } from "@/features/store/landing/favorites";
import { Gamers } from "@/features/store/landing/gamers";
import { HeroSection } from "@/features/store/landing/hero";
import { Offer } from "@/features/store/landing/offer";
import { ProductCarousel } from "@/features/store/landing/product-card";
import { ProductItem } from "@/features/store/landing/product-card/product-item";
import { SkeletonItem } from "@/features/store/landing/product-card/skeleton-item";
import { Products } from "@/features/store/landing/products";
import { Terms } from "@/features/store/landing/terms";

import { mainProducts } from "@/shared/constants/mock";

export default async function LandingPage() {
    return (
        <>
            <AnimationWrapper>
                <HeroSection />
                <Categories />
            </AnimationWrapper>
            <AnimationWrapper>
                <Products>
                    <ProductCarousel>
                        <SkeletonItem />
                    </ProductCarousel>
                </Products>
            </AnimationWrapper>
            <AnimationWrapper>
                <Favorites>
                    <ProductCarousel>
                        <ProductItem products={mainProducts} />
                    </ProductCarousel>
                </Favorites>
            </AnimationWrapper>
            <AnimationWrapper>
                <Gamers>
                    <ProductCarousel>
                        <ProductItem products={mainProducts} />
                    </ProductCarousel>
                </Gamers>
            </AnimationWrapper>
            <AnimationWrapper>
                <Offer />
            </AnimationWrapper>
            <Terms />
        </>
    );
}
