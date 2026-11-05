import { AuthenticationLayoutOtpComponent } from "@/features/auth/otp";

export default async function AuthenticationOtpLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthenticationLayoutOtpComponent>
            {children}
        </AuthenticationLayoutOtpComponent>
    );
}
