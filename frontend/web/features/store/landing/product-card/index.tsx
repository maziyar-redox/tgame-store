"use client";

import { Carousel, CarouselContent } from "@/shared/components/ui/carousel";

export function ProductCarousel({ children }: { children: React.ReactNode }) {
    return (
        <Carousel
            dir="rtl"
            opts={{
                direction: "rtl",
                loop: true,
                align: "start",
            }}
        >
            <CarouselContent className="pt-3 pb-14">{children}</CarouselContent>
        </Carousel>
    );
}
