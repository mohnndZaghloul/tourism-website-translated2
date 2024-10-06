import i18next from "i18next";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import cookies from "js-cookie";

const Nav = () => {
  const { t } = useTranslation();
  const lang = cookies.get("i18next") || "en";
  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [lang]);

  return (
    <header>
      <nav className="z-50 fixed top-0 w-full bg-gradient-to-br from-primary-200 to-primary-100 text-darkText py-5">
        <div className="container flex justify-between items-center">
          <div className="text-xl md:text-3xl font-bold uppercase">
            ELNAHAR tours
          </div>
          <div>
            <ul className="flex justify-between gap-x-8 items-center capitalize text-lg font-thin">
              <li className="hover:scale-105 transition">
                <a href="#">{t("home")}</a>
              </li>
              <li className="hover:scale-105 transition">
                <a href="#">{t("about")}</a>
              </li>
              <li className="hover:scale-105 transition">
                <a href="#">{t("services")}</a>
              </li>
              <li
                className="divide-x-2 divide-primary-200 border border-primary-200 rounded"
                dir="ltr">
                <button
                  onClick={() => {
                    i18next.changeLanguage("ar");
                  }}
                  className="text-darkText rounded px-4 py-1 active:bg-darkText hover:bg-darkText hover:text-lightText transition">
                  Ar
                </button>
                <button
                  onClick={() => {
                    i18next.changeLanguage("en");
                  }}
                  className="text-darkText rounded px-4 py-1 active:bg-darkText hover:bg-darkText hover:text-lightText transition">
                  En
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
