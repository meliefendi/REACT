
import { useContext } from "react";
import CreateContext from "../Context/context";

function Button() {
    const { theme, setTheme } = useContext(CreateContext);

    return (
        <div>
            buton theme : {theme}
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} >buton</button>
        </div>
    )
}

export default Button;