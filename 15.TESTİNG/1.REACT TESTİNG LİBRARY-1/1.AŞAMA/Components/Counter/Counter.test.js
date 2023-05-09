
//GEREKLİ KÜTÜPHANELERİ ALDIK. CREATE-REACT-APP İLE GELEN APP.TEST.JS DOSYASINI KALDIRDIK HATA VERDİĞİ İÇİN.
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//SAYFAMIZI BU ŞEKİLDE İMPORT ETTİK BURAYA. NORMALDE SAYFA İÇERİSİNDEKİ FONKSİYONU ALIRDIK BU SEFER DOSYA İÇERİSİNDE SAYFAYI KOMPLE İMPORT ETTİK.
import Counter from "./index";

//DAHA SONRA TEST GENEL BİR İFADEDİR IT İLE AYNI İŞLEVE SAHİPTİR VE Bİ İŞİ YAPMAK İÇİN TANIMLANIR VE YANINDAKİ İSE AÇIKLAMADIR(İNCREASE BTN).
test("increase btn", ()=>{
    render(<Counter/>);

    //BU TANIM İLE EKRANDAKİ BU YAZILI İFADEYİ BULMASINI SÖYLEDİK.
    const count = screen.getByText("0");

    // VE YİNE AYNI ŞEKİLDE BU YAZILI İFADEYİ BULMASINI SÖYLEDİK.
    const increaseBtn = screen.getByText("Increase");

//DAHA SONRA BU DEĞİŞKENİN EVENTİ CLİCK OLDUĞUNDA VERECEK TEPKİSİNİ AŞAĞIDA İFADE ETTİK.
    userEvent.click(increaseBtn);

    // EXPECK BEKLE DEMEK YANİ EVETİ CLİCK OLDUĞUNDA İÇERİĞİN 1 OLMASINI BEKLE DEDİK. ZATEN TESTTEN DE GEÇTİ DOĞRU ÇALIŞTIĞI İÇİN.
    expect(count).toHaveTextContent("1");
});

// YUKARDAKİLERİN AYNISINI BURASI İÇİNDE GEÇERLİ KILDIK. SONUÇ PASSED. GEÇERLİ YANİ.
test("decrease btn", ()=>{
    render(<Counter/>);

    const count = screen.getByText("0");
    const decreaseBtn = screen.getByText("Decrease");

    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
});