"use client";

import Link from "next/link";
// Importing from global ui component
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbSection() {
    return (
        <Breadcrumb className="mb-5 text-[11px] text-slate-400">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <Link href="/">خانه</Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="size-3" />
                <BreadcrumbItem>
                    <span>محصولات</span>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="size-3" />
                <BreadcrumbItem>
                    <Link href="/category/digital">کالای دیجیتال</Link>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
}
