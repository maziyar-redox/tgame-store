"use client";

import { SlidersHorizontalIcon } from "@phosphor-icons/react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

import { Button } from "@/shared/components/ui/button";
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from "@/shared/components/ui/drawer";
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import { Slider } from "@/shared/components/ui/slider";
import { Switch } from "@/shared/components/ui/switch";
import { currencyFormmater } from "@/shared/lib/currency";

const someArr = [
    {
        id: 1,
        title: "اپل",
        quantity: 50,
    },
    {
        id: 2,
        title: "اپل",
        quantity: 50,
    },
    {
        id: 3,
        title: "اپل",
        quantity: 50,
    },
    {
        id: 4,
        title: "اپل",
        quantity: 50,
    },
    {
        id: 5,
        title: "اپل",
        quantity: 50,
    },
];

export function DrawerFilterSection() {
    const categoryControl = useFormContext();
    const priceRange = useWatch({
        control: categoryControl.control,
        name: "priceRange",
    });

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
                    <FieldGroup className="space-y-6 p-5">
                        <div className="flex items-center justify-between">
                            <h3 className="font-black">فیلترها</h3>
                            <Button
                                variant="empty"
                                size="empty"
                                className="text-sm font-bold text-primary"
                                type="reset"
                                onClick={() => categoryControl.reset()}
                            >
                                پاک کردن همه
                            </Button>
                        </div>
                        <Controller
                            name="priceRange"
                            control={categoryControl.control}
                            render={({ field }) => (
                                <div className="border-t border-slate-100 pt-5">
                                    <h4 className="mb-4 text-sm font-bold">
                                        محدوده قیمت
                                    </h4>
                                    <Slider
                                        className="mb-5 h-1.5 mx-auto"
                                        id="slider-price"
                                        value={field.value}
                                        onValueChange={field.onChange}
                                        defaultValue={[100_000, 1_000_000_000]}
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
                                                {currencyFormmater(
                                                    priceRange[0],
                                                )}{" "}
                                                تومان
                                            </b>
                                        </div>
                                        <div className="rounded-xl border border-slate-200 px-3 py-2">
                                            <span className="block text-[9px] text-slate-400">
                                                تا قیمت
                                            </span>
                                            <b className="text-xs">
                                                {currencyFormmater(
                                                    priceRange[1],
                                                )}{" "}
                                                تومان
                                            </b>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <div className="border-t border-slate-100 pt-5">
                            <h4 className="mb-3 text-sm font-bold">برند</h4>
                            <Controller
                                name="brand"
                                control={categoryControl.control}
                                render={({ field }) => {
                                    const selected = field.value ?? [];

                                    const toggle = (
                                        id: number,
                                        checked: boolean,
                                    ) => {
                                        if (checked) {
                                            field.onChange([...selected, id]);
                                        } else {
                                            field.onChange(
                                                selected.filter(
                                                    (v: number) => v !== id,
                                                ),
                                            );
                                        }
                                    };
                                    return (
                                        <div className="space-y-3">
                                            {someArr.map((item) => {
                                                return (
                                                    <Field
                                                        key={item.id}
                                                        orientation="horizontal"
                                                    >
                                                        <Checkbox
                                                            id="terms_checkbox"
                                                            checked={selected.includes(
                                                                item.id,
                                                            )}
                                                            onCheckedChange={(
                                                                checked,
                                                            ) =>
                                                                toggle(
                                                                    item.id,
                                                                    checked ===
                                                                        true,
                                                                )
                                                            }
                                                        />
                                                        <FieldLabel
                                                            htmlFor="terms_checkbox"
                                                            className="font-normal text-xs"
                                                        >
                                                            اپل
                                                        </FieldLabel>
                                                        <span className="mr-auto text-xs text-slate-400">
                                                            55
                                                        </span>
                                                    </Field>
                                                );
                                            })}
                                        </div>
                                    );
                                }}
                            />
                            <Controller
                                name="quantity"
                                control={categoryControl.control}
                                render={({ field }) => (
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
                                            {...field}
                                            id="switch-quantity"
                                            size="default"
                                            name={field.name}
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </Field>
                                )}
                            />
                        </div>
                    </FieldGroup>
                    <DrawerFooter>
                        <DrawerClose
                            render={
                                <Button
                                    variant="default"
                                    size="empty"
                                    className="w-full rounded-xl bg-primary py-3 text-sm font-bold text-white lg:hidden"
                                    type="submit"
                                    form="category-form"
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
