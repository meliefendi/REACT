
import "./App.css";
import { useState } from "react";
import Header from "./components/header";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
{/* gerekli görülmediği zaman render edilemyecek kısım. render edilmesi için içerisine koşul ekliyoruz zamanı gelince render edilsin ve olayı görmek adına */}
      <Header count = {count < 5 ? 0 : count} setCount={setCount} />

      <h1> {count} </h1>

      <button onClick={() => setCount(count + 1)} >Click</button>

    </div>
  )
}

export default App;