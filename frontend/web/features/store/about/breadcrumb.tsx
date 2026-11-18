"use client";

import Link from "next/link";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";

export function BreadcrumbSection() {
    return (
        <Breadcrumb className="mb-5 text-[11px] text-slate-400">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <Link href="/">خانه</Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="size-3" />
                <BreadcrumbItem>
                    <span>درباره ما</span>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
}
