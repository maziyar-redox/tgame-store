import { Logo } from "@/features/panel/navigation/logo";
import { NavigationButton } from "@/features/panel/navigation/navigation-button";
import { Sidebar } from "@/features/panel/navigation/sidebar";
import { UtilitySection } from "@/features/panel/navigation/utility-section";

export function Navigation() {
    return (
        <header className="sticky top-0 z-40 border-b border-secondary bg-background/90 backdrop-blur-xl shadow-black/10 shadow-2xl rounded-b-4xl">
            <div className="mx-auto flex h-17 w-[90%] px-4 py-6 sm:px-6 sm:py-9 lg:px-8 items-center gap-4 lg:h-20">
                <NavigationButton />
                <Logo />
                <Sidebar />
                <UtilitySection />
            </div>
        </header>
    );
}
