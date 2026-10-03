"use client";

// Importing local ui components
import { LeftSection } from "@/components/public/main/hero/left-section";
import { RightSection } from "@/components/public/main/hero/right-section";

export function HeroSection() {
    return (
        <section
            id="hero"
            className="mx-auto max-w-7xl px-4 pb-8 pt-5 sm:px-6 sm:pt-8 lg:px-8 lg:pb-12"
        >
            <div className="relative min-h-122.5 overflow-hidden rounded-[28px] bg-brand-surface px-6 py-9 sm:min-h-110 sm:px-10 lg:min-h-125 lg:px-16 lg:py-14">
                <div className="absolute -left-24 -top-24 size-80 rounded-full bg-blue-300/25 blur-3xl" />
                <div className="absolute bottom-0 right-1/3 size-56 rounded-full bg-white/60 blur-3xl" />
                <LeftSection />
                <RightSection />
            </div>
        </section>
    );
}
