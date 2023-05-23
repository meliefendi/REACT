

import { React } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ element }) {
    const { loggedIn } = useAuth();

    return loggedIn ? <Outlet/> : <Navigate to="/" />
       
    
}

export default ProtectedRoute;