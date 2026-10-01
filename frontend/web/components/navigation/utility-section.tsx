"use client";

// Importing From Global Ui Components
import { buttonVariants} from "@/components/ui/button";

// Importing Ui from local Ui Components
import { SearchBar } from "@/components/navigation/search-bar";

// Importing Icons
import { BasketIcon, UserIcon } from "@phosphor-icons/react";

// Merging library
import { cn } from "cn";

// Importing nextjs utilities
import Link from "next/link";
import { usePathname } from "next/navigation";

export function UtilitySection() {
    const pathname = usePathname();
    return (
        <div className="mr-auto flex items-center gap-1 sm:gap-2">
            <SearchBar />
            <Link href="/panel" className={cn(
                pathname === "/panel" ? "bg-[#eff6ff] [&_svg:not([class*='fill-'])]:fill-[#0866ff]" : "[&_svg:not([class*='fill-'])]:fill-slate-700",
                buttonVariants({ variant: "icon", size: "icon-2xl" })
            )} aria-label="حساب کاربری">
                <UserIcon name="user"/>
            </Link>
            <Link href="/card" className={cn(
                "relative",
                pathname === "/card" ? "bg-[#eff6ff] [&_svg:not([class*='fill-'])]:fill-[#0866ff]" : "[&_svg:not([class*='fill-'])]:fill-slate-700",
                buttonVariants({ variant: "icon", size: "icon-2xl" })
            )} aria-label="سبد خرید">
                <BasketIcon name="bag" />
                <span className="absolute -inset-e-0.5 -top-1.5 grid size-5 place-items-center rounded-full bg-[#0866ff] text-xs font-bold text-[#ffffff] ring-2 ring-[#ffffff]">
                    ۳
                </span>
            </Link>
        </div>
    );
};