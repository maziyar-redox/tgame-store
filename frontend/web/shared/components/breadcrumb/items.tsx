"use client";

import Link from "next/link";

import {
    BreadcrumbItem,
    BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";

import type { BreadcrumbItemSectionProps } from "@/shared/types/breadcrumb";

export function BreadcrumbItemSection({
    items,
}: {
    items: BreadcrumbItemSectionProps[];
}) {
    return (
        <>
            <BreadcrumbItem>
                <Link href="/">خانه</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="size-3" />
            {items.map((items) => (
                <BreadcrumbItem key={items.link}>
                    <Link href={items.link}>{items.title}</Link>
                </BreadcrumbItem>
            ))}
        </>
    );
}
