"use client";

// Importing icons
import { SlidersHorizontalIcon } from "@phosphor-icons/react";
import { cn } from "cn";
// Importing react state
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
// Importing from global ui
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
// Importing currency formatter from local utils
import { currencyFormmater } from "@/lib/currency";

export function FilterSectionSm() {
    const [priceValue, setPriceValue] = useState([100_000, 1_000_000_000]);
    return (
        <div className="w-full">
            <Drawer showSwipeHandle>
                <DrawerTrigger
                    render={
                        <Button
                            variant="empty"
                            size="empty"
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold lg:hidden w-full"
                        />
                    }
                >
                    فیلترها
                    <SlidersHorizontalIcon name="sliders" className="size-4" />
                </DrawerTrigger>
                <DrawerContent className="block lg:hidden data-[swipe-direction=down]:rounded-t-3xl">
                    <div className="space-y-6 p-5">
                        <div className="flex items-center justify-between">
                            <h3 className="font-black">فیلترها</h3>
                            <Button
                                variant="empty"
                                size="empty"
                                className="text-sm font-bold text-primary"
                            >
                                پاک کردن همه
                            </Button>
                        </div>
                        <div className="border-t border-slate-100 pt-5">
                            <h4 className="mb-4 text-sm font-bold">
                                محدوده قیمت
                            </h4>
                            <Slider
                                className="mb-5 h-1.5 mx-auto"
                                id="slider-price"
                                value={priceValue}
                                onValueChange={(value) =>
                                    setPriceValue(value as number[])
                                }
                                min={100_000}
                                max={1_000_000_000}
                                step={50}
                            />
                            <div className="grid grid-cols-2 gap-2">
                                <div className="rounded-xl border border-slate-200 px-3 py-2">
                                    <span className="block text-[9px] text-slate-400">
                                        از قیمت
                                    </span>
                                    <b className="text-xs">
                                        {currencyFormmater(priceValue[0])} تومان
                                    </b>
                                </div>
                                <div className="rounded-xl border border-slate-200 px-3 py-2">
                                    <span className="block text-[9px] text-slate-400">
                                        تا قیمت
                                    </span>
                                    <b className="text-xs">
                                        {currencyFormmater(priceValue[1])} تومان
                                    </b>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-slate-100 pt-5">
                            <h4 className="mb-3 text-sm font-bold">برند</h4>
                            <div className="space-y-3">
                                <FieldGroup>
                                    <Field orientation="horizontal">
                                        <Checkbox id="terms_checkbox" />
                                        <FieldLabel
                                            htmlFor="terms_checkbox"
                                            className={cn(
                                                "font-normal text-xs",
                                                /* fieldState.invalid
                                                    ? ""
                                                    : "text-slate-500", */
                                            )}
                                        >
                                            اپل
                                        </FieldLabel>
                                        <span className="mr-auto text-xs text-slate-400">
                                            55
                                        </span>
                                    </Field>
                                    <Field orientation="horizontal">
                                        <Checkbox id="terms_checkbox" />
                                        <FieldLabel
                                            htmlFor="terms_checkbox"
                                            className={cn(
                                                "font-normal text-xs",
                                                /* fieldState.invalid
                                                    ? ""
                                                    : "text-slate-500", */
                                            )}
                                        >
                                            اپل
                                        </FieldLabel>
                                        <span className="mr-auto text-xs text-slate-400">
                                            55
                                        </span>
                                    </Field>
                                    <Field orientation="horizontal">
                                        <Checkbox id="terms_checkbox" />
                                        <FieldLabel
                                            htmlFor="terms_checkbox"
                                            className={cn(
                                                "font-normal text-xs",
                                                /* fieldState.invalid
                                                    ? ""
                                                    : "text-slate-500", */
                                            )}
                                        >
                                            اپل
                                        </FieldLabel>
                                        <span className="mr-auto text-xs text-slate-400">
                                            55
                                        </span>
                                    </Field>
                                </FieldGroup>
                            </div>
                            <FieldGroup>
                                <Field
                                    orientation="horizontal"
                                    className="flex items-center justify-between border-t border-slate-100 pt-5 mt-5"
                                >
                                    <FieldLabel htmlFor="switch-quantity">
                                        <div>
                                            <h4 className="text-sm font-bold">
                                                فقط کالاهای موجود
                                            </h4>
                                            <p className="mt-1 text-xs text-slate-400">
                                                نمایش محصولات آماده ارسال
                                            </p>
                                        </div>
                                    </FieldLabel>
                                    <Switch
                                        id="switch-quantity"
                                        size="default"
                                    />
                                </Field>
                            </FieldGroup>
                        </div>
                    </div>
                    <DrawerFooter>
                        <DrawerClose
                            render={
                                <Button
                                    variant="default"
                                    size="empty"
                                    className="w-full rounded-xl bg-primary py-3 text-sm font-bold text-white lg:hidden"
                                >
                                    نمایش نتایج
                                </Button>
                            }
                        />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
}
