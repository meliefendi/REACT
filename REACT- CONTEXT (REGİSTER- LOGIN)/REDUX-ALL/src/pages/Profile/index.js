
import React from "react";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../context/AuthContext";
//logout sonrası yönlendime için
import { useNavigate } from "react-router-dom";

function Profile() {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async() => {
        logout();
//logout sonrası yönlendime için
        navigate("../")
    };

    return (
        <div>
            <h2 style={{ fontSize: "22px" }} >Profile</h2>
            <code> {JSON.stringify(user)} </code>
            <br/>
            <br/>
            <Button colorScheme="pink" variant="solid" onClick={handleLogout} >Logout</Button>
        </div>
    )
}

export default Profile;