import type { NavigationLinksProps } from "@/types/constants/navigation";

// Navigation types, Containing info about nav
export const navigationLinks: NavigationLinksProps[] = [
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
        link: "/aboutus",
    },
    {
        id: 4,
        text: "تماس با ما",
        link: "/contactus",
    },
    {
        id: 5,
        text: "پشتیبانی",
        link: "/support",
    },
];
