import { createAuthEndpoint } from "@better-auth/core/api";
import { APIError, BASE_ERROR_CODES } from "@better-auth/core/error";
import { sessionMiddleware } from "better-auth/api";
import { deleteSessionCookie, setSessionCookie } from "better-auth/cookies";
import { parseUserInput, parseUserOutput } from "better-auth/db";
import { client } from "@/shared/lib/api-client";
import { PHONE_NUMBER_ERROR_CODES } from "@/shared/lib/auth/plugins/error-codes";
import type {
    PhoneNumberOptions,
    UserWithPhoneNumber,
} from "@/shared/lib/auth/plugins/types";
import { loginFormSchema } from "@/shared/schema/login-schema";
import { otpFormSchema } from "@/shared/schema/otp-schema";
import { registerFormSchema } from "@/shared/schema/register-schema";

export type RequiredPhoneNumberOptions = PhoneNumberOptions & {
    expiresIn: number;
    phone_number: string;
    phone_number_verified: string;
    createdAt: string;
};

/**
 * ### Endpoint
 *
 * POST `/authentication/sign-in`
 *
 * ### API Methods
 *
 * **server:**
 * `auth.api.signInPhoneNumber`
 *
 * **client:**
 * `authClient.signIn.phoneNumber`
 */
export const signInPhoneNumber = (_opts: RequiredPhoneNumberOptions) =>
    createAuthEndpoint(
        "/authentication/sign-in",
        {
            method: "POST",
            body: loginFormSchema,
        },
        async (ctx) => {
            const { phone_number } = ctx.body;

            const { error, data, response } = await client.POST(
                "/api/auth/login",
                {
                    body: {
                        phone_number: phone_number,
                    },
                },
            );

            if (error && response.status === 401) {
                throw APIError.from(
                    "UNAUTHORIZED",
                    PHONE_NUMBER_ERROR_CODES.PHONE_NUMBER_NOT_EXIST,
                );
            }

            if (error && response.status === 422) {
                throw APIError.from(
                    "NOT_ACCEPTABLE",
                    PHONE_NUMBER_ERROR_CODES.INVALID_PHONE_NUMBER,
                );
            }

            if (error && response.status === 429) {
                throw APIError.from(
                    "TOO_MANY_REQUESTS",
                    PHONE_NUMBER_ERROR_CODES.TOO_MANY_REQUESTS,
                );
            }

            if (error && response.status === 500) {
                throw APIError.from(
                    "INTERNAL_SERVER_ERROR",
                    PHONE_NUMBER_ERROR_CODES.INTERNAL_SERVER_ERROR,
                );
            }

            if (!data) {
                throw APIError.from(
                    "REQUEST_TIMEOUT",
                    PHONE_NUMBER_ERROR_CODES.REQUEST_TIMEOUT,
                );
            }

            return ctx.json({
                message: "کد یکبار مصرف ارسال شد.",
                success: true,
            });
        },
    );

/**
 * ### Endpoint
 *
 * POST `/authentication/sign-up`
 *
 * ### API Methods
 *
 * **server:**
 * `auth.api.signUpPhoneNumber`
 *
 * **client:**
 * `authClient.signIn.phoneNumber`
 */
export const signUpPhoneNumber = (_opts: RequiredPhoneNumberOptions) =>
    createAuthEndpoint(
        "/authentication/sign-up",
        {
            method: "POST",
            body: registerFormSchema,
        },
        async (ctx) => {
            const { phone_number, first_name, last_name } = ctx.body;

            const { error, data, response } = await client.POST(
                "/api/auth/register",
                {
                    body: {
                        phone_number: phone_number,
                        first_name: first_name,
                        last_name: last_name,
                    },
                },
            );

            if (error && response.status === 401) {
                throw APIError.from(
                    "UNAUTHORIZED",
                    PHONE_NUMBER_ERROR_CODES.PHONE_NUMBER_EXIST,
                );
            }

            if (error && response.status === 422) {
                throw APIError.from(
                    "NOT_ACCEPTABLE",
                    PHONE_NUMBER_ERROR_CODES.INVALID_PHONE_NUMBER,
                );
            }

            if (error && response.status === 429) {
                throw APIError.from(
                    "TOO_MANY_REQUESTS",
                    PHONE_NUMBER_ERROR_CODES.TOO_MANY_REQUESTS,
                );
            }

            if (error && response.status === 500) {
                throw APIError.from(
                    "INTERNAL_SERVER_ERROR",
                    PHONE_NUMBER_ERROR_CODES.INTERNAL_SERVER_ERROR,
                );
            }

            if (!data) {
                throw APIError.from(
                    "REQUEST_TIMEOUT",
                    PHONE_NUMBER_ERROR_CODES.REQUEST_TIMEOUT,
                );
            }

            return ctx.json({
                message: "کد یکبار مصرف ارسال شد.",
                success: true,
            });
        },
    );

