import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import { getBanners, type Banner } from "./api/banner";
import { getDapps } from "./api/dapps";

function App() {
  const { t, i18n } = useTranslation();
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const fetchBanners = async () => {
    setLoading(true);
    try {
      const banners = await getBanners({ lang: i18n.language });
      setBanners(banners);

      const dapps = await getDapps({
        lang: i18n.language,
        platform: "android",
        env: import.meta.env.VITE_APP_ENV || "development",
      });

      console.log(dapps);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    fetchBanners();
  }, []);

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
            <button
              onClick={fetchBanners}
              disabled={loading}
              className="px-4 py-2 mb-4 w-full text-white bg-indigo-500 rounded transition hover:bg-indigo-600 disabled:opacity-50"
            >
              {loading ? t("loading") : "사용자 목록 새로고침"}
            </button>

            <div className="space-y-2">
              {banners &&
                banners.map((banner) => (
                  <div
                    key={banner.id}
                    className="p-3 bg-gray-50 rounded border"
                  >
                    <p className="font-medium">{banner.id}</p>
                    <p className="font-medium">{banner.image}</p>
                    <p className="font-medium">{banner.link}</p>
                    <p className="font-medium">{banner.buttonText}</p>
                    <p className="text-sm text-gray-600">
                      {banner.description}
                    </p>
                  </div>
                ))}
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
