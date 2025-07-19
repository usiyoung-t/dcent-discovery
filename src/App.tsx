import { useTranslation } from "react-i18next";
import "./App.css";
import useBanners from "./hooks/useBanners";
import useDapps from "./hooks/useDapps";
import { useAppContext } from "./context/useAppContext";
import DappItem from "./components/DappItem";
import type { Dapp } from "./api/dapps";
import { useMemo } from "react";
import Divider from "./components/Divider";
import { BookMarkButton } from "./components/BookMark";
import Carousel from "./components/Carousel";
import { SwiperSlide } from "swiper/react";
import { DAPP_ICON_URL } from "./constants";

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
    <>
      <Carousel>
        {banners?.map((banner) => (
          <SwiperSlide key={banner.id}>
            <a href={banner.link} target="_blank" rel="noopener noreferrer">
              <div className="relative h-48 text-white bg-gray-800">
                <img
                  src={DAPP_ICON_URL + banner.image}
                  alt={banner.description || ""}
                  className="object-cover w-full h-full opacity-80"
                />
                <div className="flex absolute inset-0 flex-col justify-center items-start p-5 w-90">
                  {banner.description && (
                    <p className="mb-4 text-xl font-normal">
                      {banner?.description}
                    </p>
                  )}
                  {banner.buttonText && (
                    <button className="px-6 py-2 font-bold text-black bg-white rounded-full">
                      {banner.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Carousel>

      <div className="p-5 px-6 mt-4">
        {favorites.length > 0 && (
          <section className="mb-8">
            <span className="text-lg font-normal text-gray-600">
              {t("dapp_favorite_title")}
            </span>
            <Divider />

            {favorites.map((dapp) => (
              <div key={dapp.id}>
                <DappItem
                  name={dapp.name}
                  iconUrl={dapp.iconUrl}
                  description={dapp.linkUrl}
                >
                  <BookMarkButton onClick={() => deleteFavorite(dapp.id)} />
                </DappItem>
                <Divider />
              </div>
            ))}
          </section>
        )}

        <section>
          <span className="text-lg font-normal text-gray-600">
            {t("dapp_list_title")}
          </span>
          <Divider />
          {dapps.map((dapp) => (
            <div key={dapp.id}>
              <DappItem
                name={dapp.name}
                iconUrl={dapp.iconUrl}
                description={dapp.description}
              />
              <Divider />
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
