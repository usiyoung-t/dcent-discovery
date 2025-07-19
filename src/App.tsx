import Discovery from "./pages/discovery";
import "./App.css";
import { useAppContext } from "./context/useAppContext";
import ToggleSwitch from "./components/ui/ToggleSwitch";

function App() {
  const { changeLanguage, changePlatform, lang, platform } = useAppContext();

  return (
    <>
      <Discovery />

      {/* 언어 변경 토글 스위치 */}
      <div className="fixed top-10 left-10 z-50">
        <ToggleSwitch
          isChecked={lang === "en"}
          onChange={() => changeLanguage(lang === "ko" ? "en" : "ko")}
          labelOn="English"
          labelOff="한국어"
        />
      </div>

      {/* 플랫폼 변경 토글 스위치 */}
      <div className="fixed top-10 z-50 left-30">
        <ToggleSwitch
          isChecked={platform === "ios"}
          onChange={() =>
            changePlatform(platform === "android" ? "ios" : "android")
          }
          labelOn="iOS"
          labelOff="Android"
        />
      </div>
    </>
  );
}

export default App;
