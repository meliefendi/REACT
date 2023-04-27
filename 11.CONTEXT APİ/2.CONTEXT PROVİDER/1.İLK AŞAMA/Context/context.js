//context,m oluşturulduğu ve dağıtımı yapılacak yere context create edildi.
import { createContext } from "react";

//ve bu context bileşen içerisine tanımlandı gerekli yerlere bu bileşen import edilecek şekilde ayarlandı.
const ContextTheme = createContext();

// provider işlemini ve benzer işlemleri tek yerden yönetmek için bu sayfaya tanımlanıp "(bileşen içerisine)" export edildi ki kullanılacak yerlere ulaşım sağlansın.
// parametre olarak taımlanan chilren ise app de veya nerede bu işlem tanımlandıysa içerisindeki bileşeni temsil etmekte.Ayrıca value propuna ulaşım tanımlandığı takdirde 
// her yerden sağlanabilinir. bu uygulamamızda button sayfasına tanım yapıldı ve oradan ulaşım sağlıyoruz.
export const ThemeProvider = ({ children }) => {
    
    // provider edilmeden önce create edilen contexti componentimize sarmalıyoruz ve providerı ekliyoruz. 
    return <ContextTheme.Provider value="dark verisi Context Create sayfası">
        {children}
    </ContextTheme.Provider>
};

export default ContextTheme;