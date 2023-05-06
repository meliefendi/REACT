
import { createContext, useState, useContext } from "react";

const ChatContext = createContext();

export const ChatProvider = ( {children} ) =>{
    const [ message, setMesssage] = useState([ {message:"Selam"}, {message:"Naber"} ])

    const values = {
        message,
        setMesssage
    }

    return(
        <ChatContext.Provider value={values}>
            { children }
        </ChatContext.Provider>
    )
}

export const useChat = () => useContext(ChatContext)