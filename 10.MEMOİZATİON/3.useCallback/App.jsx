
import "./App.css";

//useCallback hookunu tanımlıyoruz. Normalde, bir bileşen yeniden render edildiğinde, bileşen içindeki tüm işlevler de yeniden oluşturulur. 
// Bu işlem, performansı düşürebilir ve gereksiz yere bellek tüketebilir. useCallback, işlevin sadece bağımlılıkları değiştiğinde yeniden oluşturulmasını sağlar.
//  Bu nedenle, işlevin bellekteki önbellekte saklanarak tekrar kullanılması, performansı artırır ve gereksiz yeniden render işlemlerini önler. 
import { useState, useCallback } from "react";
import Header from "./components/header";


function App() {
  const [count, setCount] = useState(0);

//useCallbacki de aynı useMemo tanımlar gibi tanımlıyoruz. ve bağımlılık vermez isek tek sefer çalışır bırakır  yani render ve fonksiyon 1 kere çalışır. ama bağımlılık
//verirsek normal çalışır fakat render eskisi gibi olur. bunun önüne geçmek için ise prevState kullanılır. prevState useCallback ile bağımlılık vermeden de fonksiyon
//çalışır. prevState ile önceki stati al üzerine +1 koy dedik. böylelikle bağımlılık vermeden ve render olmadan fonksiyonumuz çalışır hale geldi.
  const increment = useCallback (()=> {
    setCount ((prevState) => prevState + 1)
  },[])

  return (
    <div className="App">

      {/* verdiğimiz örnekle uyumlu olması için ilk etapta alttaki sonraki etapta ise bi üstteki zaten son hali de en alttaki ile kullanılıyor. */}
      {/* <Header   setCount={()=> setCount (count + 1)} /> */}
      {/* <Header   setCount={setCount} /> */}

      <Header setCount={increment} />

      <h1> {count} </h1>



    </div>
  )
}

export default App;