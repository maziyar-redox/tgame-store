"use client";

import { digitsEnToFa } from "@persian-tools/persian-tools";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/shared/components/ui/pagination";

export function PaginationContainer() {
    return (
        <Pagination dir="rtl" className="mt-8">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        className="size-9 place-items-center rounded-xl border border-slate-200 disabled:opacity-40 [&>span]:hidden pl-1.5 hover:bg-primary hover:text-white hover:border-none"
                        href="#"
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        className="size-9 bg-white border border-slate-200"
                        href="#"
                    >
                        {digitsEnToFa(1)}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        className="size-9 bg-primary text-white hover:bg-primary hover:text-white"
                        href="#"
                        isActive
                    >
                        {digitsEnToFa(2)}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        className="size-9 bg-white border border-slate-200"
                        href="#"
                    >
                        {digitsEnToFa(3)}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        className="size-9 bg-white border border-slate-200"
                        href="#"
                    >
                        {digitsEnToFa(8)}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        className="size-9 bg-white border border-slate-200"
                        href="#"
                    >
                        {digitsEnToFa(9)}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        className="size-9 place-items-center rounded-xl border border-slate-200 disabled:opacity-40 [&>span]:hidden pr-1.5 hover:bg-primary hover:text-white hover:border-none"
                        href="#"
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
