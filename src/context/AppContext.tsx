import { useMemo, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "./useAppContext";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();

  const platform = "android";
  const env = import.meta.env.VITE_APP_ENV || "development";

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const value = useMemo(
    () => ({
      platform,
      env,
      lang: i18n.language,
      changeLanguage,
    }),
    [platform, env, i18n.language]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
