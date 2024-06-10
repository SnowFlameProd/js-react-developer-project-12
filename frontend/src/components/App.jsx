import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import routes from '../routes/routes';
import useAuth from '../hooks/useAuth';
import { initSocket } from '../functions/manageSocket';

import Header from './Header';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const { loggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    initSocket(dispatch);
  }, [dispatch]);

  const checkAuth = () => (loggedIn ? <MainPage /> : <Navigate to={routes.login} />);

  return (
    <BrowserRouter>
      <div className="h-100 d-flex flex-column">
        <Header />
        <Routes>
          <Route path={routes.root} element={checkAuth()} />
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.others} element={<NotFoundPage />} />
          <Route path={routes.signup} element={<SignUpPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
