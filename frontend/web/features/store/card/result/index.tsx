export function SuccessLayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="mx-auto grid min-h-[70vh] max-w-2xl place-items-center px-4 py-12 text-center">
            {children}
        </main>
    );
}
