import './App.css';

//yarn add react-router-dom ile paket yüklemesini yaptık ve bunları import ettik veee dedik ki "browserRouter" yerine "as" "Router" kullanılcak dedik.
import { BrowserRouter as  Router, Routes, Route, Link } from "react-router-dom";


import Home from './components/home';
import About from './components/about';
import Users from './components/users';

function App() {
  return (
    
      <Router>

        <div className=''>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Routes >


            <Route />
            <Route path="/about" element={<About />}>
            </Route>


            <Route />
            <Route path="/users" element={<Users />}>
            </Route>


            <Route />
            <Route path="/" element={<Home />}>
            </Route>

          </Routes >
        </div>

      </Router>
   
  );
}

//componentleri istersek buradan istersen de farklı component içerisinden gösterme işlemini yapabiliriz.
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