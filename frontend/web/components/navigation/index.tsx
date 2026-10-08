// biome-ignore-all lint: This file contains generated code

"use client";

// Importing Icons
import { ListIcon, XIcon } from "@phosphor-icons/react";
// Importing nextjs utils
import { usePathname } from "next/navigation";
// React utilities
import { type RefObject, useEffect, useRef, useState } from "react";
// Importing Local Ui Components
import { Logo } from "@/components/navigation/logo";
import {
    NavigationBUttonsSm,
    NavigationButtonsLg,
} from "@/components/navigation/menu-buttons";
import { UtilitySection } from "@/components/navigation/utility-section";
// Importing From Global Ui Components
import { Button } from "@/components/ui/button";
// Importing Store
import { useNavigationStore } from "@/provider/navigation-store-provider";

// Button Ref typing
type btnRef = RefObject<HTMLDivElement | null>;

export function Navigation() {
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
        <header className="sticky top-0 z-40 border-b border-secondary bg-background/90 backdrop-blur-xl shadow-black/10 shadow-2xl rounded-b-4xl">
            <div
                className="mx-auto flex h-17 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:h-20 lg:px-8"
                ref={navRef as btnRef}
            >
                <Button
                    variant="icon"
                    size="icon-lg"
                    className="lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="باز کردن منو"
                >
                    {isOpen ? <XIcon /> : <ListIcon />}
                </Button>
                <Logo />
                <NavigationButtonsLg />
                <NavigationBUttonsSm />
                <UtilitySection />
            </div>
        </header>
    );
}
