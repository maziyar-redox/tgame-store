"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react";

import { Button } from "@/shared/components/ui/button";
import { useNavigationStore } from "@/shared/provider/navigation-provider";

export function NavigationButton() {
    const { isOpen, setIsOpen } = useNavigationStore((state) => state);

    return (
        <Button
            variant="icon"
            size="icon-lg"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="باز کردن منو"
        >
            {isOpen ? <XIcon /> : <ListIcon />}
        </Button>
    );
}
