import AuthContext from "../contexts/authContext";
import {useMemo, useState} from "react";

const AuthProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(() => {
        const userLoggedIn = localStorage.getItem('user');
        return !!userLoggedIn;
    });

    const logIn = () => setLoggedIn(true);

    const logOut = () => {
        localStorage.removeItem('user');
        setLoggedIn(false);
    }

    const context = useMemo(() => ({
        loggedIn,
        logIn,
        logOut
    }), [loggedIn]);

    return (
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;