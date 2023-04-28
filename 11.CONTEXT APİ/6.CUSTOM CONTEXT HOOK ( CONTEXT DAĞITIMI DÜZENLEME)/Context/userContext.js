
import { createContext, useContext, useState } from "react";

const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const userValues = {
        user,
        setUser
    }

    return (
        <div>
            <UserContext.Provider value={userValues}>
                {children}
            </UserContext.Provider>

        </div>
    )
};

export const useUserContext = () => useContext(UserContext)

