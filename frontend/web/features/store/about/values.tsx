import { cn } from "cn";
import { AboutPageValuesSection } from "@/shared/constants/about";

export function ValuesSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-bold text-primary">
                    چیزی که به آن باور داریم
                </p>
                <h2 className="mt-2 text-2xl font-black text-brand-navy sm:text-3xl">
                    ارزش‌هایی که مسیر ما را می‌سازند
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                    برای ما فروش پایان یک رابطه نیست؛ شروع همراهی تکنو با شماست.
                </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
                {AboutPageValuesSection.map((items) => (
                    <article
                        key={items.title}
                        className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_10px_35px_rgba(15,46,100,.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(15,46,100,.08)]"
                    >
                        <span
                            className={cn(
                                "grid size-12 place-items-center rounded-2xl",
                                items.shade,
                            )}
                        >
                            <items.Icon
                                name={items.iconName}
                                weight="regular"
                                className="size-6"
                            />
                        </span>
                        <h3 className="mt-5 font-black text-slate-800">
                            {items.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-500">
                            {items.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
