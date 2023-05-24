
import { useState, useEfect, createContext, useContext } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
    //eklenen ürünü stateti
    const [items, setItems] = useState([]);

    //eklenen ürün stateti. eklenen her ürün için ilgili yere ürün taşıyacak olan fonksiyon
    const addToBasket = (data, findBasketItem) => {

        if (!findBasketItem) {
            //ürün ilk defa ekleniyosa burası çalışıyor
            return setItems((items) => [data, ...items])
        };
        //ürün eklenmişse burası çalışıyor
        const filtered = items.filter((item) => item._id !== findBasketItem._id);
        setItems(filtered);
    }


    const values = {
        items,
        setItems,
        addToBasket,
    };

    return (
        <BasketContext.Provider value={values}> {children} </BasketContext.Provider>
    );

};

const useBasket = () => useContext(BasketContext);

export { useBasket, BasketProvider };