import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: [
                    "Googlebot",
                    "googlebot-image",
                    "googlebot-mobile",
                    "MSNBot",
                    "Slurp",
                    "yahoo-mmcrawler",
                    "Teoma",
                    "Gigabot",
                    "Robozilla",
                    "Nutch",
                    "ia_archiver",
                    "baiduspider",
                    "naverbot",
                    "psbot",
                ],
                allow: [""],
                disallow: ["/panel/*"],
                crawlDelay: 5,
            },
        ],
        sitemap: "https://tgame1store.ir/sitemap.xml",
    };
}
