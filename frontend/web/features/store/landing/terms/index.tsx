"use client";

// Importing icons
import {
    HeadphonesIcon,
    ShieldCheckIcon,
    TruckIcon,
} from "@phosphor-icons/react";

export function Terms() {
    return (
        <section className="border-y border-slate-100 bg-white rounded-t-4xl shadow-2xl">
            <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-100 px-4 py-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-3 py-4">
                    <span className="text-primary">
                        <TruckIcon name="truck" className="size-7" />
                    </span>
                    <span>
                        <b className="block text-sm">ارسال سریع</b>
                        <small className="text-slate-400">
                            تحویل به سراسر ایران
                        </small>
                    </span>
                </div>
                <div className="flex items-center justify-center gap-3 py-4">
                    <span className="text-primary">
                        <ShieldCheckIcon name="shield" className="size-7" />
                    </span>
                    <span>
                        <b className="block text-sm">ضمانت اصالت</b>
                        <small className="text-slate-400">
                            تضمین کالای اصل
                        </small>
                    </span>
                </div>
                <div className="flex items-center justify-center gap-3 py-4">
                    <span className="text-primary">
                        <HeadphonesIcon name="headphone" className="size-7" />
                    </span>
                    <span>
                        <b className="block text-sm">پشتیبانی تخصصی</b>
                        <small className="text-slate-400">
                            ۷ روز هفته، ۲۴ ساعته
                        </small>
                    </span>
                </div>
            </div>
        </section>
    );
}
