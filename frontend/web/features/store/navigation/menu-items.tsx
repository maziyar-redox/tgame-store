"use client";

import { cn } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationLinks } from "@/shared/constants/navigation";

export function MenuItems() {
    const pathname = usePathname();
    return (
        <nav className="mr-5 hidden items-center gap-7 text-sm font-semibold text-[#45556c] lg:flex">
            {navigationLinks.map((item) => (
                <Link
                    key={item.id}
                    href={item.link}
                    className={cn(
                        "transition-all",
                        pathname === item.link
                            ? "text-primary"
                            : "hover:text-primary",
                    )}
                >
                    {item.text}
                </Link>
            ))}
        </nav>
    );
}
