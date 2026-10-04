// Importing icons
import {
    DesktopIcon,
    DeviceMobileSpeakerIcon,
    GameControllerIcon,
    HeadphonesIcon,
} from "@phosphor-icons/react";
// Import error typing
import type { NotFoundErrorProps } from "@/types/constants/errors";

// Creating Notfound constant data
const notFoundErrorItems: NotFoundErrorProps[] = [
    {
        id: 1,
        title: "موبایل و تبلت",
        desc: "همراه هر روز شما",
        link: "/",
        Icon: DeviceMobileSpeakerIcon,
    },
    {
        id: 2,
        title: "لپ تاپ و کامپیوتر",
        desc: "برای کار و خلاقیت",
        link: "/",
        Icon: DesktopIcon,
    },
    {
        id: 3,
        title: "لوازم جانبی",
        desc: "جزئیات یک تجربه بهتر",
        link: "/",
        Icon: HeadphonesIcon,
    },
    {
        id: 4,
        title: "بازی و کنسول",
        desc: "وقت یک ماجراجویی تازه",
        link: "/",
        Icon: GameControllerIcon,
    },
];

export { notFoundErrorItems };
