// Importing local typing
import type { NavigationLinksProps } from "@/types/constants/navigation";

// Navigation types, Containing info about nav
const navigationLinks: NavigationLinksProps[] = [
    {
        id: 1,
        text: "خانه",
        link: "/",
    },
    {
        id: 2,
        text: "محصولات",
        link: "/categories",
    },
    {
        id: 3,
        text: "درباره ما",
        link: "/about",
    },
    {
        id: 4,
        text: "تماس با ما",
        link: "/contact",
    },
    {
        id: 5,
        text: "پشتیبانی",
        link: "/support",
    },
];

export { navigationLinks };
