import Header from "./Components/Header.js"
import './App.css';

function App(){
  return (
    <div>
      <h1>
        Hello React
      </h1>
      <Header></Header> 
      <Header/> 
      <Header />
    </div>
  )
}

export default App;


//header componentinden gelen verileri 3 şekilde kullanabiliriz.yukarda header yazan satır aslında yazdırma şekli