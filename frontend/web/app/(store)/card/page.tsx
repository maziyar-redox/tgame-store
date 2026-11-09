import { CardLayoutWrapper } from "@/features/store/card/items";
import { Items } from "@/features/store/card/items/items";

export default async function CardPage() {
    return (
        <CardLayoutWrapper>
            <Items />
            <Items />
            <Items />
        </CardLayoutWrapper>
    );
}
