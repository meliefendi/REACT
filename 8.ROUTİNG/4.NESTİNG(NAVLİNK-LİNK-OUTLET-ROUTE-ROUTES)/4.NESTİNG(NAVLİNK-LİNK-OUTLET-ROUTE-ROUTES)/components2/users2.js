//sayfada kullanılcak hook ve paketleri aktarıyoruz.
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Users2(){
    const [users2, setUsers2 ] = useState([]);

    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers2(res.data))
        .catch((err)=> console.log(err))
    })
    return(
        <div>
            <h1>Users2</h1>
            {
                users2.map((item)=>(
                    <ul key={item.id}>
                        {/* alınan verilerin gösterimini sağlıyoruz ve user2 sayfasına aktarımını yapmak için path'ini tanımlıyoruz */}
                        <li key={item.id}> <NavLink key={item.id} to={`/users/${item.id}`}> {item.name} </NavLink> </li>
                    </ul>
                ))
            }
            <div>
                {/* users2 sayfası içerisinde user2 sayfasının gösterimini bu şekilde yapıyoruz. */}
                <Outlet/>
            </div>
        </div>
    )
}

export default Users2;