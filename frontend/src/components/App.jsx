import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Header from "./Header";
import NotFoundPage from "./pages/NotFoundPage";
import routes from "../routes/routes";

const App = () => {
    return (
        <BrowserRouter>
            <div className="h-100 d-flex flex-column">
                <Header />
                <div className="d-flex h-100 align-items-center justify-content-center">
                    <Routes>
                        <Route path={routes.root} element={<Navigate to={routes.login}/>} />
                        <Route path={routes.login} element={<LoginPage />} />
                        <Route path={routes.others} element={<NotFoundPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
