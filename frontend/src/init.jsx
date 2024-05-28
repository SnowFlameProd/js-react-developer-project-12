import App from "./components/App";
import React from "react";
import i18next from "i18next";
import {initReactI18next, I18nextProvider} from "react-i18next";
import resources from "./locales";

const init = async () => {
    const i18n = i18next.createInstance();
    await i18n
        .use(initReactI18next)
        .init({
            resources,
            fallbackLng: 'ru'
        });

    return (
        <I18nextProvider i18n={i18n}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </I18nextProvider>
    );
};

export default init;