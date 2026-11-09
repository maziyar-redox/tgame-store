import { Banner } from "@/features/panel/dashboard/banner";
import { Orders } from "@/features/panel/dashboard/orders";
import { Status } from "@/features/panel/dashboard/status";

export function Dashboard() {
    return (
        <div>
            <Banner />
            <Status />
            <h2 className="mb-4 mt-7 font-black">آخرین سفارش‌ها</h2>
            <Orders />
        </div>
    );
}
