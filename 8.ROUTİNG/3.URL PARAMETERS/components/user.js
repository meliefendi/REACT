
// useParams React hook, React Router tarafından sağlanan bir özelliktir ve URL'deki dinamik parametreleri almak için kullanılır.
import { useParams,  Link } from 'react-router-dom';

import { useEffect, useState  } from 'react';
import axios from 'axios';

function User() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    //bu şekilde verileri almak için şablon oluşturduk.
    const { id } = useParams();

// useEffect hook'ini kullanarak verileri ve istenilen id ile eşleşen veriyi aldık.
    useEffect(() =>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=> setUser(res.data))
        .catch((err)=> console.log(err))
        .finally(()=> setLoading(false));
    },[id])

    return (

        <div>
            <h1>User Detail</h1>
            {loading && <p>Loading...</p>}
            {/* verilerin okunabilmesi için string metoduna çevirdik */}
        {!loading && <code>{JSON.stringify(user)}</code>}
       <br/>
       <br/>

{/* linke verilen id ile istenilen id ile eşleşen veriyi aldık. */}
       <Link to={`/user/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1}) </Link>
       
        </div>
    )
}

export default User;