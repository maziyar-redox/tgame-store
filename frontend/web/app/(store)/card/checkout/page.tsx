import { CheckoutLayoutWrapper } from "@/features/store/card/checkout";
import { Summary } from "@/features/store/card/checkout/summary";

export default async function CheckoutPage() {
    return (
        <CheckoutLayoutWrapper>
            <Summary />
        </CheckoutLayoutWrapper>
    );
}
