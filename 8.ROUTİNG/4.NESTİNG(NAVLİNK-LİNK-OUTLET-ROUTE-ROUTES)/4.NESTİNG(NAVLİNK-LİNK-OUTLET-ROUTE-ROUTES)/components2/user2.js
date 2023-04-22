import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams,Link } from "react-router-dom";

function User2(){
  const [user2, setUser2 ] = useState({});
  //url de yer alan parametreleri yani id'leri almak için kullanılır.
const { id } = useParams();

  useEffect(()=>{
    //users2 sayfasında gelecek olan id eşleşmesi vasıtasıyla gelen id yi alıp ona karşılık gelen id ile eşleşmesini sağlayıp gerekli yere aktarımını sağlıyoruz.
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => setUser2(res.data))
    .catch((err) => console.log(err))
    //id her değiştiğinde yeniden render edilip yeni verini gösterimini bu şekilde dependency array ile sağlıyoruz.
  },[id]);

  return(
    <div>
      <h1>Users Detail</h1>
      {
        <ul>
          <li > {user2.name}  </li>
        </ul>
      }
      <Link to={`/users/${parseInt(id)+1}`}> Next User ({parseInt(id)+1}) </Link>
    </div>
  )
}

export default User2;