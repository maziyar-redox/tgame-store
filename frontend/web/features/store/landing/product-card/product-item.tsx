"use client";

import { ProductCard } from "@/features/store/landing/product-card/product-card";

import { CarouselItem } from "@/shared/components/ui/carousel";
import type { MainProductProps } from "@/shared/types/features/landing/product";

export function ProductItem({ products }: { products: MainProductProps[] }) {
    return (
        <>
            {products.map((item) => (
                <CarouselItem
                    key={item.id}
                    className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                    <ProductCard
                        id={item.id}
                        title={item.title}
                        model={item.model}
                        image={item.image}
                        price={item.price}
                        discount={item.discount}
                        isAvailable={item.isAvailable}
                        isFavorite={item.isFavorite}
                    />
                </CarouselItem>
            ))}
        </>
    );
}
