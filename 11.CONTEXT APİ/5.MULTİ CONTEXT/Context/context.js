
import { createContext, useState, useEffect } from "react";

const CreateContext = createContext();

export const CreateProvider = ({ children }) => {
    // burada da localstorage ile son kullanılan veriyi depoladık ve sayfa yenilenince de varsayılan olarak değerin değişmemesini sağladık.
    const [ theme, setTheme] = useState( localStorage.getItem("tema"));

    const values = {
        theme,
        setTheme
    }

    useEffect(() =>{
        localStorage.setItem("tema" , theme)
    }, [theme])

    return (
        <div>
            <CreateContext.Provider value={values}>
                {children}
            </CreateContext.Provider>
        </div>
    )
}

export default CreateContext;
