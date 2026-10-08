"use client";

// Importing shcema validation utils
import { zodResolver } from "@hookform/resolvers/zod";
// Importing digits to fa function
import { digitsEnToFa, digitsFaToEn } from "@persian-tools/persian-tools";
// Importing icons
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { cn } from "cn";
import { Controller, useForm } from "react-hook-form";
import type * as z from "zod";
// Importing global ui components
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
// Importing register schema util
import { registerFormSchema } from "@/schema/register-schema";

export function RegisterSection() {
    const registerForm = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            full_name: "",
            phone_number: "",
            terms: false,
        },
    });

    function onRegister(data: z.infer<typeof registerFormSchema>) {
        console.log(digitsFaToEn(data.phone_number));
    }

    return (
        <TabsContent value="register">
            <form
                id="register_form"
                className="mt-6 space-y-4"
                onSubmit={registerForm.handleSubmit(onRegister)}
            >
                <FieldGroup>
                    <Controller
                        name="full_name"
                        control={registerForm.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel
                                    className="text-slate-600 block text-xs font-bold"
                                    htmlFor="login_form_fullname"
                                >
                                    نام و نام خانوادگی
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="login_form_fullname"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="لظفا نام کامل خود را وارد کنید"
                                    autoComplete="name"
                                    name="full_name"
                                    type="text"
                                    required
                                    dir="rtl"
                                    className="border border-slate-200 px-4 py-5 text-right text-sm font-normal outline-none focus:border-primary"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    <Controller
                        name="phone_number"
                        control={registerForm.control}
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
                                    required
                                    dir="ltr"
                                    className="border border-slate-200 px-4 py-5 text-left text-sm font-normal outline-none focus:border-primary"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    <Controller
                        name="terms"
                        control={registerForm.control}
                        render={({ field, fieldState }) => (
                            <Field
                                orientation="horizontal"
                                data-invalid={fieldState.invalid}
                            >
                                <Checkbox
                                    id="terms_checkbox"
                                    name={field.name}
                                    aria-invalid={fieldState.invalid}
                                    checked={field.value}
                                    onCheckedChange={(checked) => {
                                        field.onChange(checked);
                                    }}
                                />
                                <FieldLabel
                                    htmlFor="terms_checkbox"
                                    className={cn(
                                        "font-normal text-xs",
                                        fieldState.invalid
                                            ? ""
                                            : "text-slate-500",
                                    )}
                                >
                                    شرایط استفاده و حریم خصوصی فروشگاه تی گیم را
                                    می‌پذیرم.
                                </FieldLabel>
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
