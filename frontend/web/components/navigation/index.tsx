"use client";

// Importing Local Ui Components
import { Logo } from "@/components/navigation/logo";
import { NavigationButtonsLg, NavigationBUttonsSm } from "@/components/navigation/menu-buttons";
import { UtilitySection } from "@/components/navigation/utility-section";

// Importing From Global Ui Components
import { Button } from "@/components/ui/button";

// Importing Store
import { useNavigationStore } from "@/provider/navigation-store-provider";

// Importing Icons
import { ListIcon, XIcon } from "@phosphor-icons/react";

export function Navigation() {
    const {isOpen, setIsOpen} = useNavigationStore((state) => state);
    return (
        <header className="sticky top-0 z-40 border-b border-[#f1f5f9] bg-[#ffffff]/90 backdrop-blur-xl">
            <div className="mx-auto flex h-17 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
                <Button
                    variant="icon"
                    size="icon-lg"
                    className="lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="باز کردن منو"
                >
                    {
                        isOpen
                        ?
                        <XIcon />
                        :
                        <ListIcon />
                    }
                </Button>
                <Logo />
                <NavigationButtonsLg />
                <NavigationBUttonsSm />
                <UtilitySection />
            </div>
        </header>
    );
};