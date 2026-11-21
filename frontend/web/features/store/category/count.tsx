"use client";

import { digitsEnToFa } from "@persian-tools/persian-tools";
import { XIcon } from "@phosphor-icons/react";
import { Button } from "@/shared/components/ui/button";

export function Count() {
    return (
        <div className="mb-4 flex items-center justify-between">
            <p className="text-xs text-slate-500">
                <b className="text-slate-900">{digitsEnToFa(3)}</b> محصول پیدا
                شد
            </p>
            <div className="flex gap-2">
                <Button
                    variant="empty"
                    size="empty"
                    className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold text-primary flex flex-row-reverse gap-x-1"
                >
                    اپل
                    <XIcon className="size-3" />
                </Button>
            </div>
        </div>
    );
}