/**
 * ### Endpoint
 *
 * POST `/authentication/verify`
 *
 * ### API Methods
 *
 * **server:**
 * `auth.api.verifyPhoneNumber`
 *
 * **client:**
 * `authClient.phoneNumber.verify`
 */
export const verifyPhoneNumber = (_opts: RequiredPhoneNumberOptions) =>
    createAuthEndpoint(
        "/authentication/verify",
        {
            method: "POST",
            body: otpFormSchema.extend(loginFormSchema.shape),
        },
        async (ctx) => {
            const { phone_number, code } = ctx.body;

            const { error, data, response } = await client.POST(
                "/api/auth/verify",
                {
                    body: {
                        phone_number: phone_number,
                        otp_code: parseInt(code, 10),
                    },
                },
            );

            if (error && response.status === 401) {
                throw APIError.from(
                    "UNAUTHORIZED",
                    PHONE_NUMBER_ERROR_CODES.OTP_DOES_NOT_EXIST,
                );
            }

            if (error && response.status === 422) {
                throw APIError.from(
                    "NOT_ACCEPTABLE",
                    PHONE_NUMBER_ERROR_CODES.INVALID_PHONE_NUMBER,
                );
            }

            if (error && response.status === 429) {
                throw APIError.from(
                    "TOO_MANY_REQUESTS",
                    PHONE_NUMBER_ERROR_CODES.TOO_MANY_REQUESTS,
                );
            }

            if (error && response.status === 500) {
                throw APIError.from(
                    "INTERNAL_SERVER_ERROR",
                    PHONE_NUMBER_ERROR_CODES.INTERNAL_SERVER_ERROR,
                );
            }

            if (!data) {
                throw APIError.from(
                    "REQUEST_TIMEOUT",
                    PHONE_NUMBER_ERROR_CODES.REQUEST_TIMEOUT,
                );
            }

            const additionalFields = parseUserInput(
                ctx.context.options,
                {
                    id: data.user.id as string,
                    first_name: data.user.first_name as string,
                    last_name: data.user.last_name as string,
                    phone_number: data.user.phone_number as string,
                    phone_number_verified: data.user.verified as boolean,
                    createdAt: new Date(data.user.created_at as string),
                    updatedAt: new Date(data.user.updated_at as string),
                    last_login: new Date(data.user.last_login as string),
                },
                "create",
            );

            const user =
                await ctx.context.internalAdapter.createUser<UserWithPhoneNumber>(
                    {
                        ...additionalFields,
                        email: data.user.email || "",
                        name: data.user.name,
                        emailVerified: data.user.verified,
                        image: data.user.image,
                    },
                    {
                        method: "phone-number",
                    },
                );

            const session = await ctx.context.internalAdapter.createSession(
                data.user.id as string,
                false,
            );

            if (!session) {
                ctx.context.logger.error("Failed to create session");
                throw APIError.from(
                    "UNAUTHORIZED",
                    BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION,
                );
            }

            await setSessionCookie(
                ctx,
                {
                    session,
                    user,
                },
                false,
            );

            return ctx.json({
                message: "کد یکبار مصرف ارسال شد.",
                success: true,
                token: session.token,
                user: parseUserOutput(ctx.context.options, user),
            });
        },
    );

/**
 * ### Endpoint
 *
 * POST `/authentication/sign-out`
 *
 * ### API Methods
 *
 * **server:**
 * `auth.api.signOutPhoneNumber`
 *
 * **client:**
 * `authClient.phoneNumber.verify`
 */
export const signOutPhoneNumber = (_opts: RequiredPhoneNumberOptions) =>
    createAuthEndpoint(
        "/authentication/sign-out",
        {
            method: "POST",
            use: [sessionMiddleware],
            requireHeaders: true,
        },
        async (ctx) => {
            const { session } = ctx.context;

            await ctx.context.internalAdapter.deleteUser(
                session.session.userId,
            );

            await ctx.context.internalAdapter.deleteSession(
                session.session.token,
            );

            deleteSessionCookie(ctx);

            return ctx.json({
                message: "با موفقیت لاگ اوت شدید.",
                success: true,
            });
        },
    );
