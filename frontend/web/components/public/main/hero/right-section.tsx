"use client";

// Importing Icons
import { ShieldCheckIcon } from "@phosphor-icons/react";
// Importing motion animation lib
import { motion } from "motion/react";
// Importing nextjs utils
import Image from "next/image";
// Importing Env
import { env } from "@/schema/env-schema";

export function RightSection() {
    return (
        <>
            <div className="absolute -bottom-10 -left-10 h-62.5 w-[56%] overflow-hidden rounded-tl-[50px] rounded-tr-[120px] border-10 border-white/40 bg-slate-200 shadow-2xl shadow-blue-300/40 sm:-bottom-16 sm:left-6 sm:h-82.5 sm:w-[43%] lg:-bottom-20 lg:left-12 lg:h-107.5 lg:w-[45%]">
                <Image
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                    src={`${env.NEXT_PUBLIC_S3_BUCKET_URL}/${env.NEXT_PUBLIC_MAIN_PAGE_BANNER}.jpg`}
                    alt="مجموعه‌ای از محصولات دیجیتال مدرن"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-blue-dark/35 via-transparent to-white/5" />
            </div>
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    x: [0, -5, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-5 left-4 z-10 hidden items-center gap-3 rounded-2xl bg-white/95 p-3 shadow-xl backdrop-blur sm:flex lg:bottom-8 lg:left-10"
            >
                <span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                    <ShieldCheckIcon name="shield" className="size-6" />
                </span>
                <span>
                    <b className="block text-xs">ضمانت اصالت کالا</b>
                    <small className="text-[10px] text-slate-400">
                        خرید مطمئن و امن
                    </small>
                </span>
            </motion.div>
        </>
    );
}
