import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Melih");

  useEffect(()=> {
    console.log("Component mount edildi.(eklendi)")
    
  const interval = setInterval(()=> {
    setNumber((n) => n + 1);
  },1000);

  return () => clearInterval(interval);
  },[]);

  useEffect(()=> {
    console.log("number State Güncellendi")
  },[number]);

  useEffect(()=>{
    console.log("name State Güncellendi")
  },[name]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr />

      <h1>{name}</h1>
      <button onClick={() => setName("Tulin")}>Click</button>
    </div>
  );
}

export default App;
