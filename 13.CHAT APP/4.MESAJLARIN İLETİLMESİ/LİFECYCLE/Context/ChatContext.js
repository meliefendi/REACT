
import { createContext, useState, useContext } from "react";

const ChatContext = createContext();

export const ChatProvider = ( {children} ) =>{
    const [ messages, setMesssages] = useState([])

    const values = {
        messages,
        setMesssages
    }

    return(
        <ChatContext.Provider value={values}>
            { children }
        </ChatContext.Provider>
    )
}

export const useChat = () => useContext(ChatContext)