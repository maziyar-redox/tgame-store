import { Banner } from "@/components/panel/user/dashboard/banner";
import { Orders } from "@/components/panel/user/dashboard/orders";
import { Status } from "@/components/panel/user/dashboard/status";

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
