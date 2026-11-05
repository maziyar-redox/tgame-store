import { cn } from "cn";
import { Vazirmatn } from "next/font/google";

import { DirectionProvider } from "@/shared/components/ui/direction";
import { Toaster } from "@/shared/components/ui/toast";

import "@/app/globals.css";

const vazirmatn = Vazirmatn({
    subsets: ["arabic"],
    variable: "--font-vazirmatn",
});

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="fa"
            dir="rtl"
            className={cn("h-full", "antialiased", vazirmatn.className)}
            suppressHydrationWarning
        >
            <body className="min-h-screen flex flex-col bg-surface-soft">
                <DirectionProvider direction="rtl">
                    {children}
                </DirectionProvider>
                <Toaster className={cn("antialiased", vazirmatn.className)} />
            </body>
        </html>
    );
}
