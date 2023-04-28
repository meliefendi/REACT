// SON HALİ
import { useThemeContext } from "../Context/context";

// ÖNCEKİ HALİ
// import { useContext } from "react";
// import CreateContext from "../Context/context";

function Header() {
    // ÖNCEKİ HALİ
    // const { theme, setTheme } = useContext(CreateContext);
    // SON HALİ
    const { theme, setTheme } = useThemeContext();

    return(
        <div>
header theme : { theme}
<button onClick={() => setTheme( theme === "light" ? "dark" : "light")} >header</button>
        </div>
    )
}

export default Header;