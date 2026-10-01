"use client";

// Importing icons
import { CaretLeftIcon } from "@phosphor-icons/react";
// Importing nextjs utils
import Link from "next/link";
// Importing local ui
import { CategoryItems } from "@/components/public/categories/category-items";

export function Categories() {
    return (
        <section
            id="categories"
            className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10"
        >
            <div className="mb-6 flex items-end justify-between">
                <div>
                    <p className="mb-1 text-xs font-bold text-primary">
                        انتخاب سریع
                    </p>
                    <h2 className="text-xl font-black sm:text-2xl">
                        دسته‌بندی‌های محبوب
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
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
                {Array.from({ length: 5 }, (_, i) => ({ id: i + 1 })).map(
                    (category) => (
                        <CategoryItems key={category.id} />
                    ),
                )}
            </div>
        </section>
    );
}
