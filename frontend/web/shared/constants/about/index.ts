import {
    CubeIcon,
    HeadsetIcon,
    ShieldCheckIcon,
} from "@phosphor-icons/react/ssr";
import type {
    AboutPageStaticsProps,
    AboutPageValuesSectionProps,
} from "@/shared/types/features/about";

const AboutPageValuesSection: AboutPageValuesSectionProps[] = [
    {
        Icon: ShieldCheckIcon,
        iconName: "shield",
        title: "اعتماد، قبل از خرید",
        description:
            "اصالت کالا، قیمت‌گذاری شفاف و ضمانت بازگشت، پایهٔ هر تجربه در تکنو است.",
        shade: "bg-blue-50 text-primary",
    },
    {
        Icon: HeadsetIcon,
        iconName: "headpohne",
        title: "همراهی واقعی",
        description:
            "پشتیبان‌های متخصص ما، پیش و پس از خرید برای یک انتخاب مطمئن کنار شما هستند.",
        shade: "bg-violet-50 text-violet-600",
    },
    {
        Icon: CubeIcon,
        iconName: "box",
        title: "ساده و سریع",
        description:
            "از پیدا کردن محصول تا تحویل سفارش، همه‌چیز را کوتاه، روشن و بی‌دردسر ساخته‌ایم.",
        shade: "bg-emerald-50 text-emerald-600",
    },
];

const AboutPageStaticsSection: AboutPageStaticsProps[] = [
    {
        header: "+50 هزار",
        sub: "مشتری همراه",
    },
    {
        header: "+12 هزار",
        sub: "کالای ارسال‌شده",
    },
    {
        header: "+250",
        sub: "برند معتبر",
    },
    {
        header: "4.8 از 5",
        sub: "رضایت مشتریان",
    },
];

export { AboutPageStaticsSection, AboutPageValuesSection };
