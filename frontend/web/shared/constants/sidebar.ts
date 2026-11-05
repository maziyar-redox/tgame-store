import {
    ChatTextIcon,
    CubeIcon,
    HeadphonesIcon,
    HeartIcon,
    PencilSimpleLineIcon,
    ShieldCheckIcon,
    UserIcon,
} from "@phosphor-icons/react";

import type { SidebarLinksProps } from "@/shared/types/constants/sidebar";

// Sidebar types, Containing info about nav
const sidebarLinks: SidebarLinksProps[] = [
    {
        id: 1,
        text: "داشبورد",
        link: "/panel",
        Icon: UserIcon,
    },
    {
        id: 2,
        text: "اطلاعات حساب",
        link: "/panel/account",
        Icon: PencilSimpleLineIcon,
    },
    {
        id: 3,
        text: "سفارش های من",
        link: "/panel/orders",
        Icon: CubeIcon,
    },
    {
        id: 4,
        text: "علاقه مندی های من",
        link: "/panel/favorites",
        Icon: HeartIcon,
    },
    {
        id: 5,
        text: "لغو و ضمانت",
        link: "/panel/warranty",
        Icon: ShieldCheckIcon,
    },
    {
        id: 6,
        text: "پشتیبانی",
        link: "/panel/tickets",
        Icon: HeadphonesIcon,
    },
    {
        id: 7,
        text: "سبد خرید",
        link: "/panel/card",
        Icon: HeadphonesIcon,
    },
    {
        id: 8,
        text: "دیدگاه های من",
        link: "/panel/comments",
        Icon: ChatTextIcon,
    },
];

export { sidebarLinks };
