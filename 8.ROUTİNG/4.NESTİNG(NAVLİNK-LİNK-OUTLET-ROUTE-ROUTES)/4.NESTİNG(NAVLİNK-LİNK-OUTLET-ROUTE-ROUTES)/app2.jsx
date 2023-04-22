//GÜNCEL REACT-ROUTER-DOM İLE KURULDU.
//sayfada kullanılacak hookları tanımladık.
import { NavLink, BrowserRouter, Routes, Route } from "react-router-dom";
//kullanılan sayfaları tanımladık.
import Home2 from "./components2/home2";
import About2 from "./components2/about2";
import Users2 from "./components2/users2";
import User2 from "./components2/user2";
import Contacts2 from "./components2/contacts2";
 

function App2() {
  return (
    //browserRouter ile sarmala aldık. react'ın avantajı bu özelliğidir. güncelenen kısıma odaklanmasını sağlayan yapı budur.
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <NavLink to="/"> Home2 </NavLink>
          </li>
          <li>
            <NavLink to="/about2"> About2 </NavLink>
          </li>
          <li>
            <NavLink to="/users"> Users2 </NavLink>
          </li>
          <li>
            <NavLink to="/contacts2"> Contacts2 </NavLink>
          </li>
        </ul>

      </div>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/about2" element={<About2 />}/>

{/* burada users2 sayfası içerisinde user2 sayfasını göstereceğimiz için users2 sayfasıyla user2 sayfasını sarmalıyoruz. ve bu kısımı "Outlet ile gösterimini sağlıyoruz" */}
{/* ve ilk etapta verileri jsonplaceholder dan almadan önce sayfanın yolu users2 idi. fakat verileri alıp user2 de göstereceğimiz vakit path i değiştiriyoruz. */}
{/* user2 nin path ini de users2den gelecek olan id olacağı için :id şeklinde veriyoruz */}
        <Route path="/users" element={<Users2 />}> 
        <Route path=":id" element={<User2 />}/>
        </Route>

        <Route path="/contacts2" element={<Contacts2 />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App2;