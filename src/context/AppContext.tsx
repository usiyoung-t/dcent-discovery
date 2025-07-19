import { useMemo, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "./useAppContext";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();

  const [platform, setPlatform] = useState("android");
  const env = import.meta.env.VITE_APP_ENV || "development";

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const changePlatform = (platform: string) => {
    setPlatform(platform);
  };

  const value = useMemo(
    () => ({
      platform,
      env,
      lang: i18n.language,
      changeLanguage,
      changePlatform,
    }),
    [platform, env, i18n.language]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
