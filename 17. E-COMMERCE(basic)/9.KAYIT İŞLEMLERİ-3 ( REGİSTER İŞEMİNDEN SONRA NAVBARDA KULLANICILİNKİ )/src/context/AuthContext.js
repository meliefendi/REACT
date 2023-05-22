
import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ loggedIn, setLoggedIn ] = useState(false);

    const login = ( data ) =>{
        
        setUser(data.user);
        setLoggedIn(true);

    };
    const values = {

        login,
        user,
        loggedIn,
    };
    return <AuthContext.Provider value={values} > {children} </AuthContext.Provider>
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };