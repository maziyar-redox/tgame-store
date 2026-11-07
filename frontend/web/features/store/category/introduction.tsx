"use client";

import { cn } from "cn";
import { nanoid } from "nanoid";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@/shared/components/ui/skeleton";

export function IntroductionSection() {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    return (
        <div className="mb-7 rounded-3xl bg-brand-surface p-6 sm:flex sm:items-center sm:justify-between sm:p-8">
            <div>
                <p className="mb-1 text-xs font-bold text-primary">
                    فروشگاه تی گیم
                </p>
                <h1 className="text-2xl font-black text-brand-navy sm:text-3xl">
                    محصولات دیجیتال
                </h1>
                <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
                    تازه‌ترین محصولات دنیای تکنولوژی، از برندهای معتبر و با ضمانت
                    اصالت
                </p>
            </div>
            <div className="mt-5 flex -space-x-3 space-x-reverse sm:mt-0">
                {Array.from({ length: 4 }).map(() => {
                    const randomId = nanoid(10);

                    return (
                        <div key={randomId}>
                            <Skeleton
                                className={cn(
                                    "size-12 rounded-full border-4 border-brand-surface object-cover sm:size-14",
                                    isLoaded ? "hidden" : "block",
                                )}
                            />
                            <Image
                                width={500}
                                height={500}
                                src="https://tgame-test.s3.ir-central1.arvanstorage.ir/3.jpg"
                                alt="item"
                                loading="eager"
                                className={cn(
                                    "size-12 rounded-full border-4 border-brand-surface object-cover sm:size-14",
                                    isLoaded ? "block" : "hidden",
                                )}
                                onLoad={() => setIsLoaded(true)}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
