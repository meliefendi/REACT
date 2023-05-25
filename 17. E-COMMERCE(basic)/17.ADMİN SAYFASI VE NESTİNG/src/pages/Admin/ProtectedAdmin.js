
import React from "react";
import { Box } from '@chakra-ui/react'

import { Link, Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import "./style.css"

function ProtectedAdmin() {
    const { user } = useAuth();
    return (
        <div>
            {user?.role !== "admin" && <Navigate to={"/"} replace={true} />}
            <nav>
                <ul className="admin-menu" >
                <li>
						<Link to={"/admin"}>Home</Link>
					</li>
					<li>
						<Link to={"/admin/orders"}>Orders</Link>
					</li>
					<li>
						<Link to={"/admin/AdminProducts"}>Products</Link>
					</li>
                </ul>
            </nav>
            <Box mt={10}>
				<Outlet />
			</Box>
        </div>
    )
}

export default ProtectedAdmin;