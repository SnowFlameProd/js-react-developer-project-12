import App from "./components/App";
import React from "react";
import i18next from "i18next";
import {initReactI18next, I18nextProvider} from "react-i18next";
import resources from "./locales";
import AuthProvider from "./providers/authProvider";

const init = async () => {
    const i18n = i18next.createInstance();
    await i18n
        .use(initReactI18next)
        .init({
            resources,
            fallbackLng: 'ru'
        });

    return (
        <AuthProvider>
            <I18nextProvider i18n={i18n}>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </I18nextProvider>
        </AuthProvider>
    );
};

export default init;