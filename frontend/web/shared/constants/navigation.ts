import {
    AppleLogoIcon,
    BriefcaseIcon,
    DeviceMobileIcon,
    DeviceTabletSpeakerIcon,
    FinnTheHumanIcon,
    GameControllerIcon,
    GraduationCapIcon,
    HeadphonesIcon,
    HouseIcon,
    JoystickIcon,
    LaptopIcon,
    MonitorIcon,
    PhoneIncomingIcon,
    ShieldCheckIcon,
    SwatchesIcon,
    TicketIcon,
    UsersThreeIcon,
    WatchIcon,
} from "@phosphor-icons/react";
import type { SidebarLinksProps } from "@/shared/types/constants/sidebar";
import type {
    StoreCategoriesProps,
    StoreNavigationLinksProps,
} from "@/shared/types/constants/store-navigation";

// Navigation types, Containing info about nav
const navigationLinks: StoreNavigationLinksProps[] = [
    {
        id: 1,
        text: "خانه",
        link: "/",
    },
    {
        id: 2,
        text: "درباره ما",
        link: "/about",
    },
    {
        id: 3,
        text: "تماس با ما",
        link: "/contact",
    },
    {
        id: 4,
        text: "پشتیبانی",
        link: "/support",
    },
];

const sidebarLinks: SidebarLinksProps[] = [
    {
        id: 1,
        text: "خانه",
        link: "/",
        Icon: HouseIcon,
    },
    {
        id: 2,
        text: "درباره ما",
        link: "/about",
        Icon: UsersThreeIcon,
    },
    {
        id: 3,
        text: "تماس با ما",
        link: "/contact",
        Icon: PhoneIncomingIcon,
    },
    {
        id: 4,
        text: "پشتیبانی",
        link: "/support",
        Icon: TicketIcon,
    },
];

const categoryLinks: StoreCategoriesProps[] = [
    {
        title: "گیمینگ",
        href: "/category/gaming",
        image: "https://tgame-test.s3.ir-central1.arvanstorage.ir/MAIN.jpg",
        icon: GameControllerIcon,
        subcategories: [
            {
                title: "کنسول بازی",
                href: "/category/consoles",
                icon: JoystickIcon,
            },
            {
                title: "بازی‌های ویدیویی",
                href: "/category/games",
                icon: FinnTheHumanIcon,
            },
            {
                title: "دسته بازی",
                href: "/category/controllers",
                icon: GameControllerIcon,
            },
            {
                title: "لوازم جانبی گیمینگ",
                href: "/category/gaming-accessories",
                icon: HeadphonesIcon,
            },
        ],
    },
    {
        title: "موبایل",
        href: "/category/mobile",
        image: "https://tgame-test.s3.ir-central1.arvanstorage.ir/3.jpg",
        icon: DeviceMobileIcon,
        subcategories: [
            {
                title: "گوشی موبایل",
                href: "/category/phones",
                icon: DeviceMobileIcon,
            },
            {
                title: "تبلت",
                href: "/category/tablets",
                icon: DeviceTabletSpeakerIcon,
            },
            {
                title: "قاب و کاور",
                href: "/category/cases",
                icon: ShieldCheckIcon,
            },
            {
                title: "شارژر و کابل",
                href: "/category/chargers",
                icon: SwatchesIcon,
            },
        ],
    },
    {
        title: "ساعت هوشمند",
        href: "/category/smartwatch",
        image: "https://tgame-test.s3.ir-central1.arvanstorage.ir/MAIN.jpg",
        icon: WatchIcon,
        subcategories: [
            {
                title: "اپل واچ",
                href: "/category/apple-watch",
                icon: AppleLogoIcon,
            },
            {
                title: "ساعت سامسونگ",
                href: "/category/samsung-watch",
                icon: WatchIcon,
            },
            {
                title: "بند ساعت",
                href: "/category/watch-bands",
                icon: WatchIcon,
            },
            {
                title: "لوازم جانبی ساعت",
                href: "/category/watch-accessories",
                icon: SwatchesIcon,
            },
        ],
    },
    {
        title: "لپ‌تاپ",
        href: "/category/laptop",
        image: "https://tgame-test.s3.ir-central1.arvanstorage.ir/3.jpg",
        icon: LaptopIcon,
        subcategories: [
            {
                title: "لپ‌تاپ گیمینگ",
                href: "/category/gaming-laptops",
                icon: GameControllerIcon,
            },
            {
                title: "لپ‌تاپ دانشجویی",
                href: "/category/student-laptops",
                icon: GraduationCapIcon,
            },
            {
                title: "لپ‌تاپ اداری",
                href: "/category/office-laptops",
                icon: BriefcaseIcon,
            },
            {
                title: "لوازم جانبی لپ‌تاپ",
                href: "/category/laptop-accessories",
                icon: MonitorIcon,
            },
        ],
    },
];

export { categoryLinks, navigationLinks, sidebarLinks };
