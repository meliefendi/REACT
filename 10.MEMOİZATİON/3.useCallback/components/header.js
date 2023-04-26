
import React from "react";

function Header({ setCount }) {
    console.log("header render edildi")
    return (
        <div>
            <h1> Header</h1>
          
               <button onClick={setCount} >Click</button>

{/* verdiğimiz örnekle uyumlu olması için bu örnek yerine yukarıdaki örneği kullanıyoruz.
               <button onClick={()=> setCount (count +1)} >Click</button> */}
            <hr />
           
           
        </div>
    )
}

export default React.memo(Header);