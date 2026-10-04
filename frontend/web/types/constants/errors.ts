// Importing Icon Type
import type { Icon } from "@phosphor-icons/react";

// Error props typing for 404 not found page items
type NotFoundErrorProps = {
    id: number;
    title: string;
    desc: string;
    link: string;
    Icon: Icon;
};

// Exporting
export type { NotFoundErrorProps };
