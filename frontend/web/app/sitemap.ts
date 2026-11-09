import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://tgame1store.ir",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: "https://tgame1store.ir/categories",
            lastModified: new Date(),
            changeFrequency: "hourly",
            priority: 0.9,
        },
        {
            url: "https://tgame1store.ir/login",
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 0.7,
        },
        {
            url: "https://tgame1store.ir/register",
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 0.7,
        },
    ];
}
