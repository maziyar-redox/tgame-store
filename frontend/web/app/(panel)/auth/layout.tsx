// Importing authentication wrapper which is client component
import { AuthenticationLayoutComponent } from "@/components/panel/auth";

export default function AuthenticationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthenticationLayoutComponent>
            {children}
        </AuthenticationLayoutComponent>
    );
}
