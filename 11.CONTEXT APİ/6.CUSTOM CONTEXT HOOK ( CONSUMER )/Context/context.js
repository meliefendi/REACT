
import { createContext, useState, useEffect, useContext } from "react";

const CreateContext = createContext();

export const CreateProvider = ({ children }) => {
    const [ theme, setTheme] = useState( localStorage.getItem("tema"));

    const values = {
        theme,
        setTheme
    }

    useEffect(() =>{
        localStorage.setItem("tema" , theme)
    }, [theme])

    return (
        <div>
            <CreateContext.Provider value={values}>
                {children}
            </CreateContext.Provider>
        </div>
    )
}
//1/ BURADAKİ OLAYIMIZ BURASIYLA BURANIN AMACI YAPIYI BURADA KURUP "useThemeContext" EXPORT ETMEMİZLE DİĞER KULLANILAN SAYFALARDA SADECE BU YAPIYI ENTEGRE ETMEMİZLE YAPI DAHA
//TEMİZ VE SADE HALE GELEREK GÖRÜNTÜ KİRLİLİĞİNİ VE KAFA KARIŞIKLIĞINI GİDERİYOR. YAPININ KURULUMU VE ÖRNEĞİNİ SADECE BU CONTEXT İLE ALAKALI SAYFALARDA BEFORE AFTER ŞEKLİNDE
// YAPILDI KONTROL EDEBİLİRSİN. "AYRICA BU DURUM APP.JS SAYFASINA YAPILMADI ZATEN ORDA PROVİDER YAPISI EXPORT EDİLMİŞ DURUMDA YANİ DİĞER BAĞLI SAYFALARA BU İŞLEM GERÇEKLEŞİR"
// PROVİDER YAPISI BUNDAN ETKİLENMEZ. 
export const useThemeContext = () => useContext(CreateContext);
// export default CreateContext;
