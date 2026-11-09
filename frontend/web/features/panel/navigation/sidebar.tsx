"use client";

import { SignOutIcon } from "@phosphor-icons/react";
import { cn } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/features/panel/navigation/logo";
import { Button } from "@/shared/components/ui/button";
import { Sheet, SheetContent } from "@/shared/components/ui/sheet";
import { sidebarLinks } from "@/shared/constants/sidebar";
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
                className="rtl:data-[side=right]:data-ending-style:translate-x-10 rtl:data-[side=right]:data-starting-style:translate-x-10 rounded-tl-4xl rounded-bl-4xl pt-6 pb-10 overflow-y-scroll scrollbar-thumb-transparent"
            >
                <div className="flex justify-center items-center mb-7">
                    <Logo />
                </div>
                {sidebarLinks.map((item) => {
                    const Icon = item.Icon;

                    const isActive = pathname === item.link;

                    return (
                        <Link
                            key={item.id}
                            href={item.link}
                            className={cn(
                                "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-right text-sm font-normal transition-colors",
                                pathname === item.link
                                    ? "bg-accent text-primary"
                                    : "hover:bg-accent text-slate-500 hover:text-primary",
                            )}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <Icon
                                size={20}
                                weight={isActive ? "fill" : "regular"}
                            />
                            <span className="flex items-center gap-3">
                                {item.text}
                            </span>
                        </Link>
                    );
                })}
                <Button
                    variant="empty"
                    size="empty"
                    className="items-center justify-start gap-3 rounded-xl px-3 py-3 text-xs font-bold text-rose-500 hover:bg-rose-50 flex"
                >
                    <SignOutIcon name="logout" size={20} />
                    خروج از حساب
                </Button>
            </SheetContent>
        </Sheet>
    );
}
