//1/yapılan işlemler yup'un githuptan import dosyaları alınmadan önce yarn ile paket kurulumu yapıldı.daha sonra import dosyaları alındı.  
import "./App.css";
import SignUp from "./components/signup";


function App() {

   return (
    <div className="App">
    
    <SignUp/>

    </div>
  )
}

export default App;