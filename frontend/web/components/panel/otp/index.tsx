"use client";

// Importing digits to fa function
import { digitsEnToFa } from "@persian-tools/persian-tools";
// Importing icons
import { ChatCircleDotsIcon } from "@phosphor-icons/react";
// Importing components from global ui
import { Card, CardContent } from "@/components/ui/card";

export function AuthenticationLayoutOtpComponent({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="relative grid min-h-[calc(100vh-110px)] place-items-center overflow-hidden px-4 py-10">
            <div className="absolute -right-32 top-10 size-80 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="absolute -left-32 bottom-0 size-96 rounded-full bg-cyan-100/40 blur-3xl" />
            <Card className="relative w-full max-w-md rounded-[28px] border ring-0 border-white bg-white p-5 shadow-[0_25px_80px_rgba(8,55,125,.12)] sm:p-8">
                <CardContent>
                    <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-blue-50 text-[#0866ff]">
                        <ChatCircleDotsIcon name="message" className="size-7" />
                    </span>
                    <h1 className="mt-5 text-2xl font-black text-center">
                        تأیید شماره موبایل
                    </h1>
                    <p className="mt-2 text-xs leading-6 text-slate-400 text-center">
                        کد ۶ رقمی ارسال‌شده به شماره
                        <b className="text-slate-700" dir="ltr">
                            {" "}
                            {digitsEnToFa("09117462751")}{" "}
                        </b>
                        را وارد کنید.
                    </p>
                    <div dir="ltr" className="mt-7">
                        {children}
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}
