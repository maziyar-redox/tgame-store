import createClient from "openapi-fetch";

import type { paths } from "@/shared/generated/schema";

import { env } from "@/shared/schema/env-schema";

export const client = createClient<paths>({ baseUrl: env.BASE_API_URL });
