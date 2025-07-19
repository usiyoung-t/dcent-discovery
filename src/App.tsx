import { useTranslation } from "react-i18next";
import "./App.css";
import useBanners from "./hooks/useBanners";
import useDapps from "./hooks/useDapps";
import { useAppContext } from "./context/useAppContext";
import DappItem from "./components/DappItem";
import type { Dapp } from "./api/dapps";
import { useMemo } from "react";
import Divider from "./components/Divider";

function App() {
  const { t } = useTranslation();

  const { changeLanguage } = useAppContext();
  const {
    data: banners,
    isLoading: isLoadingBanners,
    error: errorBanners,
  } = useBanners();
  const {
    data: dappInfo,
    isLoading: isLoadingDapps,
    error: errorDapps,
    addFavorite,
    deleteFavorite,
  } = useDapps();

  const { favorites, dapps } = useMemo(() => {
    if (!dappInfo) {
      return { favorites: [], dapps: [] };
    }

    const favoriteSet = new Set(dappInfo.favoriteIds);
    const favoritesList: Dapp[] = [];
    const dappsList: Dapp[] = [];

    dappInfo.dapps.forEach((dapp) => {
      if (favoriteSet.has(dapp.id)) {
        favoritesList.push(dapp);
      } else {
        dappsList.push(dapp);
      }
    });

    return { favorites: favoritesList, dapps: dappsList };
  }, [dappInfo]);

  return (
    <div className="">
      <section>
        {favorites.map((dapp) => (
          <>
            <DappItem
              key={dapp.id}
              name={dapp.name}
              iconUrl={dapp.iconUrl}
              description={dapp.linkUrl}
            >
              <button onClick={() => deleteFavorite(dapp.id)}></button>
            </DappItem>
            <Divider />
          </>
        ))}
      </section>

      <section>
        {dapps.map((dapp) => (
          <>
            <DappItem
              key={dapp.id}
              name={dapp.name}
              iconUrl={dapp.iconUrl}
              description={dapp.description}
            />
            <Divider />
          </>
        ))}
      </section>
    </div>
  );
}

export default App;
