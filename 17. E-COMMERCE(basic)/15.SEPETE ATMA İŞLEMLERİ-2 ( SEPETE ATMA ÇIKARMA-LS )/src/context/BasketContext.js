
import { useState, createContext, useContext, useEffect } from "react";

const BasketContext = createContext();

//sepete eklenen ürünlerin localStorage işlemi
const defaultBasket = JSON.parse(localStorage.getItem("basket")) || [];

const BasketProvider = ({ children }) => {
    //eklenen ürünü stateti
    const [items, setItems] = useState(defaultBasket);

    //localStorage
    useEffect(()=> {
        localStorage.setItem("basket", JSON.stringify(items));
    }, [items]);

    //eklenen ürün stateti. eklenen her ürün için ilgili yere ürün taşıyacak olan fonksiyon
    const addToBasket = (data, findBasketItem) => {

        if (!findBasketItem) {
            //ürün ilk defa ekleniyosa burası çalışıyor
            return setItems((items) => [data, ...items])
        };
        //ürün eklenmişse burası çalışıyor ve aynı olmayanları filtreleyip gösteriyor.
        const filtered = items.filter((item) => item._id !== findBasketItem._id);
        setItems(filtered);
    };

    //basket sayfası ürün silme işlemi
    const removeFromBasket = (item_id) => {
        const filtered = items.filter((item) => item._id !== item_id);
        setItems(filtered)
    }


    const values = {
        items,
        setItems,
        addToBasket,
        removeFromBasket,
    };

    return (
        <BasketContext.Provider value={values}> {children} </BasketContext.Provider>
    );

};

const useBasket = () => useContext(BasketContext);

export { useBasket, BasketProvider };