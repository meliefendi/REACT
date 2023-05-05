
//DERS 2 BURDA DA "npm i socket.io-client" npm paketini CLİENT YANİ LİFECYCLE DOSYAMIZA EKLEDİK. DAHA SONRA SOCKET.IO DOSYASINA GEREKLİ BAĞLANTILARI AYARLADIK.
// AYNI ZAMANDA BİLGİSAYAR TERMİNALİ ÜZERİNDE BACKEND ÇALIŞTIRDIK DAHA SONRA SOCKET.IO DOSYASINA GEREKLİ BAİLANTILARI AYARLADIKTAN SONRA BU SAYFADAN SOCKETAPİ
// SAYFASINDA AYARLAMIŞ OLDUĞUMUZ FONKSİYONU BURADAN ÇAĞIRDIK İLK ETAPTA HATA VERDİ BU HATAYI PC TERMİNALİ ÜZERİNDEN YANİ BACKENDİ KAPATIP AÇARAK HALLETTİK.
import "./App.css";

import { useEffect } from "react";
import { init } from "./socketApi";
import Palette from "./Components/palette";


function App () {

    useEffect(()=>{
        init();
    },[])
    
    return (
        <div className="App">
            <h1> App Js</h1>
            <Palette />

        </div>
    )
}

export default App;