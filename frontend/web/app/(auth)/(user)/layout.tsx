// Importing authentication wrapper which is client component
import { AuthenticationLayoutComponent } from "@/features/auth";

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
