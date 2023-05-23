

import { React } from "react";
//YÖNLENDİRME HOOKLARI
import { Outlet, Navigate } from "react-router-dom";

//KULLANICI LOGİN BİLGİSİ İÇİN CONTEXT BİLGİSİ
import { useAuth } from "../context/AuthContext";


function ProtectedRoute({ element }) {
    const { loggedIn } = useAuth();
//EĞER KULLANICI BİLGİSİ VARSA OUTLET O DA PROFİLE YOKSA ANASAYFAYA YÖNLENDİR
    return loggedIn ? <Outlet/> : <Navigate to="/" />
       
    
}

export default ProtectedRoute;
