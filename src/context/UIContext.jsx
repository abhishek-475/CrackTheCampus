import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export function UIProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleTheme = () => setDarkMode((prev) => !prev);
    const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

    return (
        <UIContext.Provider
            value={{
                darkMode,
                toggleTheme,
                mobileMenuOpen,
                toggleMobileMenu,
            }}
        >
            {children}
        </UIContext.Provider>
    );
}

export function useUI() {
    return useContext(UIContext);
}