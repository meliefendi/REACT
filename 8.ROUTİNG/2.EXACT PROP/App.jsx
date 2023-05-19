import './App.css';

//1.yarn add react-router-dom ile paket yüklemesini yaptık ve bunları import ettik veee dedik ki "browserRouter" yerine "as" "Router" kullanılcak dedik. //BU ARADA
// REACT-ROUTER-DOM GÜNCELLEME ALMIŞ VE YENİ HALİ AŞAĞIDAKİ ŞEKİLDE İMPORT EDİLİP PATH İ DE AŞAĞIDAKİ GİBİ VERİYORUZ SAYFASINDAKİ HATA VERİYOR.
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



import About from './components/about';
import Users from './components/users';
import Home from './components/home';

function App() {
  return (

    <Router>

      <div className=''>
        <nav>
          <ul>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes >
{/*           
          2.burada işlenen konu "exact" ne işe yarıyo dersek şöyle path'i "/" olduğu için ilk sıraya kondu mu about'a da tıklansa users'a da tıklansa home gelir.
           Bunun önüne geçmek için ya ilk sıraya koyulmaması gerekli ya da "exact" prop'u kullanılması gerekli. */}
          <Route />
          <Route path="/" exact element={<Home />}>
          </Route>

          <Route />
          <Route path="/about" element={<About />}>
          </Route>


          <Route />
          <Route path="/users" element={<Users />}>
          </Route>




        </Routes >
      </div>

    </Router>

  );
}

//1.componentleri istersek buradan istersen de farklı component içerisinden gösterme işlemini yapabiliriz.
// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }


export default App;
