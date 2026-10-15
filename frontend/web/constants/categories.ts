// Importing typing for categories

// IMporting icons
import {
    DeviceMobileSpeakerIcon,
    GameControllerIcon,
    HeadphonesIcon,
    LaptopIcon,
    WatchIcon,
} from "@phosphor-icons/react";
import type { MainCategoriesProps } from "@/types/main/categories";

const categories: MainCategoriesProps[] = [
    {
        id: 1,
        title: "موبایل",
        Icon: DeviceMobileSpeakerIcon,
        color: "bg-blue-50 text-blue-600",
        link: "/",
    },
    {
        id: 2,
        title: "لپ‌تاپ",
        Icon: LaptopIcon,
        color: "bg-violet-50 text-violet-600",
        link: "/",
    },
    {
        id: 3,
        title: "گیمینگ",
        Icon: GameControllerIcon,
        color: "bg-cyan-50 text-cyan-600",
        link: "/",
    },
    {
        id: 4,
        title: "هدفون",
        Icon: HeadphonesIcon,
        color: "bg-rose-50 text-rose-500",
        link: "/",
    },
    {
        id: 5,
        title: "ساعت هوشمند",
        Icon: WatchIcon,
        color: "bg-amber-50 text-amber-600",
        link: "/",
    },
];

export { categories };
