// Importing local ui library

// Importing icon
import { CreditCardIcon, LockSimpleIcon } from "@phosphor-icons/react";
// Importing from context
import { Controller, useFormContext } from "react-hook-form";
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";

export function BankInfo() {
    const accountForm = useFormContext();
    return (
        <FieldGroup className="grid gap-4 sm:grid-cols-2">
            <Controller
                name="bank_number"
                control={accountForm.control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel
                            className="text-slate-600 block text-xs font-bold"
                            htmlFor="account_form_bank_number"
                        >
                            شماره کارت بانکی
                        </FieldLabel>
                        <div className="relative">
                            <Input
                                {...field}
                                id="account_form_bank_number"
                                aria-invalid={fieldState.invalid}
                                placeholder="لظفا شماره کارت بانکی خود را وارد کنید"
                                autoComplete="cc-number"
                                name="bank_number"
                                type="text"
                                required
                                dir="ltr"
                                className="w-full rounded-xl border border-slate-200 px-4 py-5.5 text-sm font-normal outline-none transition focus:border-primary focus:ring-3 focus:ring-blue-50 placeholder:text-right pr-11"
                            />
                            <CreditCardIcon
                                name="phone"
                                className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-slate-400"
                            />
                        </div>
                        {fieldState.invalid ? (
                            <FieldError errors={[fieldState.error]} />
                        ) : (
                            <FieldDescription className="flex flex-row gap-x-1.5">
                                <LockSimpleIcon
                                    name="lock-icon"
                                    className="size-4"
                                />
                                شماره کارت باید به نام صاحب حساب کاربری باشد.
                            </FieldDescription>
                        )}
                    </Field>
                )}
            />
        </FieldGroup>
    );
}

{
    /*
                                <label className="block max-w-xl text-xs font-bold text-slate-600">شماره کارت بانکی<span className="relative mt-2 block"><Icon name="credit" className="absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" /><input required inputMode="numeric" dir="ltr" value={profile.cardNumber} onChange={(event) => updateProfile("cardNumber", event.target.value)} className="w-full rounded-xl border border-slate-200 py-3 pr-11 pl-4 text-left text-sm font-normal tracking-widest outline-none transition focus:border-[#0866ff] focus:ring-3 focus:ring-blue-50" /></span><span className="mt-2 flex items-center gap-1.5 text-[9px] font-normal text-slate-400"><Icon name="lock" className="size-3" /> شماره کارت باید به نام صاحب حساب کاربری باشد.</span></label> */
}
