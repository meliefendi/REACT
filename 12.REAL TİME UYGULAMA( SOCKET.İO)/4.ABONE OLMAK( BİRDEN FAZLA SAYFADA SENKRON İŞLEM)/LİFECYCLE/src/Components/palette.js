//socketApi sayfasında OLUŞTURMUŞ OLDUĞUMUZ BAĞLANTIYI BURAYA İMPORT EDİYORUZ Kİ BACKENDE BİLGİ ALIŞVERİŞİ YAPALIM. BU ARADA PC TERMİNALİNE GÖNDERİYORUZ GELEN VERİYİ
// CTRL C YAPMAMIZ GEREKİYO ARA SIRA 

//SEND İLE BACKENDLE BİLGİ ALIŞVERİŞİ YAPMAK İÇİN YAPI KURDUK VE ONU ALDIK.SEND İLE VERİ SOCKETAPİYE ORDAN DA BACKEND YANİ app.js E GİDİYOR.
import { send } from "../socketApi";
import { useState } from "react";

//ACTİVECOLOR PROPU ALINIYOR
function Palette( {activeColor} ) {
    const [ colors, setColors ] = useState("#000");
    return (
        <div className="palette">

            <input type="color" value={activeColor} onChange={(e) => setColors(e.target.value)} />

            <button onClick={()=> send(colors)} >Add</button>
            { colors }
        </div >
    )
}

export default Palette;