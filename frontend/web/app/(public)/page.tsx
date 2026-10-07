// Importing Main page items
import { AnimationWrapper } from "@/components/public/main/animation";
import { Categories } from "@/components/public/main/categories";
import { Favorite } from "@/components/public/main/favorite";
import { Gamer } from "@/components/public/main/gamer";
import { HeroSection } from "@/components/public/main/hero";
import { Offer } from "@/components/public/main/offer";
import { Products } from "@/components/public/main/products";
import { Terms } from "@/components/public/main/terms";

export default function Root() {
    return (
        <>
            <AnimationWrapper>
                <HeroSection />
                <Categories />
            </AnimationWrapper>
            <AnimationWrapper>
                <Products />
            </AnimationWrapper>
            <AnimationWrapper>
                <Favorite />
            </AnimationWrapper>
            <AnimationWrapper>
                <Gamer />
            </AnimationWrapper>
            <AnimationWrapper>
                <Offer />
            </AnimationWrapper>
            <Terms />
        </>
    );
}
