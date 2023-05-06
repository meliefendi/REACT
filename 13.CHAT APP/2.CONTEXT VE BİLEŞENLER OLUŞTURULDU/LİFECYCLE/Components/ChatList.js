import React from "react";

import styles from "./styles.module.css";

import {useChat} from "../Context/chatContext"
import ChatItem from "./ChatItem"

//CONTEXTTE VERİLEN VERİLER BURADAN ALINDI VE MAP METODUYLA LİSTELENDİ VE CHATITEM COMPONENTİ İÇERİSİNDEN YANİ ORANIN İÇERİSİNE KURULAN YAPI BURADA GÖSTERİLİYOR.
// SANIRIM BU ŞEKİLDE YAPMAMIZIN SEBEBİ KARIŞIKLIK OLMASIN DİYE. AYRICA BU SAYFA CONTACTS E İEXPORT EDİLİYOR VE BU SAYFA GÖRÜNTÜLENİYOR.

function ChatList() {
    const { message } = useChat();
    return (
        <div className={styles.chatlist}>
            <div>
                {
                    message.map((item, key) => (
                        <ChatItem key={key} item={item} />
                    ))
                }
            </div>
          
        </div>
    )
}

export default ChatList;