export function Main() {
    return (
        <section className="relative overflow-hidden rounded-[28px] bg-[#092253] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
            <div className="absolute -left-20 -top-20 size-72 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-24 right-1/3 size-64 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-blue-200">
                    <span className="size-1.5 rounded-full bg-emerald-400" />{" "}
                    پاسخ‌گوی شما هستیم
                </span>
                <h1 className="mt-5 text-3xl font-black sm:text-4xl">
                    بیایید با هم در ارتباط باشیم
                </h1>
                <p className="mt-4 text-sm leading-8 text-blue-100/70 sm:text-base">
                    برای مشاورهٔ خرید، پیگیری سفارش یا هر سؤال دیگری، یکی از
                    راه‌های زیر را انتخاب کنید. تیم تکنو با خوشحالی پاسخ‌گوی
                    شماست.
                </p>
            </div>
        </section>
    );
}
