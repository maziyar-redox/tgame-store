"use client";

import { createContext, type ReactNode, useContext, useState } from "react";
import { useStore } from "zustand";

import {
    createNavigationStore,
    type NavigationStore,
} from "@/store/navigation-store";

export type NavigationStoreApi = ReturnType<typeof createNavigationStore>;

export const NavigationStoreContext = createContext<
    NavigationStoreApi | undefined
>(undefined);

export interface NavigationStoreProviderProps {
    children: ReactNode;
}

export const NavigationStoreProvider = ({
    children,
}: NavigationStoreProviderProps) => {
    const [store] = useState(() => createNavigationStore());
    return (
        <NavigationStoreContext.Provider value={store}>
            {children}
        </NavigationStoreContext.Provider>
    );
};

export const useNavigationStore = <T,>(
    selector: (store: NavigationStore) => T,
): T => {
    const navigationStoreContext = useContext(NavigationStoreContext);
    if (!navigationStoreContext) {
        throw new Error(
            `useNavigationStore must be used within NavigationStoreProvider`,
        );
    }

    return useStore(navigationStoreContext, selector);
};
