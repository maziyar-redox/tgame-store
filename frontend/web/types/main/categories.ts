import type { Icon } from "@phosphor-icons/react";

// Categories props for category section
interface MainCategoriesProps {
    id: number;
    title: string;
    link: string;
    color: string;
    Icon: Icon;
}

export type { MainCategoriesProps };
