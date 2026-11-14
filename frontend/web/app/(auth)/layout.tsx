import { AuthenticationStoreProvider } from "@/shared/provider/authentication-provider";

export default async function AuthenticationWrapperLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthenticationStoreProvider>{children}</AuthenticationStoreProvider>
    );
}
