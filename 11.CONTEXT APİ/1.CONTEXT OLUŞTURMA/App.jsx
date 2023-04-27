//1/context bize props ve state yönetim kolaylığı sağlamakta.

//2/button sayfasının içindeki verileri burada görüntüleyeceğimiz için buraya import ediyoruz. 
import Button from "./Components/button";
//3/context sayfasındaki verileri ve context hookunu kullancağımız için buraya import ediyoruz.
import ContextTheme from "./Context/context";


function App(){
  return(
    <div>
      {/*4/ prop içerisindeki veriyi almak için context sayfasından gelen ContextTheme sonuna provider ekliyoruz ve BrowserRouter gibi sarmala alıyoruz. */}

    <ContextTheme.Provider value="dark verisi">

      {/*5/ gösterimi yapılacak bileşenin importu yapıldıktan sonra jsx formatında ContextTheme.provider ile sarmalanmış yapı içerisine ekliyoruz. */}
      <Button/>
    </ContextTheme.Provider>
    </div>
  )
}

export default App;