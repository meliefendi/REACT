//6/prop yönetimi için bu sayfayı oluşturuyoruz ve gerekli createContext hookunu ekliyoruz.
import { createContext } from "react";

//7/daha sonra değişkene atıyoruz ve dışarı açıyoruz ki kullanabilelim
const ContextTheme = createContext();

export default ContextTheme;