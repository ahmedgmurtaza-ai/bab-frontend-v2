import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@repo/ui";
import { useAppStore } from "./state/useAppStore";

function App() {
  const { t, i18n } = useTranslation();
  const { language, updateLanguage } = useAppStore();

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    updateLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <div
      className="min-h-screen bg-gray-50 p-4"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-primary-600">
                BAB Internet Banking
              </Link>
              <nav className="ml-6 flex space-x-4">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {t("navigation.home", { defaultValue: "Home" })}
                </Link>
                <Link
                  to="/accounts"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {t("navigation.accounts", { defaultValue: "Accounts" })}
                </Link>
                <Link
                  to="/transfers"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {t("navigation.transfers", { defaultValue: "Transfers" })}
                </Link>
                <Link
                  to="/cards"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {t("navigation.cards", { defaultValue: "Cards" })}
                </Link>
                <Link
                  to="/payments"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {t("navigation.payments", { defaultValue: "Payments" })}
                </Link>
              </nav>
            </div>
            <div className="flex items-center">
              <Button onClick={toggleLanguage} className="mr-2">
                {language === "en" ? "العربية" : "English"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Render child routes here */}
          <div>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
