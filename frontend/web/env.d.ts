// env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
        BASE_API_URL: string;
        MAIN_PAGE_BANNER: string;
        MAIN_PAGE_TERMS: string;
        S3_BUCKET_URL: string;

        NEXT_PUBLIC_MAIN_PAGE_BANNER: string;
        NEXT_PUBLIC_MAIN_PAGE_TERMS: string;
        NEXT_PUBLIC_S3_BUCKET_URL: string;
    }
}
