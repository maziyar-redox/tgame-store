"use client";

import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/shared/components/ui/navigation-menu";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { categoryLinks } from "@/shared/constants/navigation";

function ImageComponent({
    ImageSrc,
    ImageAlt,
}: {
    ImageSrc: string;
    ImageAlt: string;
}) {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    return (
        <div className="relative mb-3 aspect-4/3 overflow-hidden rounded-xl">
            <Image
                quality={75}
                src={ImageSrc}
                alt={ImageAlt}
                fill
                sizes="220px"
                className={cn(
                    "object-cover transition-transform duration-500 group-hover:scale-105",
                    isLoaded ? "block" : "hidden",
                )}
                loading="eager"
                onLoad={() => setIsLoaded(true)}
                onError={() => setIsLoaded(false)}
            />
            <Skeleton
                className={cn(
                    "object-cover size-55",
                    isLoaded ? "hidden" : "block",
                )}
            />
        </div>
    );
}

export function CategoryButton() {
    const pathname = usePathname();
    return (
        <NavigationMenu dir="rtl" className="mr-5 hidden lg:block">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <Link
                            href="/category"
                            className={cn(
                                "transition-all",
                                pathname.includes("/category")
                                    ? "text-primary"
                                    : "hover:text-primary",
                            )}
                        >
                            محصولات
                        </Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid w-[min(95vw,1000px)] grid-cols-4 gap-5 p-5">
                            {categoryLinks.map((category) => {
                                const CategoryIcon = category.icon;

                                return (
                                    <div key={category.href}>
                                        <Link
                                            href={category.href}
                                            className="group block"
                                        >
                                            {/* Category image */}
                                            <ImageComponent
                                                ImageSrc={category.image}
                                                ImageAlt={category.title}
                                            />
                                            <div className="flex items-center gap-2">
                                                <CategoryIcon
                                                    size={22}
                                                    weight="duotone"
                                                    className="text-primary"
                                                />
                                                <h3 className="text-base font-bold">
                                                    {category.title}
                                                </h3>
                                            </div>
                                        </Link>
                                        <div className="w-full rounded-full h-px bg-muted-foreground opacity-15 mt-3" />
                                        <ul className="mt-3 space-y-5">
                                            {category.subcategories.map(
                                                (item) => {
                                                    const SubcategoryIcon =
                                                        item.icon;
                                                    return (
                                                        <li key={item.href}>
                                                            <Link
                                                                href={item.href}
                                                                className="group flex items-center gap-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                                                            >
                                                                <SubcategoryIcon
                                                                    size={18}
                                                                    weight="regular"
                                                                    className="shrink-0"
                                                                />
                                                                <span>
                                                                    {item.title}
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    );
                                                },
                                            )}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
