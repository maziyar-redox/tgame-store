"use client";

// Importing NextJs Utilities
import Link from "next/link";

export function Logo() {
    return (
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="خانه تی مود">
            <span className="grid size-9 place-items-center rounded-xl bg-[#0866ff] text-[#ffffff] shadow-lg shadow-blue-200">
                <span className="h-4 w-4 rounded-sm border-[3px] border-[#ffffff]" />
            </span>
            <span className="text-xl font-black tracking-tight">
                تی مود
                <span className="text-[#0866ff]">
                    .
                </span>
            </span>
        </Link>
    );
};