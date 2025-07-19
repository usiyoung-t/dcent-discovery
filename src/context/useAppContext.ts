import { createContext, useContext } from "react";

interface AppContextType {
  platform: string;
  env: string;
  lang: string;
  changeLanguage: (lang: string) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
