
import React, { useState, useEffect } from 'react';

function Users() {
    //gelen verileri sayfa içerisinde kullanabilmek için state tanımladık.
    const [users, setUsers] = useState([]);

    //yine sayfa içesinde değer kullanmak için state tanımladık.
    const [isLoading, setIsLoading] = useState(true);

    //useEffect ile sayfa yüklendiği vakit verileri almak için useEffect kullandık.
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            //alınan veri json formatıyla parse edildi ki okunabilsin ve yazdırılabilsin diye.
            .then(res => res.json())
            //alınan veriyi setUsers state'i ile users state'e gönderdik.
            .then(data => setUsers(data))
            //hata durumunda hatayı konsola yazdırdık.
            .catch(err => console.log(err))
            //hata olmaması durumunda da çalışacak kod.
            .finally(() => setIsLoading(false));

    }, []);

    return (
        <div>
            <h1>Users</h1>

            {
                isLoading && <div>Loading...</div>
            }

            {
                //users state'i içerisindeki verileri map ile yazdırdık.
                users.map((user) => (
                    //key prop'u ile key'i belirttik ve id'yi aldık.Daha sonra gelen usersların name proplarını ekrana yazdırdık.
                    <div key={user.id}> {user.name} </div>
                ))
            }

        </div>

    )
}

export default Users;