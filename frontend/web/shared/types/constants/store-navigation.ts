import type { Icon } from "@phosphor-icons/react";

// Navigation prop type
type StoreNavigationLinksProps = {
    id: number;
    text: string;
    link: string;
};

type StoreCategoriesProps = {
    title: string;
    href: string;
    image: string;
    icon: Icon;
    subcategories: {
        title: string;
        icon: Icon;
        href: string;
    }[];
};

// Exporting
export type { StoreCategoriesProps, StoreNavigationLinksProps };
