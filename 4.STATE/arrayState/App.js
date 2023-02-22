import { useState } from "react";

function App(){
  const [name, setName] = useState("Melih");
  const [age, setAge] = useState(31);
const [friends, setFriends] = useState(["Melih", "Tulin"]);

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h1>{age}</h1>
      <button onClick={()=> setName("Tulin")}>Change Name</button>
      <button onClick={()=> setAge(28)}>Change Age</button>

      <hr />
    
      <h2>Friends</h2>
      {
        friends.map((friend, i)=> (
          <div key={i}>{friend}</div>
        ))
          
      }
      <br />
      {/* <button onClick={()=> setFriends([...friends.slice(0, 1), "Ayşe", ...friends.slice(1)])}>Add a new Friend</button> */}

      <button onClick={()=> setFriends([...friends, "Ayşe"])}>Add a new Friend</button>
    </div>
  )
}

export default App;

//BURADA ARRAY İÇERİSİNE EKLEME İŞLEMİ YAPTIK VE DİKKAT EDİLMESİ GEREKEN HUSUS HANGİ METODLA İŞLEME BAŞLANIYORSA O METODLAR EKLEME YAPILMASI GEREKLİ. YANİ ARRAYLA 
AÇILDIYSA YUKARDA useSTATE KISMINDA AŞAĞIDAN DA ARRAY METODUYLA EKLEME YAPILMASI GEREKLİ. AKSİ TAKDİRDE HATAYLA KARŞILAŞILIR. YANİ setFriends ("AYŞE") ŞEKLİNDE OLMAZ.
