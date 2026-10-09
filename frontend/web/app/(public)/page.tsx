// Next.js will invalidate the cache when a
// request comes in, at most once every 1 hour seconds.
// Also this route use ISR rendering strategy and have webhooks for revalidating caching pattern
export const revalidate = 3600;

// Importing Main page items
import { AnimationWrapper } from "@/components/public/main/animation";
import { Categories } from "@/components/public/main/categories";
import { Favorite } from "@/components/public/main/favorite";
import { ProductCarousel as FavoriteSection } from "@/components/public/main/favorite/product-carousel";
import { Gamer } from "@/components/public/main/gamer";
import { ProductCarousel as GamerSection } from "@/components/public/main/gamer/product-carousel";
import { HeroSection } from "@/components/public/main/hero";
import { Offer } from "@/components/public/main/offer";
import { Products } from "@/components/public/main/products";
// Importing local ui components
import { ProductCarousel as MostSalesSection } from "@/components/public/main/products/product-carousel";
import { Terms } from "@/components/public/main/terms";

// Importing env file
import { env } from "@/schema/env-schema";
import type { MainProductProps } from "@/types/main/product";
// Importing typing for mock data
import type { ProductMockProps } from "@/types/mock/product";

export default async function Root() {
    const products: ProductMockProps = await fetch(
        `${env.BASE_API_URL}/api/product`,
    ).then((res) => res.json());
    return (
        <>
            <AnimationWrapper>
                <HeroSection />
                <Categories />
            </AnimationWrapper>
            <AnimationWrapper>
                <Products>
                    <MostSalesSection
                        products={
                            products.products as unknown as MainProductProps[]
                        }
                    />
                </Products>
            </AnimationWrapper>
            <AnimationWrapper>
                <Favorite>
                    <FavoriteSection
                        products={
                            products.products as unknown as MainProductProps[]
                        }
                    />
                </Favorite>
            </AnimationWrapper>
            <AnimationWrapper>
                <Gamer>
                    <GamerSection
                        products={
                            products.products as unknown as MainProductProps[]
                        }
                    />
                </Gamer>
            </AnimationWrapper>
            <AnimationWrapper>
                <Offer />
            </AnimationWrapper>
            <Terms />
        </>
    );
}
