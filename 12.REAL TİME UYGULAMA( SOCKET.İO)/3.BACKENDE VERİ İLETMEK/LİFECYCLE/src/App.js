
import "./App.css";

import { useEffect } from "react";
import { init } from "./socketApi";
import Palette from "./Components/palette";


function App () {

    useEffect(()=>{
        init();
    },[])
    
    return (
        <div className="App">
            <h1> App Js</h1>
            <Palette />

        </div>
    )
}

export default App;