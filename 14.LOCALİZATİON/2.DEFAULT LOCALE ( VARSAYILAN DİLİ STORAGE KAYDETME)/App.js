import "./App.css";

import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage } from 'react-intl'

const message = {
    "tr-TR": {
        title: "Merhaba Dünya",
        description: "3 yeni mesaj var"
    },
    "en-US": {
        title: "Hello World",
        description: " You have 3 new mesaage"
    }
}

//BURDA DA BROWSERIN VARSAYILAN DİLİNİ İLK OLARAK PROJEMİZE ENTEGRE ETİİK FAKAT HOCANIN EN BENİM TR OLARAK GEÇİYOR ZATEN FARKETMEZ EN NİHAYETİNDE ÖNEMLİ OLAN MANTIĞINI 
// ANLAMAM. AYRICA VARSAYILAN DİLİ LOCALSTORAGE E ATTIK. 
function App() {
    const isLocale = localStorage.getItem("lang")
    const defaultLocale = isLocale ? isLocale : navigator.language;
    const [lang, setLang] = useState(defaultLocale)

    //YUKARIDA YAZANLA BU AŞAĞIDAKİ AYNI İŞLEVİ GÖRMEKTE 
    //const [lang, setLang] = useState(localStorage.getItem("lang"));

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    return (
        <div className="App">

            <IntlProvider locale={lang} messages={message[lang]}>
                <div>
                    <h1> <FormattedMessage id="title" /> </h1>
                </div>
                <div> <FormattedMessage id="description" />  </div> <br />


                <div>
                    <button onClick={() => setLang("tr-TR")} >TR</button>
                    <button onClick={() => setLang("en-US")} >EN</button>
                </div>
            </IntlProvider>

        </div>

    )
}

export default App;