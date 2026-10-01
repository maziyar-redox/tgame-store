"use client";

// Merging library
import { cn } from "cn";
// Importing nextjs utilities
import Link from "next/link";
import { usePathname } from "next/navigation";
// Importing Constant Data
import { navigationLinks } from "@/constants/navigation";
// Importing Store
import { useNavigationStore } from "@/provider/navigation-store-provider";

export function NavigationButtonsLg() {
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

export function NavigationBUttonsSm() {
    const { isOpen } = useNavigationStore((state) => state);
    const pathname = usePathname();

    return (
        <nav
            className={cn(
                "transition-all transition-discrete ease-in-out duration-200 grid gap-1 rounded-b-xl border-t border-secondary bg-background px-4 py-3 text-sm font-semibold lg:hidden fixed left-5 right-5 top-14 shadow-lg",
                isOpen ? "fixed opacity-100" : "hidden opacity-0",
            )}
        >
            {navigationLinks.map((item) => (
                <Link
                    key={item.id}
                    href={item.link}
                    className={cn(
                        "rounded-xl px-3 py-3 text-right transition-all",
                        pathname === item.link
                            ? "bg-accent text-primary"
                            : "hover:bg-accent hover:text-primary",
                    )}
                >
                    {item.text}
                </Link>
            ))}
        </nav>
    );
}
