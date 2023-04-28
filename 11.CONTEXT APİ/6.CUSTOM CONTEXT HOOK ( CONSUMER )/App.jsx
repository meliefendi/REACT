

import { CreateProvider } from "./Context/context"

import { UserProvider } from "./Context/userContext";

import Contacts from "./Components/contacts";
import "./App.css"

function App() {
    return (
        <div className="app">
            <CreateProvider>
                <UserProvider>
                    <Contacts />
                </UserProvider>
            </CreateProvider>
        </div>
    )
}

export default App;