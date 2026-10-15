"use client";

// Importing NextJs Utilities
import Link from "next/link";

export function Logo() {
    return (
        <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
            aria-label="خانه تی گیم"
        >
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-background shadow-lg shadow-blue-200">
                <span className="h-4 w-4 rounded-sm border-[3px] border-background" />
            </span>
            <span className="text-xl font-black tracking-tight">
                تی گیم
                <span className="text-primary">.</span>
            </span>
        </Link>
    );
}
