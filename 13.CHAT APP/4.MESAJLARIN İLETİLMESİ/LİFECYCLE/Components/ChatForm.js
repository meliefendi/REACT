import { useState } from "react";

import styles from "./styles.module.css"

//SOCKETAPİ SAYFASI BAĞLANTISI VERİLDİ. 
import { sendMessage } from "../socketApi";

//GÖNDERİLEN MESAJLARIN GÖRÜNTÜLEMESİNİ YAPMAK İÇİN MESAJLARI İÇERİSİNE YOLLADIĞIMIZ STATİ BURAYA ÇEKMEMİZ LAZIM Kİ GÖRÜNTÜLEME İŞLEMİ YAPILAN SAYFADA GÖRÜNTLEYEBİLELİM.
// BUNUN İÇİN CONTEXT SAYFASINI BURAYA İMPORT EDİYORUZ.ÇÜNKÜ GÖNDERİLEN MESAJLAR O SAYFA İÇERİSİNDEKİ STATE İÇERİSİNE YAZILMAKTA.
import { useChat } from "../Context/ChatContext"

function ChatForm() {
    const [message, setMessage] = useState("");

    //CONTEXT SAYFASINDAN ALINAN STATİ KULLANMAK İÇİN SAYFAMIZA ÇEKME İŞLEMİNİ YAPIYORUZ.
    const { setMesssages } = useChat();

    const handleSubmit = (e) => {
        e.preventDefault()

        //CONTEXTTEN ÇEKİLEN STATİ BAĞLIYORUZ VE İÇERİSİNE ÖNCEKİ YAZILARI VE SONRADAN EKLENECEK MESJALARI ATIYORUZ. TÜM YOLLADIĞIMIZ MESAJLARIN GÖRÜNTÜLEMESİNİ
        // YAPMAK İÇİN.
        setMesssages((prevState) => [...prevState, { message, fromMe: true }])
        
        
        console.log(message)
        sendMessage(message) //BURADAN SUBMİT EDİLEN VERİ SOCKETAPİ BAĞLANTISI SAYESİNDE BACKEND ÜZERİNE REDİS ÜZERİNE YAZILIYOR.(BACKEND SAYFASINA BAĞLANTI KURUYOR ORDAKİ
        // ORDAKİ İNDEX.JS SAYFASIYLA BAĞLANTI KURUYOR. KOMUTLAR ORDAN DAĞITILIYOR.) 

        setMessage("");

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.textInput}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />


            </form>
        </div>
    )
}

export default ChatForm;
