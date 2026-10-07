// biome-ignore-all lint: This file contains generated code

"use client";

import {
    CheckCircleIcon,
    InfoIcon,
    SpinnerIcon,
    WarningIcon,
    XIcon,
} from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme();

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            className="toaster group"
            icons={{
                success: <CheckCircleIcon className="size-4" />,
                info: <InfoIcon className="size-4" />,
                warning: <WarningIcon className="size-4" />,
                error: <XIcon className="size-4" />,
                loading: <SpinnerIcon className="size-4 animate-spin" />,
            }}
            style={
                {
                    "--normal-bg": "#e2e8f0",
                    "--normal-text": "#092253",
                    "--normal-border": "#cbd5e1",
                    "--border-radius": "18px",
                } as React.CSSProperties
            }
            toastOptions={{
                classNames: {
                    toast: "cn-toast",
                },
            }}
            {...props}
        />
    );
};

export { Toaster };
