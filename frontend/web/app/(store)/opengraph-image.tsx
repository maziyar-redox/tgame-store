import fs from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { reshapePersian } from "@/shared/lib/persian-reshape";

// Image metadata type
type sizeProps = {
    width: number;
    height: number;
};

// Image metadata
export const size: sizeProps = {
    width: 1200,
    height: 630,
};

// Content type
export const contentType = "image/png";

// Main text
const titleText = reshapePersian("تی گیم شاپ.");
const subtitleText = reshapePersian("صفحه اصلی");
const routeText = reshapePersian("خانه");

// Image generation
export default async function Image() {
    const fontPath = path.join(
        process.cwd(),
        "public/fonts/Vazirmatn-Bold.ttf",
    );
    const fontData = await fs.readFile(fontPath);

    return new ImageResponse(
        <div
            dir="rtl"
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#030915",
                padding: "24px",
            }}
        >
            {/* OG Card Container */}
            <div
                style={{
                    position: "relative",
                    width: "1200px",
                    height: "630px",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "4px",
                    backgroundColor: "#0866ff",
                    boxShadow: "0 28px 80px rgba(0, 0, 0, 0.48)",
                }}
            >
                {/* Ambient Light (Bottom Left) */}
                <div
                    style={{
                        position: "absolute",
                        width: "720px",
                        height: "720px",
                        left: "-360px",
                        bottom: "-470px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        filter: "blur(90px)",
                    }}
                />
                {/* Topbar */}
                <div
                    style={{
                        position: "relative",
                        height: "116px",
                        margin: "0 62px",
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.18)",
                    }}
                >
                    {/* Brand */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                            flexDirection: "row-reverse",
                        }}
                    >
                        <div
                            style={{
                                width: "48px",
                                height: "48px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "15px",
                                backgroundColor: "#fff",
                                boxShadow: "0 9px 24px rgba(0, 45, 130, 0.18)",
                            }}
                        >
                            <svg
                                aria-label="img"
                                role="img"
                                viewBox="0 0 24 24"
                                width="29"
                                height="29"
                                fill="none"
                                stroke="#0866ff"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M8.5 8.5h7c3.35 0 5.62 2.94 6.18 7.02.42 3.08-2.96 4.95-5.02 2.64l-1.48-1.66H8.82l-1.48 1.66c-2.06 2.31-5.44.44-5.02-2.64C2.88 11.44 5.15 8.5 8.5 8.5Z" />
                                <path d="M8 12v3M6.5 13.5h3M16.2 12.6h.01M18 14.4h.01M9.5 8.5 10.3 6h3.4l.8 2.5" />
                            </svg>
                        </div>
                        <span
                            style={{
                                fontSize: "29px",
                                fontWeight: 900,
                                letterSpacing: "-1.3px",
                                color: "white",
                            }}
                        >
                            {titleText}
                        </span>
                    </div>
                    {/* Page Pill */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "10px 17px",
                            border: "1px solid rgba(255, 255, 255, 0.22)",
                            borderRadius: "999px",
                            color: "rgba(255, 255, 255, 0.9)",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            fontSize: "15px",
                            fontWeight: 500,
                        }}
                    >
                        <div
                            style={{
                                width: "7px",
                                height: "7px",
                                borderRadius: "50%",
                                backgroundColor: "#9bffc8",
                                boxShadow:
                                    "0 0 0 5px rgba(155, 255, 200, 0.12)",
                            }}
                        />
                        {subtitleText}
                    </div>
                </div>
                {/* Content */}
                <div
                    style={{
                        position: "relative",
                        flex: 1,
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 0",
                    }}
                >
                    {/* Brand */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                            flexDirection: "column",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "64px",
                                fontWeight: 900,
                                letterSpacing: "-1.3px",
                                color: "white",
                            }}
                        >
                            {routeText}
                        </span>
                    </div>
                </div>
            </div>
        </div>,
        {
            fonts: [
                {
                    name: "Vazirmatn",
                    data: fontData,
                    weight: 900,
                    style: "normal",
                },
            ],
        },
    );
}
