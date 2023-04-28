// BURADA BİRDEN FAZLA CONTEXT YAPISININ KURULDUĞUNU İŞLİYORUZ VE AYNI AMACA YÖNELİK CONTEXTLERİN KULLANIMINI VE NASIL YAPILDIĞINI GÖRÜYORUZ.
import { createContext, useState } from "react";

const UserContext = createContext();

// bu contextin amacı user bilgilerini aktarmak 
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
}

export default UserContext;