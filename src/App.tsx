import Discovery from "./pages/discovery";
import "./App.css";
import { useAppContext } from "./context/useAppContext";

function App() {
  const { changeLanguage, changePlatform, lang, platform } = useAppContext();

  return (
    <>
      <Discovery />

      <button
        className="fixed top-10 left-10 z-50 px-4 py-2 text-white bg-blue-500 rounded-md"
        onClick={() => {
          changeLanguage(lang === "ko" ? "en" : "ko");
        }}
      >
        {lang === "ko" ? "English" : "한국어"}
      </button>

      <button
        className="fixed top-20 left-40 z-50 px-4 py-2 text-white bg-blue-500 rounded-md"
        onClick={() =>
          changePlatform(platform === "android" ? "ios" : "android")
        }
      >
        {platform === "android" ? "ios" : "android"}
      </button>
    </>
  );
}

export default App;
