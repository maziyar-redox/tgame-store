// IMPORT: Vazirmatn font which applies on entire web application
import { Vazirmatn } from "next/font/google";
import { Navigation } from "@/features/store/navigation";
// IMPORT: Importing banner from components
import { Banner } from "@/shared/components/banner";
// IMPORT: Importing navigation from components
import { Footer } from "@/shared/components/footer";
// Importing Direction provider from global ui component
import { DirectionProvider } from "@/shared/components/ui/direction";
import { Toaster } from "@/shared/components/ui/toast";

// IMPORT: Global style which applies on entire application
import "@/app/globals.css";

// Tailwind css merge
import { cn } from "@/shared/lib/utils";
// Importing Provider
import { NavigationStoreProvider } from "@/shared/provider/navigation-provider";

const vazirmatn = Vazirmatn({
    subsets: ["arabic"],
    variable: "--font-vazirmatn",
});

export default function RootLayout({
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
                    <Banner />
                    <NavigationStoreProvider>
                        <Navigation />
                    </NavigationStoreProvider>
                    {children}
                    <Footer />
                </DirectionProvider>
                <Toaster className={cn("antialiased", vazirmatn.className)} />
            </body>
        </html>
    );
}
