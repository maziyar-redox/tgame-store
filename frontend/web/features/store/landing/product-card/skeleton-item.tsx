"use client";

import { nanoid } from "nanoid";

import { SkeletonCard } from "@/features/store/landing/product-card/skeleton-card";
import { CarouselItem } from "@/shared/components/ui/carousel";

export function SkeletonItem() {
    const randomId = nanoid(10);

    return (
        <>
            {Array.from({ length: 10 }).map(() => (
                <CarouselItem
                    key={randomId}
                    className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                    <SkeletonCard />
                </CarouselItem>
            ))}
        </>
    );
}
