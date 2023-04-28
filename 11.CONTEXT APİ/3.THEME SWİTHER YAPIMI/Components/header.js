
import { useContext } from "react";
import CreateContext from "../Context/context";

function Header(){
const { theme, setTheme } = useContext(CreateContext);

    return(
        <div>
header theme : { theme}
<button onClick={() => setTheme( theme === "light" ? "dark" : "light")} >header</button>
        </div>
    )
}

export default Header;