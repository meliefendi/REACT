
import { useState, useEffect, useContext, createContext } from "react";
import { fetchMe } from "../api";

import { Spinner, Flex } from '@chakra-ui/react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const me = await fetchMe();

                setLoggedIn(true);
                setUser(me);
                setLoading(false);

                console.log(me)
            } catch (e) {
                setLoading(false)
            }
        })();
    }, [])

    const login = (data) => {

        setUser(data.user);
        setLoggedIn(true);

        localStorage.setItem("access-token", data.accessToken);
        localStorage.setItem("refresh-token", data.refreshToken);

    };
    const values = {

        login,
        user,
        loggedIn,
    };
    if (loading) {
        return (
            <Flex justifyContent="center" alignItems="center" height="100vh" >
                <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" size="xl" color="red.500"></Spinner>
            </Flex>
        )
    }
    return <AuthContext.Provider value={values} > {children} </AuthContext.Provider>
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };