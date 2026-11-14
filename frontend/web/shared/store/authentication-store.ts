// Nextjs well suited authentication for managing authentication and storing data in memory
// The codes below shows creation and using states, Functions, setter and getters

import { createStore } from "zustand/vanilla";

export type AuthenticationState = {
    phoneNumber: string | null;
    countDown: number;
};

export type AuthenticationActions = {
    setPhoneNumber: (phoneNumber: string) => void;
    setCountDown: (countDown: number) => void;
};

export type AuthenticationStore = AuthenticationState & AuthenticationActions;

export const defaultInitState: AuthenticationState = {
    phoneNumber: null,
    countDown: 0,
};

export const createAuthenticationStore = (
    initState: AuthenticationState = defaultInitState,
) => {
    return createStore<AuthenticationStore>()((set) => ({
        ...initState,
        setPhoneNumber: (phoneNumber) =>
            set((_state) => ({ phoneNumber: phoneNumber })),
        setCountDown: (countDown) => set((_set) => ({ countDown: countDown })),
    }));
};
