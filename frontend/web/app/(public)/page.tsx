// Importing Main page items
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
            <HeroSection />
            <Categories />
            <Products />
            <Favorite />
            <Gamer />
            <Offer />
            <Terms />
        </>
    );
}
