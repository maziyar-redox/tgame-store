"use state";

// Importing icon
import { PlusIcon, SpinnerIcon } from "@phosphor-icons/react";
// Importing nextjs utils
import Link from "next/link";
// Importing local ui components
import { SearchItem } from "@/components/global/navigation/search-item";

type SearchingStateProps = {
    state: "PENDING" | "NOT_FOUND" | "NOT_STARTED" | "FOUNDED";
};

export function SearchingState({ state }: SearchingStateProps) {
    if (state === "PENDING") {
        return (
            <div className="flex justify-center items-center w-full gap-x-2">
                <SpinnerIcon className="size-5 transition-all animate-spin" />
                <h1 className="font-semibold text-[#45556c] text-sm">
                    درحال جستجو
                </h1>
            </div>
        );
    }

    if (state === "NOT_FOUND") {
        return (
            <div className="flex justify-center items-center w-full gap-x-2">
                <h1 className="font-semibold text-[#45556c] text-sm">
                    محصولی یافت نشد!
                </h1>
            </div>
        );
    }

    if (state === "NOT_STARTED") {
        return <div className="hidden" />;
    }

    if (state === "FOUNDED") {
        return (
            <div className="flex flex-col justify-center items-center w-full gap-4">
                {Array.from({ length: 3 }, (_, i) => ({ id: i + 1 })).map(
                    (item) => (
                        <SearchItem
                            key={item.id}
                            title="محصول اول"
                            desc="محصول پر طرفدار و با کیفیت"
                            img="/1.png"
                            link="/"
                            price={500000}
                            discount={10}
                        />
                    ),
                )}
                <Link
                    href="/"
                    className="flex flex-row justify-center items-center text-primary gap-x-2"
                >
                    <PlusIcon className="fill-primary size-4" />
                    <h1 className="text-base font-semibold">مشاهده بیشتر</h1>
                </Link>
            </div>
        );
    }
}
