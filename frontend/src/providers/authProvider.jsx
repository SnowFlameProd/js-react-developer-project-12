import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthContext from '../contexts/authContext';
import { actions as authActions } from '../store/slices/authSlice';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const [loggedIn, setLoggedIn] = useState(!!token);

  const logIn = (data) => {
    setLoggedIn(true);
    dispatch(authActions.login(data));
  };

  const logOut = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
    dispatch(authActions.logout());
  };

  const context = useMemo(() => ({
    loggedIn,
    logIn,
    logOut,
  }), [loggedIn]);

  return (
    <AuthContext.Provider value={context}>
      { children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;
