// Nextjs well suited navigation for managing opening or closing menu button in navigation menu
// The codes below shows creation and using states, Functions, setter and getters

import { createStore } from "zustand/vanilla";

export type NavigationState = {
    isOpen: boolean;
};

export type NavigationActions = {
    setIsOpen: (isOpen: boolean) => void;
};

export type NavigationStore = NavigationState & NavigationActions;

export const defaultInitState: NavigationState = {
    isOpen: false,
};

export const createNavigationStore = (initState: NavigationState = defaultInitState) => {
    return createStore<NavigationStore>()((set) => ({
        ...initState,
        setIsOpen: (isOpen) => set((state) => ({ isOpen: isOpen })),
    }));
};