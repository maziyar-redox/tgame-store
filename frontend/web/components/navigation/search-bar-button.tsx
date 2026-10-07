"use client";

// Importing Icons
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
// Importing from gloabal ui components
import { Button } from "@/components/ui/button";

export function SearchBarButton() {
    return (
        <Button
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
        </Button>
    );
}
