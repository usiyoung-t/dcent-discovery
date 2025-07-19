import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import useBanners from "./hooks/useBanners";
import useDapps from "./hooks/useDapps";

function App() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);

  const {
    data: banners,
    isLoading: isLoadingBanners,
    error: errorBanners,
  } = useBanners(i18n.language);
  const {
    data: dappInfo,
    isLoading: isLoadingDapps,
    error: errorDapps,
  } = useDapps(
    i18n.language,
    "android",
    import.meta.env.VITE_APP_ENV || "development"
  );

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  console.log(banners, dappInfo);

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
          {/* Counter 섹션 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Counter 예제</h2>
            <div className="text-center">
              <p className="mb-4 text-6xl font-bold text-purple-600">{count}</p>
              <button
                onClick={() => setCount(count + 1)}
                className="px-6 py-3 text-lg text-white bg-purple-500 rounded-lg transition hover:bg-purple-600"
              >
                증가
              </button>
            </div>
          </div>

          {/* API 호출 섹션 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">MSW API 예제</h2>

            <div className="space-y-2">
              {isLoadingBanners && <p>Loading...</p>}
              {errorBanners && <p>Error: {errorBanners.message}</p>}

              <div>
                {banners?.map((banner) => (
                  <div key={banner.id}>{banner.id}</div>
                ))}
              </div>

              {isLoadingDapps && <p>Loading...</p>}
              {errorDapps && <p>Error: {errorDapps.message}</p>}

              <div>
                {dappInfo?.dapps.map((dapp) => (
                  <div key={dapp.id}>{dapp.id}</div>
                ))}
              </div>
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
