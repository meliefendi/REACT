
import "./App.css";
import {ChatProvider} from "./Context/ChatContext";
import Contacts from "./Components/Contacts";


function App () {
    
    
    return (
       
        <div className="" >
         
         <ChatProvider>
         <Contacts/>
         </ChatProvider>
        </div>
    )
}

export default App;