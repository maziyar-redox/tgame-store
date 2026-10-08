"use client";

// Importing icons
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
// Importing react hook items
import { Controller, useFormContext } from "react-hook-form";
// Importing mobile filter section from local ui
import { FilterSectionSm } from "@/components/public/category/filter";
// Importing field group from global ui
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type SelectTypes = "POPULAR" | "NEW" | "CHEAP" | "HIGH";

const selectRecords: Record<SelectTypes, string> = {
    POPULAR: "محبوب ترین",
    NEW: "جدید ترین",
    CHEAP: "ارزان ترین",
    HIGH: "گران ترین",
};

const items: {
    label: string;
    value: string;
}[] = [
    { label: "محبوب ترین", value: "POPULAR" },
    { label: "جدید ترین", value: "NEW" },
    { label: "ارزان ترین", value: "CHEAP" },
    { label: "گران ترین", value: "HIGH" },
];

export function SearchSection() {
    const categoryForm = useFormContext();

    return (
        <FieldGroup className="mb-5 flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-3 sm:flex-row sm:items-center">
            <Controller
                name="term"
                control={categoryForm.control}
                render={({ field, fieldState }) => (
                    <Field
                        orientation="empty"
                        data-invalid={fieldState.invalid}
                        className="flex flex-1 items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 w-full"
                    >
                        <MagnifyingGlassIcon
                            name="search"
                            className="size-4 text-slate-400"
                        />
                        <Input
                            {...field}
                            value={field.value}
                            id="search_form"
                            aria-invalid={fieldState.invalid}
                            placeholder="جستجو میان محصولات..."
                            autoComplete="on"
                            name="search_input"
                            type="text"
                            dir="rtl"
                            required={false}
                            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 border-none ring-0 focus-visible:ring-0"
                        />
                    </Field>
                )}
            />
            <div className="flex items-center gap-2">
                <FilterSectionSm />
                <span className="hidden text-xs text-slate-400 sm:block">
                    مرتب‌سازی:
                </span>
                <Controller
                    name="sort"
                    control={categoryForm.control}
                    render={({ field, fieldState }) => (
                        <Field
                            orientation="empty"
                            data-invalid={fieldState.invalid}
                            className="flex items-center gap-2"
                        >
                            <Select
                                items={items}
                                onValueChange={field.onChange}
                            >
                                <SelectTrigger
                                    id="category"
                                    aria-invalid={fieldState.invalid}
                                    className="data-[size=default]:h-10 sm:data-[size=default]:h-11 rounded-xl sm:w-fit w-full"
                                >
                                    <SelectValue
                                        placeholder={
                                            selectRecords[
                                                field.value as SelectTypes
                                            ]
                                        }
                                    />
                                </SelectTrigger>
                                <SelectContent className="p-2">
                                    <SelectItem value="POPULAR">
                                        محبوب ترین
                                    </SelectItem>
                                    <SelectItem value="NEW">
                                        جدید ترین
                                    </SelectItem>
                                    <SelectItem value="CHEAP">
                                        ارزان ترین
                                    </SelectItem>
                                    <SelectItem value="HIGH">
                                        گران ترین
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </Field>
                    )}
                />
            </div>
        </FieldGroup>
    );
}
