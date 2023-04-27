
import { useContext } from "react";
import ContextTheme from "../Context/context";


function Button() {
// verilen veriyi her yerden aynı şekilde işlem yapılabilmesi için bu yöntemle import ediyoruz. state yapısı ile useContext içerisine ContextTheme isimli değişken ile.
// daha sonra bu stateleri gerekli yerlere ekliyoruz. ayrıca bu stateler sayfaya özel değil context yapısının oluşturulduğu yerde oluşturulan statelerdir bunu da dediğim
// gibi "useContext(ContextTheme)" sayesinde kullanabiliyoruz.  
    const { theme, setTheme} = useContext(ContextTheme);


    return (
        <div>
          Active Theme : ({theme})
          <br/>
          <button onClick={()=> setTheme (theme ==="light" ? "dark" : "light")} >
            Theme Change
          </button>
        </div>
    )
}

export default Button;