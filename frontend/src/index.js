import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import init from "./init";

const app = async () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(await init());
};

app();