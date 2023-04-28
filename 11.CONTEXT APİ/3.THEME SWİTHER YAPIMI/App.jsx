

import { CreateProvider } from "./Context/context"

import Contacts from "./Components/contacts";
import "./App.css"

function App() {
    return (
        <div className="app">
            <CreateProvider>
             
             <Contacts/>

            </CreateProvider>
        </div>
    )
}

export default App;