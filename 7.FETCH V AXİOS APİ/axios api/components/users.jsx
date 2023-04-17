
import React, { useState, useEffect } from 'react';

//yarn add axios ile kullanmak için paket kurulumu yapıyoruz.direkt komut istemcisine dosyalara girmiyoruz. açıldığı yere
import axios from 'axios';

function Users() {
    //gelen verileri sayfa içerisinde kullanabilmek için state tanımladık.
    const [users, setUsers] = useState([]);

    //yine sayfa içesinde değer kullanmak için state tanımladık.
    const [isLoading, setIsLoading] = useState(true);

    //useEffect ile sayfa yüklendiği vakit verileri almak için useEffect kullandık.
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            //alınan verinin datasını setUsers state'i ile users state'e gönderdik.
            .then(res => setUsers(res.data))
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