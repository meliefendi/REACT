import './App.css';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Home from './components/home';
import About from './components/about';
import Users from './components/users';
import User from './components/user';

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
          <Route path="/" exact element={<Home />}>
          </Route>

          <Route />
          <Route path="/about" element={<About />}>
          </Route>


          <Route />
          <Route path="/users" element={<Users />}>
          </Route>


          <Route />
          <Route path="/user/:id" element={<User />}>
          </Route>




        </Routes >
      </div>

    </Router>

  );
}



export default App;