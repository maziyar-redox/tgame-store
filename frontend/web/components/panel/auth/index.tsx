"use client";

// Importing Icons
import { LockIcon } from "@phosphor-icons/react";
// Importing merging utils
import { cn } from "cn";
// Importing nextjs utils
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// Importing hooks
import { useIsMounted } from "usehooks-ts";
// Importing components from global ui
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AuthenticationLayoutComponent({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const isMounted = useIsMounted();

    const [data, setData] = useState<"login" | "register">(
        pathname === "/auth/login" ? "login" : "register",
    );
    useEffect(() => {
        if (isMounted())
            setData(pathname === "/auth/login" ? "login" : "register");
    }, [isMounted, pathname]);
    return (
        <main className="relative grid min-h-[calc(100vh-110px)] place-items-center overflow-hidden px-4 py-10">
            <div className="absolute -right-32 top-10 size-80 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="absolute -left-32 bottom-0 size-96 rounded-full bg-cyan-100/40 blur-3xl" />
            <Card className="relative w-full max-w-md rounded-[28px] border ring-0 border-white bg-white p-5 shadow-[0_25px_80px_rgba(8,55,125,.12)] sm:p-8">
                <CardContent>
                    <div className="text-center">
                        <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-primary shadow-lg shadow-blue-200">
                            <span className="size-5 rounded-md border-[3px] border-white" />
                        </span>
                        <h1 className="mt-4 text-2xl font-black text-brand-navy">
                            {pathname === "login"
                                ? "ورود به تکنو"
                                : "ساخت حساب کاربری"}
                        </h1>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                            {pathname === "login"
                                ? "برای مشاهده سفارش‌ها و مدیریت حساب وارد شوید"
                                : "با ثبت‌نام، تجربه خرید سریع‌تر و ساده‌تری داشته باشید"}
                        </p>
                    </div>
                    <Tabs
                        onValueChange={(value) => {
                            router.push(
                                value === "login"
                                    ? "/auth/login"
                                    : "/auth/register",
                            );
                        }}
                        defaultValue={data}
                        className="w-full mt-6 p-1"
                    >
                        <TabsList className="w-full group-data-horizontal/tabs:h-12 p-1">
                            <TabsTrigger
                                value="login"
                                className={cn(
                                    "rounded-lg py-2.5 text-xs font-bold transition text-muted-foreground data-active:bg-card data-active:text-primary data-active:shadow-sm",
                                )}
                            >
                                ورود
                            </TabsTrigger>
                            <TabsTrigger
                                value="register"
                                className={cn(
                                    "rounded-lg py-2.5 text-xs font-bold transition text-muted-foreground data-active:bg-card data-active:text-primary data-active:shadow-sm",
                                )}
                            >
                                ثبت نام
                            </TabsTrigger>
                        </TabsList>
                        {children}
                    </Tabs>
                    <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
                        <span className="h-px flex-1 bg-slate-100" />
                        ورود امن و سریع
                        <span className="h-px flex-1 bg-slate-100" />
                    </div>
                    <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-slate-400">
                        <LockIcon name="lock" className="size-3.5" />
                        اطلاعات شما نزد تی گیم محفوظ است
                    </p>
                </CardContent>
            </Card>
        </main>
    );
}
