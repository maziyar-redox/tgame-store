import { cn } from "cn";

// Typing For banner
type BnnerProps = {
    text?: string;
};

// Banner for public layout website
export function Banner({
    text = "ارسال رایگان برای سفارش‌های بالای ۳ میلیون تومان"
}: BnnerProps) {
    return (
        <section className={cn(
            "bg-primary px-4 py-2 text-center font-medium text-background text-xs sm:text-sm",
            text === undefined ? "hidden" : "block"
        )}>
            {text}
        </section>
    );
};