"use client";

// Importing local ui components
import { ProductItems } from "@/components/public/main/gamer/product-items";
// Importing carousel from global ui
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
// Import typing for main page product
import type { MainProductProps } from "@/types/main/product";

export function ProductCarousel({
    products,
}: {
    products: MainProductProps[];
}) {
    return (
        <Carousel
            dir="rtl"
            opts={{
                direction: "rtl",
                loop: true,
                align: "start",
            }}
        >
            <CarouselContent>
                {products.map((category) => (
                    <CarouselItem
                        key={category.id}
                        className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                    >
                        <ProductItems
                            id={category.id}
                            title={category.title}
                            model={category.model}
                            image={category.image}
                            price={category.price}
                            discount={category.discount}
                            isAvailable={category.isAvailable}
                            isFavorite={category.isFavorite}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
