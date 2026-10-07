"use client";

// Importing shcema validation utils
import { zodResolver } from "@hookform/resolvers/zod";
// Importing digits to fa function
import { digitsEnToFa, digitsFaToEn } from "@persian-tools/persian-tools";
// Importing icons
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { Controller, useForm } from "react-hook-form";
import type * as z from "zod";
// Importing global ui components
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
// Importing login schema util
import { loginFormSchema } from "@/schema/login-schema";

export function LoginSection() {
    const loginForm = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            phone_number: "",
        },
    });

    function onLogin(data: z.infer<typeof loginFormSchema>) {
        console.log(digitsFaToEn(data.phone_number));
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
                                    name="phone_number"
                                    type="tel"
                                    dir="ltr"
                                    className="border border-slate-200 px-4 py-5 text-left text-sm font-normal outline-none focus:border-primary"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    <Button
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
