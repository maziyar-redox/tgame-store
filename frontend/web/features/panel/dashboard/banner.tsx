"use client";

import { cn } from "cn";
import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { useSession } from "@/shared/lib/auth/auth-client";
import { formatTime } from "@/shared/lib/time";

export function Banner() {
    const { data: session, isPending, error } = useSession();

    const [lastLoginTime, setLastLoginTime] = useState<Date>(new Date());

    useEffect(() => {
        if (!error && !isPending && session) {
            setLastLoginTime(session.user.last_login);
        }

        return () => {};
    }, [session, isPending, error]);

    return (
        <div className="rounded-3xl bg-brand-navy p-6 text-white sm:flex sm:items-center sm:justify-between sm:p-8">
            <div>
                <p className="text-xs text-blue-200">سلام، خوش آمدید</p>
                {isPending && !error ? (
                    <>
                        <Skeleton className="h-4 w-32 mt-4" />
                        <Skeleton className="h-2.5 w-32 mt-4" />
                    </>
                ) : (
                    <>
                        <h1 className="mt-2 text-2xl font-black">
                            {session?.user.name}
                        </h1>
                        <p className="mt-2 text-xs text-blue-100/60">
                            آخرین ورود: امروز، ساعت {formatTime(lastLoginTime)}
                        </p>
                    </>
                )}
            </div>
            <Link
                href="/panel/account"
                className={cn(
                    buttonVariants({ variant: "empty", size: "empty" }),
                    "mt-5 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-bold ring-1 ring-white/20 sm:mt-0",
                )}
            >
                ویرایش اطلاعات
            </Link>
        </div>
    );
}
