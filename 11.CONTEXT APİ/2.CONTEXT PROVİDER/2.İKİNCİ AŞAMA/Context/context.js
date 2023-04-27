// createContexti geçen sefer anlatmıştım. bu sefer diğer sayfalara veri aktarımı yapabilmek için state kullanıyoruz. yine state kullanıyoruz diğerinden farkı yapı tek
// tek yerden oluştrulup dağıtılıyor. ve diğer bileşenler içerisine yazmaya gerek kalmıyor bu sefer yapıyı direkt sayfa içerisine import edip kullanıyoruz ve tek yerden bu
// işlemler gerçekleşiyor. ve ayrıca state oluturulan yeri bulmak etmek sorun olabilir o yüzden bu oluşum için tek kaynak oluşturuluyor. ayrıca her sayfada bu aktarılan 
// veriyi kullanabilmek için başka stateler oluşturulmaktaydı ama bu işlemle tek yerden oluşturulan state ile yönetim sağlıyoruz.
import { createContext, useState } from "react";

const ContextTheme = createContext();

export const ThemeProvider = ({ children }) => {
    //verilerin aktarımı için kurulan state
    const [ theme, setTheme] = useState("dark");
    // stateleri değişene aktarıyoruz. bu değişeni de value propuna veriyoruz.
    const values = {
        theme,
        setTheme
    }
    // value propu ile diğer sayfalara aktarım sağlanıyor. diğer sayfalardan verileri almak için yine state import edilip useContent vasıtasıyla kullanabiliyoruz.
    return <ContextTheme.Provider value={values} >
        {children}
    </ContextTheme.Provider>
};

export default ContextTheme;