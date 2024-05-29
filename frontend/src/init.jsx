import App from "./components/App";
import React from "react";
import i18next from "i18next";
import {initReactI18next, I18nextProvider} from "react-i18next";
import resources from "./locales";
import AuthProvider from "./providers/authProvider";
import { Provider } from 'react-redux';
import store from './store/index';

const init = () => {
    const i18n = i18next.createInstance();
    i18n
        .use(initReactI18next)
        .init({
            resources,
            fallbackLng: 'ru'
        });

    return (
        <Provider store={store}>
            <AuthProvider>
                <I18nextProvider i18n={i18n}>
                    <App />
                </I18nextProvider>
            </AuthProvider>
        </Provider>
    );
};

export default init;