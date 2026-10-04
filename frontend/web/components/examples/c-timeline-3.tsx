import { CheckIcon } from "@phosphor-icons/react";
import {
    Timeline,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from "@/components/reui/timeline";

const steps = [
    { id: 1, icon: "check", label: "سبد خرید" },
    { id: 2, icon: "location", label: "اطلاعات ارسال" },
    { id: 3, icon: "credit", label: "پرداخت" },
];

export function CheckoutTimeline() {
    return (
        <Timeline
            defaultValue={2}
            orientation="horizontal"
            className="mt-5 w-full max-w-lg"
        >
            {steps.map((step) => (
                <TimelineItem
                    key={step.id}
                    step={step.id}
                    className="relative flex-1"
                >
                    <TimelineHeader className="relative flex flex-col items-center gap-1.5">
                        <TimelineIndicator
                            className="
                                relative z-10
                                size-8 shrink-0
                                rounded-full
                                border-0
                                bg-blue-50
                                text-[#0866ff]
                                data-[completed]:bg-[#0866ff]
                                data-[completed]:text-white
                            "
                        >
                            <CheckIcon className="size-4" />
                        </TimelineIndicator>

                        <TimelineTitle
                            className="
                                text-[9px]
                                font-bold
                                leading-none
                                text-slate-500
                                sm:text-[10px]
                            "
                        >
                            {step.label}
                        </TimelineTitle>

                        <TimelineSeparator
                            className="
                                absolute
                                start-1/2
                                top-4
                                z-0
                                h-px
                                w-full
                                -translate-y-1/2
                                bg-blue-200
                            "
                        />
                    </TimelineHeader>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
