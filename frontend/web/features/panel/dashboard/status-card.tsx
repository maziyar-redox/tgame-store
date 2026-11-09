"use client";

import { digitsEnToFa } from "@persian-tools/persian-tools";
import type { Icon } from "@phosphor-icons/react";

export function StatusCard({
    title,
    count,
    IconProp,
}: {
    title: string;
    count: number;
    IconProp: Icon;
}) {
    return (
        <div className="rounded-2xl border border-slate-100 bg-white p-4 text-right">
            <span className="grid size-9 place-items-center rounded-xl bg-blue-50 text-primary">
                <IconProp name={title} className="size-4" />
            </span>
            <b className="mt-3 block text-xl">{digitsEnToFa(count)}</b>
            <span className="text-[10px] text-slate-400">{title}</span>
        </div>
    );
}
