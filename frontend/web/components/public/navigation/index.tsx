// biome-ignore-all lint: This file contains generated code

"use client";

// Importing Icons
import { ListIcon, XIcon } from "@phosphor-icons/react";
// Importing Local Ui Components
import { Logo } from "@/components/public/navigation/logo";
import {
    NavigationButtonsLg,
    NavigationButtonsSm,
} from "@/components/public/navigation/menu-buttons";
import { UtilitySection } from "@/components/public/navigation/utility-section";
// Importing From Global Ui Components
import { Button } from "@/components/ui/button";
// Importing Store
import { useNavigationStore } from "@/provider/navigation-store-provider";

export function Navigation() {
    const { isOpen, setIsOpen } = useNavigationStore((state) => state);

    return (
        <header className="sticky top-0 z-40 border-b border-secondary bg-background/90 backdrop-blur-xl shadow-black/10 shadow-2xl rounded-b-4xl">
            <div className="mx-auto flex h-17 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
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
                <NavigationButtonsSm />
                <UtilitySection />
            </div>
        </header>
    );
}
