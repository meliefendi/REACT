// SON HALİ
import { useThemeContext } from "../Context/context";

// ÖNCEKİ HALİ
// import { useContext } from "react";
// import CreateContext from "../Context/context";

function Button() {
    // ÖNCEKİ HALİ
    // const { theme, setTheme } = useContext(CreateContext);
    // SON HALİ
    const { theme, setTheme } = useThemeContext();

    return (
        <div>
            buton theme : {theme}
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} >buton</button>
        </div>
    )
}

export default Button;