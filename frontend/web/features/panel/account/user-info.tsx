// Importing local ui library

// Importing icon
import { AtIcon, DeviceMobileSpeakerIcon } from "@phosphor-icons/react";
// Importing from context
import { Controller, useFormContext } from "react-hook-form";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";

export function UserInfo() {
    const accountForm = useFormContext();
    return (
        <FieldGroup className="grid gap-4 sm:grid-cols-2">
            <Controller
                name="first_name"
                control={accountForm.control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel
                            className="text-slate-600 block text-xs font-bold"
                            htmlFor="account_form_first_name"
                        >
                            نام
                        </FieldLabel>
                        <Input
                            {...field}
                            id="account_form_first_name"
                            aria-invalid={fieldState.invalid}
                            placeholder="لظفا نام خود را وارد کنید"
                            autoComplete="name"
                            name="first_name"
                            type="text"
                            required
                            dir="rtl"
                            className="w-full rounded-xl border border-slate-200 px-4 py-5.5 text-sm font-normal outline-none transition focus:border-primary focus:ring-3 focus:ring-blue-50"
                        />
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />
            <Controller
                name="last_name"
                control={accountForm.control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel
                            className="text-slate-600 block text-xs font-bold"
                            htmlFor="account_form_last_name"
                        >
                            نام خانوادگی
                        </FieldLabel>
                        <Input
                            {...field}
                            id="account_form_last_name"
                            aria-invalid={fieldState.invalid}
                            placeholder="لظفا نام خانوادگی خود را وارد کنید"
                            autoComplete="family-name"
                            name="last_name"
                            type="text"
                            required
                            dir="rtl"
                            className="w-full rounded-xl border border-slate-200 px-4 py-5.5 text-sm font-normal outline-none transition focus:border-primary focus:ring-3 focus:ring-blue-50"
                        />
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />
            <Controller
                name="email"
                control={accountForm.control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel
                            className="text-slate-600 block text-xs font-bold"
                            htmlFor="account_form_email"
                        >
                            ایمیل
                        </FieldLabel>
                        <div className="relative">
                            <Input
                                {...field}
                                id="account_form_email"
                                aria-invalid={fieldState.invalid}
                                placeholder="لطفا ایمیل خود را وارد کنید"
                                autoComplete="email"
                                name="email"
                                type="email"
                                required
                                dir="ltr"
                                className="w-full rounded-xl border border-slate-200 px-4 py-5.5 text-sm font-normal outline-none transition focus:border-primary focus:ring-3 focus:ring-blue-50 placeholder:text-right pr-11"
                            />
                            <AtIcon
                                name="mail"
                                className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-slate-400"
                            />
                        </div>
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />
            <Controller
                name="phone_number"
                control={accountForm.control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel
                            className="text-slate-600 block text-xs font-bold"
                            htmlFor="account_form_phone_number"
                        >
                            شماره موبایل
                        </FieldLabel>
                        <div className="relative">
                            <Input
                                {...field}
                                id="account_form_phone_number"
                                aria-invalid={fieldState.invalid}
                                placeholder="لطفا شماره موبایل خود را وارد کنید"
                                autoComplete="tel"
                                name="phone_number"
                                type="tel"
                                required
                                dir="rtl"
                                className="w-full rounded-xl border border-slate-200 px-4 py-5.5 text-sm font-normal outline-none transition focus:border-primary focus:ring-3 focus:ring-blue-50 placeholder:text-right pr-11"
                            />
                            <DeviceMobileSpeakerIcon
                                name="phone"
                                className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-slate-400"
                            />
                        </div>
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />
            <Controller
                name="national_code"
                control={accountForm.control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel
                            className="text-slate-600 block text-xs font-bold"
                            htmlFor="account_form_national_code"
                        >
                            کد ملی
                        </FieldLabel>
                        <Input
                            {...field}
                            id="account_form_national_code"
                            aria-invalid={fieldState.invalid}
                            placeholder="لظفا کد ملی خود را وارد کنید"
                            autoComplete="off"
                            name="national_code"
                            type="text"
                            required
                            dir="ltr"
                            className="w-full rounded-xl border border-slate-200 px-4 py-5.5 text-sm font-normal outline-none transition focus:border-primary focus:ring-3 focus:ring-blue-50 placeholder:text-right"
                        />
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />
        </FieldGroup>
    );
}
