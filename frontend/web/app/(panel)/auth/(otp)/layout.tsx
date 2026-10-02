// Importing authentication wrapper which is client component

import { AuthenticationLayoutOtpComponent } from "@/components/panel/otp";

export default function AuthenticationOtpLayout({
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
