"use client";

import { zodResolver } from "@hookform/resolvers/zod";
// Importing from local Ui
// import { SearchBarButton } from "@/components/navigation/search-bar-button";
// Importing Icons
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
// Importing tw merge
import { cn } from "cn";
import { Controller, useForm } from "react-hook-form";
// Importing hooks
import { useMediaQuery } from "usehooks-ts";
// Importing form utilities
import type * as z from "zod";
// Importing component from local ui components
import { SearchingState } from "@/components/navigation/searching-state";
// Importing From Global Ui Components
import { buttonVariants } from "@/components/ui/button";
// Importing From Global Ui Components
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
// Importing custom schema
import { searchFormSchema } from "@/schema/search-schema";

export function SearchBar() {
    const matches = useMediaQuery("(max-width: 768px)", {
        initializeWithValue: false,
    });
    const form = useForm<z.infer<typeof searchFormSchema>>({
        resolver: zodResolver(searchFormSchema),
        defaultValues: {
            searchTerm: "",
        },
    });
    function onSearch(data: z.infer<typeof searchFormSchema>) {
        console.log(data);
    }
    return (
        <Dialog>
            <DialogTrigger
                render={
                    matches ? (
                        <button
                            type="button"
                            className={cn(
                                "[&_svg:not([class*='fill-'])]:fill-slate-700",
                                buttonVariants({
                                    variant: "icon",
                                    size: "icon-2xl",
                                }),
                            )}
                        >
                            <MagnifyingGlassIcon name="search" />
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="sm:flex items-center gap-2 rounded-xl transition-all border border-slate-200 hover:border-slate-400 bg-white px-3 py-2.5 text-sm hidden lg:w-72"
                        >
                            <input
                                className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-slate-400"
                                placeholder="جستجوی محصول..."
                            />
                        </button>
                    )
                }
            />
            <DialogContent dir="rtl" data-lang="fa" className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>جستجوی محصول</DialogTitle>
                    <DialogDescription>
                        از این قسمت محصول خود را جستجو کنید
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-6">
                    <form id="form-st" onSubmit={form.handleSubmit(onSearch)}>
                        <FieldGroup>
                            <Controller
                                name="searchTerm"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <Input
                                            {...field}
                                            id="form-st-title"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="عبارت خود را جستجو کنید"
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError
                                                errors={[fieldState.error]}
                                            />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                    </form>
                    <SearchingState state="FOUNDED" />
                </div>
            </DialogContent>
        </Dialog>
    );
}
