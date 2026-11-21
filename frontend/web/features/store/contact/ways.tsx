import { EnvelopeIcon } from "@phosphor-icons/react";

export function Ways() {
    return (
        <section className="-mt-5 grid gap-3 px-3 sm:grid-cols-2 lg:grid-cols-4 lg:px-7">
            {[
                ["تلفن پشتیبانی", "۰۲۱-۹۱۰۰ ۲۴۰۰", "شنبه تا پنج‌شنبه، ۸ تا ۲۲"],
                ["ایمیل", "hello@techno.ir", "پاسخ‌گویی حداکثر تا ۲۴ ساعت"],
                ["گفت‌وگوی آنلاین", "شروع گفت‌وگو", "همین حالا آنلاین هستیم"],
                ["دفتر مرکزی", "تهران، میدان ونک", "مراجعه با هماهنگی قبلی"],
            ].map(([icon, title, value, detail]) => (
                <article
                    key={title}
                    className="relative rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_12px_35px_rgba(15,46,100,.08)]"
                >
                    <span className="grid size-10 place-items-center rounded-xl bg-blue-50 text-primary">
                        <EnvelopeIcon name={icon} className="size-5" />
                    </span>
                    <h2 className="mt-4 text-xs font-bold text-slate-400">
                        {title}
                    </h2>
                    <b
                        dir={
                            icon === "phone" || icon === "mail" ? "ltr" : "rtl"
                        }
                        className="mt-1 block text-sm text-slate-800"
                    >
                        {value}
                    </b>
                    <p className="mt-2 text-[10px] leading-5 text-slate-400">
                        {detail}
                    </p>
                </article>
            ))}
        </section>
    );
}
