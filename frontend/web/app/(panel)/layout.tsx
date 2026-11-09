import { Navigation } from "@/features/panel/navigation";

import { Footer } from "@/shared/components/footer";
import { NavigationStoreProvider } from "@/shared/provider/navigation-provider";

export default async function PanelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavigationStoreProvider>
                <Navigation />
            </NavigationStoreProvider>
            <div>{children}</div>
            <Footer />
        </>
    );
}
