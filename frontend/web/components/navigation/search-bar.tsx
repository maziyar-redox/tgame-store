"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react";
// Importing From Global Ui Components
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export function SearchBar() {
    return (
        <Dialog>
            <DialogTrigger
                render={
                    <button
                        type="button"
                        className={`sm:flex items-center gap-2 rounded-xl transition-all border border-slate-200 hover:border-slate-400 bg-white px-3 py-2.5 text-sm hidden lg:w-72`}
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
                }
            />
            <DialogContent dir="rtl" data-lang="fa" className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>جستجو</DialogTitle>
                    <DialogDescription>جستجو</DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
