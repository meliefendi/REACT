import User from "./Components/User"
import './App.css';

const friends = [
  {
    id:1,
    name:"Ahmet"
  },
  {
    id:2,
    name:"Tayfun"
  },
  {
    id:3,
    name:"Gökhan"
  },
  {
    id:4,
    name:"Volkan"
  }
]

function App(){
  return (
    <>
    <User 
    // name="Mehmet" 
    surname="Seven" 
    isLoggedIn={true} 
    age={32}
    friends = {friends}
    address = {{
      title:"İzmir/Bayraklı",
      zip:parseInt(35540)
    }}
    >
     
      </User>     
    </>
  )
}

export default App;

