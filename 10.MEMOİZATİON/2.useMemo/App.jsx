//useMemo gereksiz renderın önüne geçilmesi için kullanılan hooktur.
import "./App.css";
import { useState, useMemo } from "react";
import Header from "./components/header";


function App() {
  const [count, setCount] = useState(0);
//burada useMemo ile header içerisine veri yolluyoruz ve ilk yazımda render işlemi gerçekleşiyor. daha sonra içerisine veri aktarımı veya değişimi yapılmadığı sürece render 
//edilmiyor. dolayısı ile useMemo suz kurulan yapı her sayfa renderında da render olur bu da gereksiz yerlerinde render işlemi olacağı için performans kötüleşmesi demektir.
  const data = useMemo(() =>{
   return {name:"Melih"}
  },[])

  return (
    <div className="App">
{/* burada sayacımıza şart koşuyoruz. 5ten sonra işleme diğer sayaçla saymaya devam et diyoruz. render işlemlerini görmek için useMemo yokken sayaç çalışmadığı halde sayfa
render olmaya devam ederken useMemodan sonra içerisindeki veri değiştiğinde render olmakta */}
      <Header count = {count < 5 ? 0 : count} setCount={setCount} data={data} />

      <h1> {count} </h1>

      <button onClick={() => setCount(count + 1)} >Click</button>

    </div>
  )
}

export default App;