//8/oluşturulan contextApi yi kullanmak için useContext hookunu tanımlıyoruz.
import { useContext } from "react";

//9/ ve oluşturulan ContextTheme yapısını kullanabilmek için sayfaya import ediyoruz ki bu sayfada kullanmak için. 
import ContextTheme from "../Context/context";

function Button() {

    //10/ daha sonra onu kullanbilmek için contexti değişkene atıyoruz. ve gerekli şekilde kullanıyoruz. 
    const data = useContext(ContextTheme);
    console.log(data)
    return (
        <div>
            buton sayfası { data }
        </div>
    )
}

export default Button;