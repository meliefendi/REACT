
//HOCANIN HAZIRLAMIŞ OLDUĞU BACKENDİ ALDIM. BENDE KURULU OLAN NODE.JS + YARN + NPM TEKRAR KURMADIM SADECE EXPRESS.JS EKSİKTİ ONU KURDUM PC TERMİNALİNDE BACKEND 
//BULUNDUĞU DİİZNE, DAHA SONRA NPM START İLE BAĞLANTIYI ÇALIŞTIRDIM. BU ESNADA REACT KOMPONENT KURULUMLARI YAPILDI. VE CSS YAZILDI.
import "./App.css";
import Palette from "./Components/palette";


function App () {
    return (
        <div className="App">
            <h1> App Js</h1>
            <Palette />

        </div>
    )
}

export default App;