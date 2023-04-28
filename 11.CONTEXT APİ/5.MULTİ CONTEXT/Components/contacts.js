// yapımızı daha sade ve yalın hale getirmek için componentleri tek yere bu componenti de tek olarak app'a yolluyoruz.
import Button from "../Components/button";
import Header from "../Components/header";

// stateleri kullanabilmek için gerekli dosyaları import ediyoruz.
import CreateContext from "../Context/context";
import { useContext } from "react";
import Profile from "./profile";


function Contacts() {
    const { theme } = useContext(CreateContext);

    return (
        <div className={`app ${theme}`}>
            <Header />
            <hr></hr>
            <Button />
            <hr></hr>
            <Profile />
        </div>
    )
}

export default Contacts;