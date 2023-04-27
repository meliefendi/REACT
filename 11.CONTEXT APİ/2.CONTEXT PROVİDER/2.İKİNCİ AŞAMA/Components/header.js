// kullanılcak diğer sayfalar gibi kullanıcak hooklar ve oluşturulan yapılar sayfaya import ediliyor.
import { useContext } from "react";
import ContextTheme from "../Context/context";


function Header() {

    // context sayfasında oluşturulan stateler "useContext(ContextTheme)" sayesinde sayfaya import edilip kullanılıyor ve gerekli görülen yerlere eklemeler yapılıyor.
    const { theme, setTheme} = useContext(ContextTheme);

    return (
        <div>
            Pasive Theme : ({theme})

            <br/>

            <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")} > Theme Change </button>
        </div>
    )
}

export default Header;