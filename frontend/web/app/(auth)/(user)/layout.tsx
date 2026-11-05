import { AuthenticationLayoutWrapper } from "@/features/auth";

export default async function AuthenticationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthenticationLayoutWrapper>{children}</AuthenticationLayoutWrapper>
    );
}
