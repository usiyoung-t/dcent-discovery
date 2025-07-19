import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./App.css";

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const { t, i18n } = useTranslation();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get<User[]>("/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("사용자 조회 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            {t("app_title")}
          </h1>
          <div className="flex justify-center gap-4 mb-4">
            <button
              onClick={() => changeLanguage("ko")}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              한국어
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              English
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Counter 섹션 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Counter 예제</h2>
            <div className="text-center">
              <p className="text-6xl font-bold text-purple-600 mb-4">{count}</p>
              <button
                onClick={() => setCount(count + 1)}
                className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition text-lg"
              >
                증가
              </button>
            </div>
          </div>

          {/* API 호출 섹션 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">MSW API 예제</h2>
            <button
              onClick={fetchUsers}
              disabled={loading}
              className="w-full mb-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 disabled:opacity-50 transition"
            >
              {loading ? t("loading") : "사용자 목록 새로고침"}
            </button>

            <div className="space-y-2">
              {users.map((user) => (
                <div key={user.id} className="p-3 bg-gray-50 rounded border">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="text-center mt-8 text-gray-600">
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
