//yarn add react-intl PAKETİNİ YÜKLEDİK BU BİZE DİL SEÇENEKLİ YAPILAR OLUŞTURMADA YARDIMCI OLUR. KURULUMU VE YAPILIŞI AŞAĞIDAKİ GİBİ 
import "./App.css";

import { useState } from "react";
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

function App() {
    const [lang, setLang] = useState("tr-TR");


    return (
        <div className="App">

            <IntlProvider locale={lang} messages={message[lang]}>
                <div>
                    <h1> <FormattedMessage id="title" /> </h1>
                </div>
                <div> <FormattedMessage id="description" />  </div>


                <div>
                    <button onClick={() => setLang("tr-TR")} >TR</button>
                    <button onClick={() => setLang("en-US")} >EN</button>
                </div>
            </IntlProvider>

        </div>

    )
}

export default App;