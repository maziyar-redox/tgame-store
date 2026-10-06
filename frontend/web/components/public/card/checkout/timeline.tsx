"use client";

// Importing icons typings from phosphor icons
import {
    CheckIcon,
    CreditCardIcon,
    type Icon,
    MapPinIcon,
} from "@phosphor-icons/react";

const timelineStep: {
    id: number;
    title: string;
    Icon: Icon;
}[] = [
    {
        id: 1,
        title: "سبد خرید",
        Icon: CheckIcon,
    },
    {
        id: 2,
        title: "اطلاعات سفارش",
        Icon: MapPinIcon,
    },
    {
        id: 3,
        title: "پرداخت",
        Icon: CreditCardIcon,
    },
];

export function Timeline() {
    return (
        <>
            {timelineStep.map((items) => (
                <div key={items.id} className="contents">
                    <div className="flex shrink-0 flex-col items-center gap-1.5">
                        <span
                            className={`grid size-8 place-items-center rounded-full ${items.id < 3 ? "bg-primary text-white" : "bg-blue-50 text-primary"}`}
                        >
                            <items.Icon className="size-4" />
                        </span>
                        <span className="text-[9px] font-bold text-slate-500 sm:text-[10px]">
                            {items.title}
                        </span>
                    </div>
                    {items.id < 3 && (
                        <span className="mb-4 h-px flex-1 bg-blue-200" />
                    )}
                </div>
            ))}
        </>
    );
}
