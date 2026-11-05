// biome-ignore-all lint: This file contains generated code

"use client";

// Merging library
import { cn } from "cn";
// Importing nextjs utilities
import Link from "next/link";
import { usePathname } from "next/navigation";
// React utilities
import { RefObject, useEffect, useRef, useState } from "react";
// Importing from global ui lib
import { Sheet, SheetContent } from "@/components/ui/sheet";
// Importing Constant Data
import { navigationLinks } from "@/constants/navigation";
// Importing Store
import { useNavigationStore } from "@/provider/navigation-store-provider";
import { Logo } from "./logo";

// Button Ref typing
type btnRef = RefObject<HTMLDivElement | null>;

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

export function NavigationButtonsSm() {
    const { isOpen, setIsOpen } = useNavigationStore((state) => state);
    const navRef = useRef<HTMLElement>(null);
    const pathname = usePathname();
    const [path, setPath] = useState<string>(pathname ?? "");

    useEffect(() => {
        if (pathname !== path && isOpen) {
            setIsOpen(false);
            setPath(pathname);
            return;
        }

        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent): void => {
            // If click is outside the nav, close it
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        // Add listener on next tick to avoid catching the opening click
        const timeoutId = setTimeout(() => {
            document.addEventListener("mousedown", handleClickOutside);
        }, 0);

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, setIsOpen, pathname]);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent
                ref={navRef as btnRef}
                dir="rtl"
                showCloseButton={false}
                side="right"
                data-lang="fa"
                className="rtl:data-[side=right]:data-ending-style:translate-x-10 rtl:data-[side=right]:data-starting-style:translate-x-10 rounded-tl-4xl rounded-bl-4xl pt-6"
            >
                <div className="flex justify-center items-center mb-7">
                    <Logo />
                </div>
                {navigationLinks.map((item) => (
                    <Link
                        key={item.id}
                        href={item.link}
                        className={cn(
                            "rounded-xl px-3 py-3 text-right transition-all",
                            pathname === item.link
                                ? "bg-accent text-primary"
                                : "hover:bg-accent text-slate-500 hover:text-primary",
                        )}
                    >
                        {item.text}
                    </Link>
                ))}
            </SheetContent>
        </Sheet>
    );
}
