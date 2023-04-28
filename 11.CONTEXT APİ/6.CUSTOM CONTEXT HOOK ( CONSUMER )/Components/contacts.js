
import Button from "../Components/button";
import Header from "../Components/header";

import Profile from "./profile";

import { useThemeContext } from "../Context/context";

// ÖNCEKİ HALİ
// import { useContext } from "react";
// import CreateContext from "../Context/context";

function Contacts() {
    // ÖNCEKİ HALİ
    // const { theme, setTheme } = useContext(CreateContext);
    // SON HALİ
    const { theme, setTheme } = useThemeContext();

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