import { useTranslation } from "react-i18next";
import "./App.css";
import useBanners from "./hooks/useBanners";
import useDapps from "./hooks/useDapps";
import { useAppContext } from "./context/useAppContext";

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

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-blue-600">
            {t("app_title")}
          </h1>
          <div className="flex gap-4 justify-center mb-4">
            <button
              onClick={() => changeLanguage("ko")}
              className="px-4 py-2 text-white bg-blue-500 rounded transition hover:bg-blue-600"
            >
              한국어
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="px-4 py-2 text-white bg-green-500 rounded transition hover:bg-green-600"
            >
              English
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* API 호출 섹션 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">MSW API 예제</h2>

            <div className="space-y-2">
              {isLoadingBanners && <p>Loading...</p>}
              {errorBanners && <p>Error: {errorBanners.message}</p>}

              <div>
                {banners?.map((banner) => (
                  <div key={banner.description}>{banner.description}</div>
                ))}
              </div>

              {isLoadingDapps && <p>Loading...</p>}
              {errorDapps && <p>Error: {errorDapps.message}</p>}

              <div>
                {dappInfo?.dapps.map((dapp) => (
                  <div key={dapp.name}>{dapp.description}</div>
                ))}
              </div>

              <button onClick={() => addFavorite("opensea")}>
                Add Favorite
              </button>
              <button onClick={() => deleteFavorite("opensea")}>
                Delete Favorite
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-8 text-center text-gray-600">
          <p>
            {t("welcome")} - Vite + React + TypeScript + Tailwind + MSW +
            i18next
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
