import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // resources: {
    //   en: {
    //     translation: {
    //       "welcome": "Welcome to the book store",
    //     }
    //   },
    //   uk: {
    //     translation: {
    //       "welcome": "Ласкаво просимо до книжкового магазину",
    //     }
    //   }
    // },
    // lng: "uk",
    debug: true,
    fallbackLng: "uk",

    interpolation: {
      escapeValue: false
    }
  });
  // i18n.changeLanguage("en")

export default i18n;