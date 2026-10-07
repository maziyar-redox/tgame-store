// Importing Main page items
import { Categories } from "@/components/public/main/categories";
import { HeroSection } from "@/components/public/main/hero";
import { Offer } from "@/components/public/main/offer";
import { Products } from "@/components/public/main/products";
import { Terms } from "@/components/public/main/terms";

export default function Root() {
    return (
        <>
            <HeroSection />
            <Categories />
            <Products />
            <Offer />
            <Terms />
        </>
    );
}
