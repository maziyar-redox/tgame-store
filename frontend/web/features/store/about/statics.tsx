export function Statics() {
    return (
        <section className="border-y border-slate-100 bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
                {[
                    ["+۵۰ هزار", "مشتری همراه"],
                    ["+۱۲ هزار", "کالای ارسال‌شده"],
                    ["+۲۵۰", "برند معتبر"],
                    ["۴.۸ از ۵", "رضایت مشتریان"],
                ].map(([number, label]) => (
                    <div
                        key={label}
                        className="border-slate-100 px-3 py-4 text-center even:border-r lg:border-r lg:first:border-r-0"
                    >
                        <b className="block text-2xl font-black text-[#092253] sm:text-3xl">
                            {number}
                        </b>
                        <span className="mt-2 block text-xs text-slate-400">
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
