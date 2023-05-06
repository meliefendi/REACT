import { useEffect } from "react";

import ChatForm from "./ChatForm";
import ChatList from "./ChatList";


//SOCKETAPİ SAYFASINDAKİ KURMUŞ OLDUĞUMUZ BACKEND BAĞLANTISINI BURAYA BAĞLIYORUZ.SANIRIM SAYFALAR BURDAN YÜKLENDİĞİ İÖİN BURAYA YAPTIK.
import { init } from "../socketApi";

function Contacts(){

    useEffect(() =>{
        init();
    }, []);
    return(
        <div className="App">

            
            <ChatList/>
            <ChatForm/>

        </div>
    )
}

export default Contacts;