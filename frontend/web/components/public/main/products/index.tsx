"use client";

// Importing icons
import { CaretLeftIcon } from "@phosphor-icons/react";
// Importing nextjs utils
import Link from "next/link";
// Importing local ui components
import { ProductCarousel } from "@/components/public/main/products/product-carousel";

export function Products() {
    return (
        <section
            id="latest"
            className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
        >
            <div className="mb-6 flex items-end justify-between">
                <div>
                    <p className="mb-1 text-xs font-bold text-primary">
                        تازه از راه رسیده
                    </p>
                    <h2 className="text-xl font-black sm:text-2xl">
                        پرفروش ترین محصولات
                    </h2>
                </div>
                <Link
                    href="#"
                    className="hidden items-center gap-1 text-xs font-bold text-slate-500 hover:text-primary transition-all sm:flex"
                >
                    مشاهده همه
                    <CaretLeftIcon name="chevron" className="size-4" />
                </Link>
            </div>
            <ProductCarousel />
        </section>
    );
}
