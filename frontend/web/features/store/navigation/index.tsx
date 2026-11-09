import { CategoryButton } from "@/features/store/navigation/category-button";
import { Logo } from "@/features/store/navigation/logo";
import { MenuItems } from "@/features/store/navigation/menu-items";
import { NavigationButton } from "@/features/store/navigation/navigation-button";
import { Sidebar } from "@/features/store/navigation/sidebar";
import { UtilitySection } from "@/features/store/navigation/utility-section";

export function Navigation() {
    return (
        <header className="sticky top-0 z-40 border-b border-secondary bg-background/90 backdrop-blur-xl shadow-black/10 shadow-2xl rounded-b-4xl">
            <div className="mx-auto flex h-17 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
                <NavigationButton />
                <Logo />
                <Sidebar />
                <CategoryButton />
                <MenuItems />
                <UtilitySection />
            </div>
        </header>
    );
}
