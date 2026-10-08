"use client";

// Importing nextjs images
import Image from "next/image";

const bb = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
];

export function IntroductionSection() {
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
                {bb.map((item) => (
                    <Image
                        key={item.id}
                        width={500}
                        height={500}
                        src="/4.jpg"
                        alt=""
                        className="size-12 rounded-full border-4 border-brand-surface object-cover sm:size-14"
                    />
                ))}
            </div>
        </div>
    );
}
