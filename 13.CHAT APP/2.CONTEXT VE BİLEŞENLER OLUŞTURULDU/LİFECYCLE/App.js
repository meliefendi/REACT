//İLK YARI İŞLEMLERİ BACKEND TARFINDA YAPILDI.
import "./App.css";
import {ChatProvider} from "./Context/chatContext";
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