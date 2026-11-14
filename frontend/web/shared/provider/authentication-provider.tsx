"use client";

import { createContext, type ReactNode, useContext, useState } from "react";
import { useStore } from "zustand";

import {
    type AuthenticationStore,
    createAuthenticationStore,
} from "@/shared/store/authentication-store";

export type AuthenticationStoreApi = ReturnType<
    typeof createAuthenticationStore
>;

export const AuthenticationStoreContext = createContext<
    AuthenticationStoreApi | undefined
>(undefined);

export interface AuthenticationStoreProviderProps {
    children: ReactNode;
}

export const AuthenticationStoreProvider = ({
    children,
}: AuthenticationStoreProviderProps) => {
    const [store] = useState(() => createAuthenticationStore());
    return (
        <AuthenticationStoreContext.Provider value={store}>
            {children}
        </AuthenticationStoreContext.Provider>
    );
};

export const useAuthenticationStore = <T,>(
    selector: (store: AuthenticationStore) => T,
): T => {
    const authenticationStoreContext = useContext(AuthenticationStoreContext);
    if (!authenticationStoreContext) {
        throw new Error(
            `useAuthenticationStore must be used within AuthenticationStoreProvider`,
        );
    }

    return useStore(authenticationStoreContext, selector);
};
