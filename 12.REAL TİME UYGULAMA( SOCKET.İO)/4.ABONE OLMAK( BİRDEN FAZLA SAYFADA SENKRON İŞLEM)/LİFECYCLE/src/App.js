
import "./App.css";

//SOCKETAPİ SAYFASINDAKİ FONKSİYONLARI ALDIK.
import { useEffect, useState } from "react";
import { init, subscribe } from "./socketApi";
//BURDAKİ VERLERİ PALETTE SAYFASINA AKTARACAĞIMIZ İÇİN SAYFAYI İMPORT ETTİK.
import Palette from "./Components/palette";


function App () {
    //RENKLERİ PALETTE SAYFASINA AKTARACAĞIMIZ İÇİN VE YAPILAN DEĞİŞİKLİKLERİ YÖNLENDİRME YAPMAK İÇİN STATE OLUŞTURDUK.
    const [ activeColor, setActiveColor ] = useState("#282c34")

    useEffect(()=>{
        //USEEFFECT İLE SOCKETAPİ SAYFASINDAKİ FONKSİYONLARI ALDIK.
        init();
//DAHA SONRA RENK DEĞİŞİMİNİ TÜM SAYFALARA VERMEK İÇİN CALLBACK OLARAK PARAMETRE VERDİK VE BUNU DA BACKENDDE KARŞILADIK. DAHA SONRA BU DEĞİŞİM SAYESİNDE VERİLER TÜM
// SAYFALARDA AKTARILMAYI SAĞLADI YANİ 1 SAYFADAKİ DEĞİŞİM TÜM SAYFALARA AYNI ANDA İLETİLDİ.
        subscribe((color)=>{
            setActiveColor(color)
        });
    },[])
    
    return (
        //RENK HER DEĞİŞTİĞİNDE BACKGROUND DEĞİŞSİN DİYE STATE ATAMASI YAPTIK.
        <div className="App" style={{ backgroundColor:activeColor }} >
            <h1> App Js</h1>
            {/* UFAK COLOR KUTUSU HER SAYFADA AYNI RENK OLSUN DİYE STATİ PROPS OLARAK AYARLADIK. */}
            <Palette activeColor={activeColor} />

        </div>
    )
}

export default App;