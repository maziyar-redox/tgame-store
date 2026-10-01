"use client";

// Importing Icons
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
/* // Importing tw merge
import { cn } from "cn";
// Importing hooks
import { useMediaQuery } from "usehooks-ts";
// Importing From Global Ui Components
import { buttonVariants } from "@/components/ui/button"; */

// TODO: fix this component
export function SearchBarButton() {
    /* const matches = useMediaQuery("(max-width: 768px)");
    
    if (matches) {
        return (
            <button
                type="button"
                className={cn(
                    "[&_svg:not([class*='fill-'])]:fill-slate-700",
                    buttonVariants({ variant: "icon", size: "icon-2xl" }),
                )}
            >
                <MagnifyingGlassIcon
                    name="search"
                />
            </button>
        );
    }; */

    return (
        <button
            type="button"
            className="sm:flex items-center gap-2 rounded-xl transition-all border border-slate-200 hover:border-slate-400 bg-white px-3 py-2.5 text-sm hidden lg:w-72"
        >
            <MagnifyingGlassIcon
                name="search"
                className="size-4 text-slate-400"
            />
            <input
                className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-slate-400"
                placeholder="جستجوی محصول..."
            />
        </button>
    );
}
