import "./App.css";

import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage } from 'react-intl'


//İÇERİĞİMİZEKİ SAYILAR SÜREKLİ DEĞİŞKENLİK GÖSTERECEĞİ İÇİN PARAMETREYE ATADIK VE BUNU DA KULLANCAĞIMIZ YERLERE ENTEGRE ETTİK. 
const message = {
    "tr-TR": {
        title: "Merhaba Dünya",
        description: "{ count } yeni mesaj var"
    },
    "en-US": {
        title: "Hello World",
        description: " You have {count} new mesaage"
    }
}


function App() {
    const isLocale = localStorage.getItem("lang")
    const defaultLocale = isLocale ? isLocale : navigator.language;
    const [lang, setLang] = useState(defaultLocale)

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    return (
        <div className="App">

            <IntlProvider locale={lang} messages={message[lang]}>
                <div>
                    <h1> <FormattedMessage id="title" /> </h1>
                </div>
                
                <div> <FormattedMessage id="description" values={{ count:5}} />  </div> <br />


                <div>
                    <button onClick={() => setLang("tr-TR")} >TR</button>
                    <button onClick={() => setLang("en-US")} >EN</button>
                </div>
            </IntlProvider>

        </div>

    )
}

export default App;