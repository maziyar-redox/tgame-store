import type { Icon as IconType } from "@phosphor-icons/react";

type AboutPageValuesSectionProps = {
    Icon: IconType;
    iconName: string;
    title: string;
    description: string;
    shade: string;
};

type AboutPageStaticsProps = {
    sub: string;
    header: string;
};

export type { AboutPageStaticsProps, AboutPageValuesSectionProps };
