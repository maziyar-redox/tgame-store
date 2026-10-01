import { Categories } from "@/components/public/categories";
import { HeroSection } from "@/components/public/hero";
import { Offer } from "@/components/public/offer";
import { Products } from "@/components/public/products";

export default function Root() {
    return (
        <>
            <HeroSection />
            <Categories />
            <Products />
            <Offer />
        </>
    );
}
