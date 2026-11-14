"use client";

import { digitsEnToFa } from "@persian-tools/persian-tools";
import { BasketIcon, UserIcon } from "@phosphor-icons/react";
import { cn } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchBar } from "@/features/store/navigation/search-bar";
import { Button, buttonVariants } from "@/shared/components/ui/button";
import { useSession } from "@/shared/lib/auth/auth-client";

function UserButton({
    label,
    authorizedLocation,
    children,
}: {
    label: string;
    authorizedLocation: string;
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const { data: sesssion, isPending, error } = useSession();

    if (isPending && error) {
        return (
            <Button
                variant="icon"
                size="icon-2xl"
                disabled
                className={cn(
                    "relative",
                    pathname.includes(authorizedLocation)
                        ? "bg-accent [&_svg:not([class*='fill-'])]:fill-primary"
                        : "[&_svg:not([class*='fill-'])]:fill-slate-700",
                )}
                aria-label={label}
            >
                {children}
            </Button>
        );
    }

    return (
        <Link
            href={sesssion === null ? "/login" : authorizedLocation}
            className={cn(
                buttonVariants({ variant: "icon", size: "icon-2xl" }),
                "relative",
                pathname.includes(authorizedLocation)
                    ? "bg-accent [&_svg:not([class*='fill-'])]:fill-primary"
                    : "[&_svg:not([class*='fill-'])]:fill-slate-700",
            )}
            aria-label={label}
        >
            {children}
        </Link>
    );
}

export function UtilitySection() {
    return (
        <div className="mr-auto flex items-center gap-1 sm:gap-2">
            <SearchBar />
            <UserButton authorizedLocation="/panel" label="حساب کاربری">
                <UserIcon name="user" />
            </UserButton>
            <UserButton authorizedLocation="/card" label="سبد خرید">
                <BasketIcon name="bag" />
                <span className="absolute -inset-e-0.5 -top-1.5 grid size-5 place-items-center rounded-full bg-primary text-xs font-bold text-background ring-2 ring-background">
                    {digitsEnToFa(3)}
                </span>
            </UserButton>
        </div>
    );
}
