"use client";

// Importing icons from react icons
import { UserIcon } from "@phosphor-icons/react";
// Importing status card
import { StatusCard } from "@/features/panel/dashboard/status-card";

export function Status() {
    return (
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatusCard title="تیکت های باز" count={5} IconProp={UserIcon} />
            <StatusCard title="تیکت های باز" count={5} IconProp={UserIcon} />
            <StatusCard title="تیکت های باز" count={5} IconProp={UserIcon} />
            <StatusCard title="تیکت های باز" count={5} IconProp={UserIcon} />
        </div>
    );
}
