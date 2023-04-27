
import Button from "./Components/button";

//bu sayfaya import edilen veri fonksiyon olduğu için {} şeklinde yapılmakta aksi halde hata verir.Çnceki hali ContextTheme olan verimiz ThemeProvider şeklinde fonksiyon 
//oluşturulup provider işlemini yapacak fonksiyon buraya da import edildi amacı aynı işlemleri tek yerden yönetmek ve karmaşıklığı önlemek
import { ThemeProvider } from "./Context/context";


function App() {
  return (
    <div>
{/* oluşturulan fonksiyon buraya eklendi ve chilren olarak bileşende eklendi. button sayfası içerisindeki veriler aksamadan yine burada gösterilmekte */}
      <ThemeProvider>
        <Button />
      </ThemeProvider>
    </div>
  )
}

export default App;