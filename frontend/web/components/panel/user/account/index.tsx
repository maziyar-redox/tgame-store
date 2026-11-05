"use client";

// Importing zod provider
import { zodResolver } from "@hookform/resolvers/zod";
// Importing icons
import { CheckIcon, CreditCardIcon, UserIcon } from "@phosphor-icons/react";
import { cn } from "cn";
import Link from "next/link";
// Importing form provider for registering methods under hood
import { FormProvider, useForm } from "react-hook-form";
// Importing z utils
import type * as z from "zod";
// Importing local ui components
import { Avatar } from "@/components/panel/user/account/avatar";
import { BankInfo } from "@/components/panel/user/account/bank-info";
import { UserInfo } from "@/components/panel/user/account/user-info";
import { Button, buttonVariants } from "@/components/ui/button";
// Importing Checkout form schema
import { accountFormSchema } from "@/schema/account-schema";

type AccountFormInput = z.input<typeof accountFormSchema>;
type AccountFormOutput = z.output<typeof accountFormSchema>;

export function Account() {
    const accountForm = useForm<AccountFormInput, unknown, AccountFormOutput>({
        resolver: zodResolver(accountFormSchema),
        defaultValues: {
            avatar: undefined,
            first_name: "",
            last_name: "",
            email: "",
            national_code: "",
            bank_number: "",
            phone_number: "",
        },
    });

    function onSubmit(data: z.infer<typeof accountFormSchema>) {
        console.log(data);
    }

    return (
        <div>
            <div className="mb-5">
                <p className="text-xs font-bold text-primary">حساب کاربری</p>
                <h1 className="mt-1 text-xl font-black text-brand-navy">
                    ویرایش اطلاعات شخصی
                </h1>
                <p className="mt-1 text-xs leading-6 text-slate-400">
                    اطلاعات هویتی و بانکی خود را برای خریدی سریع‌تر به‌روز نگه
                    دارید.
                </p>
            </div>
            <FormProvider {...accountForm}>
                <form
                    onSubmit={accountForm.handleSubmit(onSubmit)}
                    className="overflow-hidden rounded-3xl border border-slate-100 bg-white"
                >
                    <Avatar />
                    <div className="p-5 sm:p-7">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="grid size-9 place-items-center rounded-xl bg-blue-50 text-primary">
                                <UserIcon name="user" className="size-4" />
                            </span>
                            <div>
                                <h2 className="text-sm font-black">
                                    اطلاعات شخصی
                                </h2>
                                <p className="mt-0.5 text-xs text-slate-400">
                                    مشخصات اصلی صاحب حساب
                                </p>
                            </div>
                        </div>
                        <UserInfo />
                        <div className="my-7 h-px bg-slate-100" />
                        <div className="mb-5 flex items-center gap-3">
                            <span className="grid size-9 place-items-center rounded-xl bg-blue-50 text-primary">
                                <CreditCardIcon
                                    name="credit"
                                    className="size-4"
                                />
                            </span>
                            <div>
                                <h2 className="text-sm font-black">
                                    اطلاعات بانکی
                                </h2>
                                <p className="mt-0.5 text-[10px] text-slate-400">
                                    برای بازگشت وجه سفارش‌های لغوشده
                                </p>
                            </div>
                        </div>
                        <BankInfo />
                    </div>
                    <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50/60 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                        <p className="flex items-center gap-2 text-xs text-slate-400">
                            پس از بررسی اطلاعات، تغییرات را ذخیره کنید.
                        </p>
                        <div className="flex gap-2">
                            <Link
                                href="/panel"
                                className={cn(
                                    buttonVariants({
                                        variant: "empty",
                                        size: "empty",
                                    }),
                                    "flex-1 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-600 sm:flex-none",
                                )}
                            >
                                انصراف
                            </Link>
                            <Button
                                type="submit"
                                variant="empty"
                                size="empty"
                                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-200 sm:flex-none"
                            >
                                <CheckIcon name="check" className="size-4" />{" "}
                                ذخیره تغییرات
                            </Button>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}
