"use client";

import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { currencyFormmater, discountCalculator } from "@/shared/lib/currency";

type SearchItemProps = {
    title: string;
    desc: string;
    img: string;
    link: string;
    price: number;
    discount: number;
};

export function SearchItem({
    title,
    desc,
    img,
    link,
    price,
    discount,
}: SearchItemProps) {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    return (
        <Link
            href={link}
            className="w-full flex flex-row-reverse items-center justify-end border border-border rounded-md gap-x-4"
        >
            <div className="flex flex-col items-start justify-between h-full py-1.5">
                <h1 className="font-semibold text-base text-foreground">
                    {title}
                </h1>
                <p className="font-medium text-xs text-muted-foreground">
                    {desc}
                </p>
                <div className="flex flex-col items-start justify-center">
                    <span
                        className={cn(
                            "text-muted-foreground font-normal text-xs line-through",
                            discount === 0 ? "hidden" : "block",
                        )}
                    >
                        {currencyFormmater(discountCalculator(price, discount))}
                    </span>
                    <div className="flex flex-row justify-center items-center gap-x-1">
                        <h1 className="text-primary text-base font-semibold">
                            {currencyFormmater(price)}{" "}
                            <span className="text-muted-foreground text-xs">
                                /
                            </span>
                        </h1>
                        <span className="text-xs font-medium text-muted-foreground">
                            تومان
                        </span>
                    </div>
                </div>
            </div>
            <Image
                src={img}
                width={100}
                height={100}
                className={cn(
                    "rounded-md aspect-square object-center object-cover",
                    isLoaded ? "block" : "hidden",
                )}
                alt={title}
                loading="eager"
                quality={50}
                onLoad={() => setIsLoaded(true)}
            />
            <Skeleton
                className={cn(
                    "rounded-md aspect-square object-center object-cover size-25",
                    isLoaded ? "hidden" : "block",
                )}
            />
        </Link>
    );
}
