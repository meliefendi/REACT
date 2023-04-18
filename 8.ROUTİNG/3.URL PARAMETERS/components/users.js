
//link hook'unu çağırdık.
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//axios ile api çağırdık. yarn add axios ile kurulum yapıldı.
import axios from "axios";


function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data) )
            .catch((err)=> console.log(err))
            .finally(() => setLoading(false))
    }, [])


    return (
        <div>
            <h1>Users</h1>
            {loading && <p>Loading...</p>}
            <ul>
              
                    {
                        //gelen veri değişmiş olacak olduğu için map metodunu kullandık.
                        users.map((user) => (
                            <li key={user.id}>
                                {/* diğer sayfada gönderilen verilerle ilgili eşleşme olacağı için linke id verildi. */}
                                <Link to={`/user/${user.id}`}>{user.name}</Link>
                            </li>
                        ))
                    }
                

            </ul>
        </div>
    )
}

export default Users;