import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Melih");

  useEffect(()=> {
    console.log("State Güncellendi")
  });

  useEffect(()=>{
    console.log("Component eklendi(mount edildi.)")
  }, []);

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr />

      <h1>{name}</h1>
      <button onClick={() => setName("Tulin")}>Click</button>
    </div>
  );
}

export default App;


// BURADA BİRAZ KAFAM KARIŞTI AÇIKÇASI AMA ELİMDEN GELDİĞİ KADAR AÇIKLAMAYA ÇALIŞACAĞIM. HER ZAMNKİ GİBİ STATE'LER AYARLADIK. DAHA SONRA USEeFFECT HOOKU KULLANDIK BUNUN SEBEBİ OLUŞAN HAREKETLERİ YAKALAMAK VE ONA GÖRE AYAR YAPMAK. MESELA YUKARDA "STATE GÜNCELLENDİ" ADINDA USEEFFECT VAR. O SAYFA İÇERİSİNDEKİ HERHANGİ BİR STATE'TE OLUŞAN DEĞİŞİKLİĞİ YAKALAR "her state değiştiğinde" PARAMETRESİ OLMADIĞI İÇİN. ALTINDAKİNDE İSE İLK RENDER EDİLDİĞİNDE 1 KEREYE MAHSUS ÇALIŞIR BOŞ BİR ARRAY PARAMETRESİ VERİLDİĞİ İÇİN. ve parametreleri ayarlanırsa diyelim ki number, her state değiştiriğinde çalışır.

//YANİ KISACA Bu, useEffect hook'unun bir başka kullanım örneğidir. İkinci parametre olarak boş bir dizi verilmiştir, bu da işlevin component ilk render edildiğinde yalnızca bir kez çağrılacağı anlamına gelir.

// Bu, component'in state veya props'ları değiştiğinde useEffect'in tekrar çağrılmasını önlemek için kullanılabilir. Yani, useEffect yalnızca component'in ilk render edildiği sırada bir şey yapmak istiyorsanız veya component'in belirli bir state veya prop değişikliğine yanıt vermesini istemiyorsanız, boş bir bağımlılık listesi kullanabilirsiniz.

// Yukarıdaki örnekte, useEffect hook'u yalnızca component ilk render edildiğinde bir kez çalışacak ve konsola "State Güncellendi" mesajını yazdıracaktır. Bu, state veya props herhangi bir değişiklik olduğunda yeniden çağrılmayacak anlamına gelir.