import type { BetterAuthClientPlugin } from "@better-auth/core";

import type { phoneNumber } from "@/shared/lib/auth/plugins";
import { PHONE_NUMBER_ERROR_CODES } from "@/shared/lib/auth/plugins/error-codes";

export * from "@/shared/lib/auth/plugins/error-codes";

export const phoneNumberClient = () => {
    return {
        id: "phoneNumber",
        version: "0.0.1",
        $InferServerPlugin: {} as ReturnType<typeof phoneNumber>,
        atomListeners: [
            {
                matcher(path) {
                    return (
                        path === "/authentication/sign-in" ||
                        path === "/authentication/verify" ||
                        path === "/authentication/sign-up"
                    );
                },
                signal: "$sessionSignal",
            },
        ],
        $ERROR_CODES: PHONE_NUMBER_ERROR_CODES,
    } satisfies BetterAuthClientPlugin;
};

export type * from "@/shared/lib/auth/plugins/types";
