import { useEffect } from "react";

import ChatForm from "./ChatForm";
import ChatList from "./ChatList";

import { useChat } from "../Context/ChatContext";



import { init, subscribeChat, subscribeInıtalMessages } from "../socketApi";

function Contacts(){
    const { setMesssages } = useChat();

    useEffect(() =>{
        init();

        //BURDA SOKETAPİDE YAZMIŞ OLDUĞUMUZ VERİYİ ÇEKİYORUZ GÖRÜNTÜLEME İŞLEMİNİ YAPMAK İÇİN VE ESKİ MESAJLARI DA GÖRÜNTÜLEMEK İÇİN.
        subscribeInıtalMessages((messages) =>{
            setMesssages(messages);
        })

        subscribeChat((message) => {
            setMesssages((prevState) => [...prevState, { message }]);
        })
    }, []);
    return(
        <div className="App">

            
            <ChatList/>
            <ChatForm/>

        </div>
    )
}

export default Contacts;