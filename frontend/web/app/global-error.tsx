"use client";

import { cn } from "cn";
import { Vazirmatn } from "next/font/google";

import { DirectionProvider } from "@/shared/components/ui/direction";

import "@/app/globals.css";
import { ChatCenteredTextIcon } from "@phosphor-icons/react";
import { InternalErrorWrapper } from "@/shared/components/internal-error";
import { InternalErrorItems } from "@/shared/components/internal-error/items";

const vazirmatn = Vazirmatn({
    subsets: ["arabic"],
    variable: "--font-vazirmatn",
});

export default function GlobalError({
    error,
    retry,
}: {
    error: unknown;
    retry: () => void;
}) {
    const digest =
        error instanceof Error
            ? (error as Error & { digest?: string }).digest
            : undefined;

    return (
        <html
            lang="fa"
            dir="rtl"
            className={cn("h-full", "antialiased", vazirmatn.className)}
            suppressHydrationWarning
        >
            <body className="min-h-screen flex flex-col bg-surface-soft">
                <DirectionProvider direction="rtl">
                    <InternalErrorWrapper retryFunc={retry}>
                        <InternalErrorItems />
                        <p className="mt-9 flex items-center justify-center gap-2 text-center text-xs leading-6 text-slate-400">
                            <ChatCenteredTextIcon
                                name="message"
                                className="size-4"
                            />{" "}
                            کد پیگیری خطا: {digest}
                        </p>
                    </InternalErrorWrapper>
                </DirectionProvider>
            </body>
        </html>
    );
}
