"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import type * as z from "zod";
import { Login } from "@/actions/auth/login";
import { Button } from "@/shared/components/ui/button";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { TabsContent } from "@/shared/components/ui/tabs";
import { loginFormSchema } from "@/shared/schema/login-schema";

export function LoginSection() {
    const [isPending, startTransition] = useTransition();

    const loginForm = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            phone_number: "",
        },
    });

    function onLogin(data: z.infer<typeof loginFormSchema>) {
        try {
            startTransition(async () => {
                const isLogin = await Login(data);

                if (isLogin.success === false) {
                    return loginForm.setError("phone_number", {
                        message: isLogin.message,
                    });
                }
            });
        } catch (_err) {
            loginForm.setError("phone_number", {
                message: "مشکلی پیش آمده. لطفا دوباره تلاش کنید",
            });
        }
    }

    return (
        <TabsContent value="login">
            <form
                id="login_form"
                className="mt-6 space-y-4"
                onSubmit={loginForm.handleSubmit(onLogin)}
            >
                <FieldGroup>
                    <Controller
                        name="phone_number"
                        control={loginForm.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel
                                    className="text-slate-600 block text-xs font-bold"
                                    htmlFor="login_form_phone"
                                >
                                    شماره موبایل
                                </FieldLabel>
                                <Input
                                    {...field}
                                    value={digitsEnToFa(field.value)}
                                    id="login_form_phone"
                                    aria-invalid={fieldState.invalid}
                                    placeholder={digitsEnToFa("09121234567")}
                                    autoComplete="tel"
                                    type="tel"
                                    dir="ltr"
                                    required
                                    className="border border-slate-200 px-4 py-5 text-left text-sm font-normal outline-none focus:border-primary"
                                    disabled={isPending}
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    <Button
                        disabled={isPending}
                        type="submit"
                        size="xl"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-white shadow-lg shadow-blue-200"
                    >
                        دریافت کد تأیید{" "}
                        <ArrowLeftIcon name="arrow" className="size-4" />
                    </Button>
                </FieldGroup>
            </form>
        </TabsContent>
    );
}
