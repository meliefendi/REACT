
import { createContext, useState } from "react";

const CreateContext = createContext();

export const CreateProvider = ({ children }) => {
    const [ theme, setTheme] = useState("dark");

    const values = {
        theme,
        setTheme
    }
    
    return (
        <div>
            <CreateContext.Provider value={values}>
                {children}
            </CreateContext.Provider>
        </div>
    )
}

export default CreateContext;