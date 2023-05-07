import { useEffect } from "react";

import ChatForm from "./ChatForm";
import ChatList from "./ChatList";

//MESAJLARI DİĞER BAĞLI SAYFALARDA AKTARIP GÖSTERMEK İÇİN
import { useChat } from "../Context/ChatContext";


//SOCKET APİDEN ALMIŞ OLDUĞUMUZ FONKSİYONLARI EKLİYORUZ VE ÇALIŞTIRIYORUZ.// BURAYA KADAR YAPMIŞ OLDUĞUMUZ İŞLEMLE MESAJI YOLLUYORUZ VE MESAJ HEM BİZİM SAYFADA HEM 
// BULUNDUĞUMUZ SAYFANIN KONSOLUNDA VE AÇMIŞ OLDUĞUMUZ DİĞER AYNI LOCALHOSTA SAHİP SAYAFNIN KONSOLUNDA VE AYRICA CMD ÜZERİNDE GÖRÜNTÜLENMEKTE.
import { init, subscribeChat } from "../socketApi";

function Contacts(){
    const { setMesssages } = useChat();

    useEffect(() =>{
        init();

        // subscribeChat();burasıyla 3.yorumdaki işlem yapıldı.
        // BURAYLA İSE BU METODA YOLLANAN MESAJ DİĞER BAĞLI SAYFALARDA DA GÖRÜNTÜLENDİ.
        subscribeChat((message) => {
            setMesssages((prevState) => [...prevState, { message, fromMe:true }]);
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