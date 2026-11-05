"use client";

import { cn } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type RefObject, useEffect, useRef, useState } from "react";

import { Logo } from "@/features/store/navigation/logo";
import { Sheet, SheetContent } from "@/shared/components/ui/sheet";
import { navigationLinks } from "@/shared/constants/navigation";
import { useNavigationStore } from "@/shared/provider/navigation-provider";

// Button Ref typing
type btnRef = RefObject<HTMLDivElement | null>;

export function Sidebar() {
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
    }, [isOpen, setIsOpen, pathname, path]);

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
