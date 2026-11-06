"use client";

import { cn } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/features/store/navigation/logo";
import { Sheet, SheetContent } from "@/shared/components/ui/sheet";
import { navigationLinks } from "@/shared/constants/navigation";
import { useNavigationStore } from "@/shared/provider/navigation-provider";

export function Sidebar() {
    const { isOpen, setIsOpen } = useNavigationStore((state) => state);
    const pathname = usePathname();

    return (
        <Sheet open={isOpen} onOpenChange={(open: boolean) => setIsOpen(open)}>
            <SheetContent
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
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {item.text}
                    </Link>
                ))}
            </SheetContent>
        </Sheet>
    );
}
