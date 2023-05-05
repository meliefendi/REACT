//socketApi sayfasında OLUŞTURMUŞ OLDUĞUMUZ BAĞLANTIYI BURAYA İMPORT EDİYORUZ Kİ BACKENDE BİLGİ ALIŞVERİŞİ YAPALIM. BU ARADA PC TERMİNALİNE GÖNDERİYORUZ GELEN VERİYİ
// CTRL C YAPMAMIZ GEREKİYO ARA SIRA 
import { send } from "../socketApi";
import { useState } from "react";

function Palette() {
    const [ colors, setColors ] = useState("#000");
    return (
        <div className="palette">

            <input type="color" onClick={(e) => setColors(e.target.value)} />

            <button onClick={()=> send(colors)} >Add</button>
            { colors }
        </div >
    )
}

export default Palette;