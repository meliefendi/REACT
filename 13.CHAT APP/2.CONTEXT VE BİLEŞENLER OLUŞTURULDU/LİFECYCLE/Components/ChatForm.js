import { useState } from "react";

import styles from "./styles.module.css"

//FROM SAYFASI INPUTUN BULUNDUĞU SAYFA BURYAA GİRİLEN VERİ CONTEXT ARACILIĞI İLE CHALİST SAYFASINA AKTARILIYOR VE ORADA LİSTELENİP CHATİTEM SAYFASI ARACILIĞIYLA 
// GÖRÜNTÜLEME SAĞLANIYOR.


function ChatForm() {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(message)

        setMessage("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                className={styles.textInput}
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                />

              
            </form>
        </div>
    )
}

export default ChatForm;