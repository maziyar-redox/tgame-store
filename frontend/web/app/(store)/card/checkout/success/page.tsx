import { SuccessLayoutWrapper } from "@/features/store/card/result";
import { Failure } from "@/features/store/card/result/state";

export default async function SuccessPage() {
    return (
        <SuccessLayoutWrapper>
            {/* <Success /> */}
            <Failure />
        </SuccessLayoutWrapper>
    );
}
