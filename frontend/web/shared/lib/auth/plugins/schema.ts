import type { BetterAuthPluginDBSchema } from "@better-auth/core/db";

export const schema = {
    user: {
        fields: {
            phone_number: {
                type: "string",
                required: true,
                returned: true,
            },
            phone_number_verified: {
                type: "boolean",
                required: true,
                returned: true,
            },
            first_name: {
                type: "string",
                required: true,
                returned: true,
            },
            last_name: {
                type: "string",
                required: true,
                returned: true,
            },
            last_login: {
                type: "date",
                required: true,
                returned: true,
            },
        },
    },
} satisfies BetterAuthPluginDBSchema;
