import type { InferOptionSchema, User } from "better-auth";

import type { schema } from "@/shared/lib/auth/plugins/schema";

export interface UserWithPhoneNumber extends User {
    first_name: string;
    last_name: string;
    phone_number: string;
    phone_number_verified: boolean;
    last_login: Date;
}

export interface PhoneNumberOptions {
    /**
     * Expiry time of the OTP code in seconds
     * @default 120
     */
    expiresIn?: number | undefined;
    /**
     * Custom schema for the admin plugin
     */
    schema?: InferOptionSchema<typeof schema> | undefined;
}
