import { useState } from "react";

function App(){
  const [name, setName] = useState("Melih");
  const [age, setAge] = useState(31);
const [friends, setFriends] = useState(["Melih", "Tulin"]);
const [address, setAddress] = useState({title:"İzmir", zip:35540});
 
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
      <hr />
      <br />
      <h2>Address</h2>
      <div>{address.title} - {address.zip}</div>
      <br />
      {/* <button onClick={()=> setAddress({...address, title:"Ankara"})}>Change Address</button> */}
      
      <button onClick={()=> setAddress({title:"İstanbul", zip:34540})}>Change Address</button>
    </div>
  )
}

export default App;

//BURADA OBJECT NASIL STATE EDİLİR ONU GÖRDÜK. DİKKAT ETMEMİZ GEREKEN KISIM TEK BAŞLIK DEĞİŞMESİ GEREKTİĞİNDE AYNI ARRAY'DEKİ GİBİ KULLANMAMIZ GEREKLİ YANİ SPREAT <br/>
OPERATÖRÜYLE BU ŞEKİLDE KULLANIRSAK DEĞİŞEN SADECE 1 TANE OLSA BİLE DİĞER BİLGİLER DE GELİR BAŞTA TANIMLANDIĞI GİBİ. EKSİK KALAN HİÇBİŞEY OLMAZ.YUKARDA YORUMDA <br/>
  ÖRNEKTE 
  GÖSTERİLEN GİBİ. TİTLE DEĞİŞİR ZİP AYNI BAŞTA NASIL TANIMLANDIYSA O ŞEKİLDE GELİR. GELMESİNİ İSTEMİYOSAK SPREAT OPERATÖRÜNÜ SİLİP SADECE BAŞLIĞI YAZARSAK GELMEZ.
