import type { BetterAuthPlugin } from "@better-auth/core";
import { mergeSchema } from "better-auth/db";

import { PHONE_NUMBER_ERROR_CODES } from "@/shared/lib/auth/plugins/error-codes";
import type { RequiredPhoneNumberOptions } from "@/shared/lib/auth/plugins/routes";
import {
    signInPhoneNumber,
    signOutPhoneNumber,
    signUpPhoneNumber,
    verifyPhoneNumber,
} from "@/shared/lib/auth/plugins/routes";
import { schema } from "@/shared/lib/auth/plugins/schema";
import type {
    PhoneNumberOptions,
    UserWithPhoneNumber,
} from "@/shared/lib/auth/plugins/types";

export type { PhoneNumberOptions, UserWithPhoneNumber };

declare module "@better-auth/core" {
    interface BetterAuthPluginRegistry<AuthOptions, Options> {
        "phone-number": {
            creator: typeof phoneNumber;
        };
    }
}

export const phoneNumber = (options?: PhoneNumberOptions | undefined) => {
    const opts = {
        expiresIn: options?.expiresIn || 120,
        ...options,
        phone_number: "phone_number",
        phone_number_verified: "phone_number_verified",
    };

    return {
        id: "phone-number",
        version: "0.0.1",
        endpoints: {
            signInPhoneNumber: signInPhoneNumber(
                opts as RequiredPhoneNumberOptions,
            ),
            signUpPhoneNumber: signUpPhoneNumber(
                opts as RequiredPhoneNumberOptions,
            ),
            signOutPhoneNumber: signOutPhoneNumber(
                opts as RequiredPhoneNumberOptions,
            ),
            verifyPhoneNumber: verifyPhoneNumber(
                opts as RequiredPhoneNumberOptions,
            ),
        },
        schema: mergeSchema(schema, options?.schema),
        options,
        $ERROR_CODES: PHONE_NUMBER_ERROR_CODES,
    } satisfies BetterAuthPlugin;
};
