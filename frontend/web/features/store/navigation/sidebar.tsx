"use client";

import { CaretDownIcon } from "@phosphor-icons/react";
import { cn } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/features/store/navigation/logo";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/shared/components/ui/collapsible";
import { Sheet, SheetContent } from "@/shared/components/ui/sheet";
import { categoryLinks, sidebarLinks } from "@/shared/constants/navigation";
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
                {categoryLinks.map((item) => {
                    const Icon = item.icon;

                    const isActive = pathname === item.href;

                    // Expandable navigation category
                    return (
                        <Collapsible
                            key={item.title}
                            defaultOpen={isActive}
                            className="group/collapsible"
                        >
                            <CollapsibleTrigger
                                className={cn(
                                    "flex w-full items-center justify-between rounded-xl px-3 py-3 text-right text-sm font-normal transition-colors",
                                    isActive
                                        ? "bg-accent text-primary"
                                        : "text-slate-500 hover:bg-accent hover:text-primary",
                                )}
                            >
                                <span className="flex items-center gap-3">
                                    <Icon
                                        size={20}
                                        weight={isActive ? "fill" : "regular"}
                                    />

                                    {item.title}
                                </span>

                                <CaretDownIcon
                                    size={16}
                                    className="transition-transform duration-200 group-data-panel-open/collapsible:rotate-180"
                                />
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                                <div className="mr-6 mt-1.5 flex flex-col gap-1 border-r border-border py-1 pr-4">
                                    {item.subcategories.map((child) => {
                                        const isChildActive =
                                            pathname === child.href;

                                        return (
                                            <Link
                                                key={child.title}
                                                href={child.href}
                                                onClick={() => setIsOpen(!open)}
                                                className={cn(
                                                    "rounded-lg px-3 py-2.5 text-xs font-medium transition-colors",
                                                    isChildActive
                                                        ? "bg-accent text-primary"
                                                        : "text-slate-500 hover:bg-accent hover:text-primary",
                                                )}
                                            >
                                                {child.title}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    );
                })}
            </SheetContent>
        </Sheet>
    );
}
