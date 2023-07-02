import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin"
import Signup from "./pages/Auth/Signup"
import Profile from "./pages/Profile";
//ProtectedRoute
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <div id="content" >
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}
function Home() {
  return (
    <h2>Home</h2>
  )
}

export default App;