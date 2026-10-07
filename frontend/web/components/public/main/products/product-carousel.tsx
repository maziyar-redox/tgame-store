"use client";

// Importing local ui components
import { ProductItems } from "@/components/public/main/products/product-items";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export function ProductCarousel() {
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
                {Array.from({ length: 10 }, (_, i) => ({ id: i + 1 })).map(
                    (category) => (
                        <CarouselItem
                            key={category.id}
                            className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                        >
                            <ProductItems />
                        </CarouselItem>
                    ),
                )}
            </CarouselContent>
        </Carousel>
    );
}
