// context kullanılcak sayfaya useContext hookunu kuruyoruz. ve create yapılan sayfadan kullanıcalak sayfaya yani buraya import ediyoruz.
import { useContext } from "react";
// yukarda bahsettiğim import işlemi
import ContextTheme from "../Context/context";


function Button() {

    // kullanıcak contextin atadığımız değişken adını yine değişken içerisine atayıp kullanıma hazırlıyoruz. burada data isimli değişken içerisine atadık.
    const data = useContext(ContextTheme);
    console.log(data)

    return (
        <div>
            buton sayfası ({ data })
        </div>
    )
}

export default Button;