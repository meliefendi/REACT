
//GEREKLİ KÜTÜPHANELERİ ALDIK. CREATE-REACT-APP İLE GELEN APP.TEST.JS DOSYASINI KALDIRDIK HATA VERDİĞİ İÇİN.
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./index";


//BURADA DA BU TERİMİ KULLANDIK DESCRİBE, İÇERİSİNDE FARKLI ÖZELLİKLER BARINDIRMAKTA VE DAHA TEMİZ TEST KODLARI YAZMAMIZI SAĞLAMAKTA. KOD TEKRARININ ÖNÜNE GEÇMEKTE VE 
// EK TERİMLERLE NEYİN NE ZAMAN ÇALIŞMASI GEREKTİĞİ YÖNÜNDE YÖNETİM KOLAYLIĞI SAĞLAMAYI KOLAYLAŞTIRMAKTA.
describe("Counter Tests", () => {

    let increaseBtn, decreaseBtn, count;

    beforeEach(() => {
        render(<Counter />);
        console.log("her testten önce çalışacağım")
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease");
        count = screen.getByText("0");
    });

    beforeAll(() => {
        console.log("ilk başta 1 kere çalışacağım")
    });

    afterEach(() => {
        console.log("her testten sonra çalışacağım")
    });

    afterAll(() => {
        console.log("en son 1 kere çalışacağım")
    })
    test("increase btn", () => {
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    });

    test("decrease btn", () => {
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    });

})

