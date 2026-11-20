import { digitsEnToFa } from "@persian-tools/persian-tools";
import { AboutPageStaticsSection } from "@/shared/constants/about";

export function StaticsSection() {
    return (
        <section className="border-y border-slate-100 bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
                {AboutPageStaticsSection.map((items) => (
                    <div
                        key={items.header}
                        className="border-slate-100 px-3 py-4 text-center even:border-r lg:border-r lg:first:border-r-0"
                    >
                        <b className="block text-2xl font-black text-brand-navy sm:text-3xl">
                            {digitsEnToFa(items.header)}
                        </b>
                        <span className="mt-2 block text-xs text-slate-400">
                            {items.sub}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
