import { useState } from "react";

function App(){
  const [name, setName] = useState("Melih");
  const [age, setAge] = useState(31);
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h1>{age}</h1>
      <button onClick={()=> setName("Tulin")}>Change Name</button>
      <button onClick={()=> setAge(28)}>Change Age</button>
    </div>
  )
}

export default App;

//ASLINDA BURDA HER ŞEY AÇIK. JS TOGGLE'IN AYNISI BURDA BAŞKA YERLE MUHATTAP ETMİYO DİREKT OLAYI BURADAN HALLEDEBİLİYORUZ.YANİ CSS'E CLASS VER BİLMEMNE YOK. STATE'İ İMPORT EDİYOSUN YUKADAKİ GİBİ VE ALTINDAKİ GİBİ KULLANIYOSUN ZATEN BİLİYOSUN BUNLARI. 