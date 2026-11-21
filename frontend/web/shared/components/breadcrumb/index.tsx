import { Breadcrumb, BreadcrumbList } from "@/shared/components/ui/breadcrumb";

export function BreadcrumbMainSection({
    children,
}: {
    readonly children: React.ReactNode;
}) {
    return (
        <Breadcrumb className="mb-5 text-[11px] text-slate-400">
            <BreadcrumbList>{children}</BreadcrumbList>
        </Breadcrumb>
    );
}
