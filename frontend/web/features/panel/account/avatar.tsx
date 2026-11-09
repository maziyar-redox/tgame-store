// Importing from local ui

// Importing icons
import { CameraPlusIcon } from "@phosphor-icons/react";
// Importing next utils
import Image from "next/image";
// Importing react utils
import { useEffect, useState } from "react";
// Importing from context
import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldError, FieldGroup } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";

export function Avatar() {
    const accountForm = useFormContext();

    const [preview, setPreview] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    return (
        <div className="border-b border-slate-100 p-5 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="relative mx-auto shrink-0 sm:mx-0">
                    <span className="grid size-24 place-items-center overflow-hidden rounded-full bg-linear-to-br from-blue-50 to-blue-100 text-2xl font-black text-primary ring-4 ring-white shadow-lg shadow-blue-100">
                        {preview ? (
                            <Image
                                src={preview}
                                alt="تصویر پروفایل"
                                width={200}
                                height={200}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            "ع"
                        )}
                    </span>
                    <FieldGroup>
                        <Controller
                            name="avatar"
                            control={accountForm.control}
                            render={({ field, fieldState }) => (
                                <Field
                                    data-invalid={fieldState.invalid}
                                    className="absolute -bottom-1 -left-1 grid size-9 cursor-pointer place-items-center rounded-full bg-primary text-white shadow-lg ring-4 ring-white"
                                    aria-label="افزودن تصویر پروفایل"
                                >
                                    <CameraPlusIcon
                                        name="camera"
                                        className="size-4"
                                    />
                                    <Input
                                        type="file"
                                        name={field.name}
                                        ref={field.ref}
                                        onBlur={field.onBlur}
                                        accept="image/png,image/jpeg,image/webp"
                                        onChange={(event) => {
                                            const files = event.target.files;
                                            field.onChange(files);
                                            handleFileChange(event);
                                        }}
                                        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
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
                </div>
                <div className="text-center sm:text-right">
                    <b className="text-sm">تصویر پروفایل</b>
                    <p className="mt-1 text-[10px] leading-5 text-slate-400">
                        تصویر JPG، PNG یا WebP با حجم مناسب انتخاب کنید.
                    </p>
                </div>
            </div>
        </div>
    );
}
